const express = require('express');

const apiRouter = require('../controllers/api');

const router = express.Router();

router.get('/', apiRouter.sendApiData);

module.exports = router;