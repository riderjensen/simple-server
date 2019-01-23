const express = require('express');
const router = express.Router();

const apiRouter = require('../controllers/api');

router.get('/', apiRouter.sendApiData);

module.exports = router;