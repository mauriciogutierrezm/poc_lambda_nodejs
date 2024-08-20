const app = require('./app');

exports.handler = async (event) => {
  const result = await new Promise((resolve) => {
    app.handle(event, null, (res) => {
      resolve({
        statusCode: res.statusCode,
        headers: res._headers,
        body: res.body,
      });
    });
  });
  return result;
};
