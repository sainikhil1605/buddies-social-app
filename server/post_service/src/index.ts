import { Error,URI } from "aws-sdk/clients/s3";
import { NextFunction, Request, Response } from "express";

const express = require('express');
const AWS = require('aws-sdk');
require("dotenv").config();
const app = express();
const port = 3003;
app.use(express.json())


interface AuthRequest extends Request{
  user?:any,
}
console.log(process.env.AWS_SECRET_ACCESS_KEY)
// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  forcePathStyle: true
});

const s3 = new AWS.S3();

// Route for generating presigned URL
app.post('/presigned-url', async(req:AuthRequest, res:Response) => {
  console.log(req);
  const userId=req.headers['x-user-id'];
  
  const fileType=req.body.fileType;
  
  const filename=`${userId}/${Date.now()}`;
  console.log(filename)
  // Configure parameters for generating presigned URL
  const params = {
    Bucket: 'buddies-appx',
    Key: `uploads/${filename}`, // Key is the path to the file in the bucket
    Expires: 600,// URL expires in 10 minutes (600 seconds)
    ContentType:fileType
  };

  // Generate presigned URL
  s3.getSignedUrl('putObject', params, (err:Error, url:URI) => {
    if (err) {
      console.error('Error generating presigned URL:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Send the presigned URL to the client
    res.json({ url });
  });
});

app.listen(port, () => {
  console.log(`Post service running at http://localhost:${port}`);
});
