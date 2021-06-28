const router = require('express').Router();
const articlesRouter = require('./articles');

router.use('/articles', articlesRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
