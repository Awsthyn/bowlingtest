const { Router } = require('express');
const bowlingRouter = require('./bowling.js')
const router = Router();

router.use('/bowling', bowlingRouter);

module.exports = router;
