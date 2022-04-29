const { Consumer } = require('sqs-consumer');
const { handleWhiteListMessages } = require('./src/controller');
// const logger = require('../config/logger')

const blacklistConsumer = Consumer.create({
    queueUrl: 'https://sqs.us-east-1.amazonaws.com/646770040222/bileto_allianz_gate_integration_blacklist',
    handleMessage: async (message) => await handleWhiteListMessages(message, 'blacklist')
});

blacklistConsumer.on('error', (err) => {
    console.error('[BLACKLIST]', err.message);
});

blacklistConsumer.on('processing_error', (err) => {
    console.error(err.message);
});

blacklistConsumer.start();