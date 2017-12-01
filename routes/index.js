
const router = require('express').Router();

router.get('/favicon.ico', (req, res) => res.sendStatus(200));

router.get('/', (req, res) => res.render('./index.pug'));

module.exports = router;
