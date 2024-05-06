import { Request, Response } from "express";
import AWS from 'aws-sdk';
const express = require("express");

const app = express();


AWS.config.update({
  credentials:{
    accessKeyId: process.env.AWS_ACCESS_KEY_ID||"",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY||""
  },
  region: 'us-east-1'
})
const sqs = new AWS.SQS();

// Route for creating a new post
app.post('/posts', (req:Request, res:Response) => {
  const { userId, content } = req.body;

  // Send the post to the SQS queue
  const params = {
    MessageBody: JSON.stringify({ userId, content }),
    QueueUrl: 'your-sqs-queue-url'
  };

  sqs.sendMessage(params, (err, data) => {
    if (err) {
      console.error('Error sending message to SQS:', err);
      return res.status(500).send('Error creating post');
    }

    res.send('Post created successfully');
  });
});


app.listen(3003, () => {
  console.log("Post Service is running on port 3003");
});
