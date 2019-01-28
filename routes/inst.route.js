const express = require('express');
const router = express.Router();

const instRouter = require('../controllers/inst.controller');

router.get('/', instRouter.instHome);

module.exports = router;