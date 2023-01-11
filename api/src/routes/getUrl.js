const { Router } = require('express');
const router = Router()
const { getInfoBcv } = require('../controllers/puppeteer/bet_info_bcv.js');

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

module.exports = router;