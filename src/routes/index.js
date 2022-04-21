const router = require('express').Router();

const { getClientLocation } = require('../utils/locationResolvers');
const { healthcheckRouter } = require('./healthcheck');
const { weatherRouter } = require('./weather');

router.use('/healthcheck', healthcheckRouter);
router.use('/location', (async (req, res) => res.json(await getClientLocation())));
router.use('/', weatherRouter);

module.exports = {
  router,
};
