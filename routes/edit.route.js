const express = require('express');
const router = express.Router();

const editRouter = require('../controllers/edit.controller');

router.get('/:id', editRouter.doEdit);

router.put('/update/:id', editRouter.editOne);

router.delete('/delete/:id', editRouter.deleteOne);

router.post('/create', editRouter.createOne);

module.exports = router;