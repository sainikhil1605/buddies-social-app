import { Request, Response } from "express";

const express = require('express');
const AWS = require('aws-sdk');

const app = express();
const port = 3000;

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'your-region'
});
const s3 = new AWS.S3();

// Route for generating presigned URL
app.get('/presigned-url', (req:Request, res:Response) => {
  const filename=req.user;
  // Configure parameters for generating presigned URL
  const params = {
    Bucket: 'your-s3-bucket',
    Key: `uploads/${filename}`, // Key is the path to the file in the bucket
    Expires: 600 // URL expires in 10 minutes (600 seconds)
  };

  // Generate presigned URL
  s3.getSignedUrl('putObject', params, (err, url) => {
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
