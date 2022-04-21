const healthcheckRouter = require('express').Router();

healthcheckRouter.use((req, res) => {
  res.send('Alive!');
});

module.exports = {
  healthcheckRouter,
};
