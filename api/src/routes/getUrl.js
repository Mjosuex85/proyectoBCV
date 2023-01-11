const { Router } = require('express');
const router = Router()
const { getInfoBcv } = require('../controllers/puppeteer/bet_info_bcv.js');
const { getInfoTest } = require('../controllers/puppeteer/get_info_test.js');

router.get('/', async (req, res) => {
    
    try {
        const dolar = await getInfoBcv;
        res.status(200).send({
            rate: "$",
            value: dolar
        });
    }

    catch(error) {
        console.log(error)
    }
    
});

router.get('/test', async (req, res) => {
    try {
        const info = await getInfoTest
        res.status(200).send([info]);
    }

    catch(error) {
        console.log(error)
    }
});

module.exports = router;