const express = require('express');
const router = express.Router();

const storeRouter = require('../controllers/store.controller');

router.get('/', storeRouter.storeHome);

module.exports = router;