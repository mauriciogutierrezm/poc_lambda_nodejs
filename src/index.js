const app = require('./app');
const serverless = require('serverless-http');

const handler = serverless(app);

exports.handler = async (event, context) => {
  return await handler(event, context);
};
