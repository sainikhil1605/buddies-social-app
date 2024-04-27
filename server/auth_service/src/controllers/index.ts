import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const { generateToken } = require("../utils");
const bcrypt = require("bcrypt");

const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const prisma = new PrismaClient();
  const hashedPassword = await bcrypt.hash(password, 10);

  async function main() {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return user;
  }

  main()
    .then(async (user) => {
      const token = generateToken(user);
      res.status(200).json({ token });
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      res.status(500).json({ error: "Something went wrong" });
      await prisma.$disconnect();
      process.exit(1);
    });
};
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const prisma = new PrismaClient();
  async function main() {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      // User authenticated, create JWT
      const token = generateToken(user);
      res.json({ token });
    } else {
      res.status(401).send("Username or password incorrect");
    }
  }
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      res.status(500).json({ error: "Something went wrong" });
      await prisma.$disconnect();
      process.exit(1);
    });
};
module.exports = { signUp, login };
