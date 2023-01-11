const { Router } = require("express");
const getUrl = require('./getUrl.js')

const router = Router();

router.use('/', getUrl)

// Configurar los routers

module.exports = router;