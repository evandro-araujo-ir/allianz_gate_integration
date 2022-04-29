const { Consumer } = require('sqs-consumer');
const { handleWhiteListMessages } = require('./src/controller');
// const logger = require('../config/logger')

const whitelistConsumer = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/646770040222/pantoja_teste',
  handleMessage: handleWhiteListMessages
});

whitelistConsumer.on('error', (err) => {
  console.error(err.message);
});

whitelistConsumer.on('processing_error', (err) => {
  console.error(err.message);
});

whitelistConsumer.start();