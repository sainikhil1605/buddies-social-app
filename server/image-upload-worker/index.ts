const AWS = require('aws-sdk');
const mysql = require('mysql');

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'your-region'
});
const sqs = new AWS.SQS();
const s3 = new AWS.S3();

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your-mysql-user',
  password: 'your-mysql-password',
  database: 'your-database'
});
db.connect();

// Worker function to process messages from the queue
function processMessage(message) {
  const { userId, imageUrl } = JSON.parse(message.Body);

  // Upload the image to S3
  const params = {
    Bucket: 'your-s3-bucket',
    Key: `images/${userId}/${Date.now()}`,
    Body: imageUrl
  };
  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading image to S3:', err);
      return;
    }

    // Update the MySQL table with the image URL
    const imageUrl = data.Location;
    db.query('UPDATE images SET url = ? WHERE user_id = ?', [imageUrl, userId], (error, results, fields) => {
      if (error) {
        console.error('Error updating MySQL table:', error);
        return;
      }

      console.log('Image URL updated in MySQL:', imageUrl);
    });
  });
}

// Poll the SQS queue for messages
function pollQueue() {
  const params = {
    QueueUrl: 'your-sqs-queue-url',
    MaxNumberOfMessages: 10
  };
  sqs.receiveMessage(params, (err, data) => {
    if (err) {
      console.error('Error receiving message from SQS:', err);
      return;
    }

    if (data.Messages) {
      data.Messages.forEach(message => {
        processMessage(message);

        // Delete the message from the queue
        sqs.deleteMessage({
          QueueUrl: 'your-sqs-queue-url',
          ReceiptHandle: message.ReceiptHandle
        }, (err, data) => {
          if (err) {
            console.error('Error deleting message from SQS:', err);
            return;
          }
        });
      });
    }

    // Poll the queue again after a short delay
    setTimeout(pollQueue, 1000);
  });
}

// Start polling the SQS queue
pollQueue();
