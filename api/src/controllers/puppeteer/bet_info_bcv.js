const puppeteer = require('puppeteer');

// esta función es para correr 
// y retorna la información

const getInfoBcv = (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    try {
        await page.goto("https://www.bcv.org.ve/")
    }

    catch (error) {
        console.log(
            {
                error: error,
                file: '"/api/src/controllers/getInfo.js"',
                observation: 'Normaly "this.file" has the dir where de file is, now is commented ',
                desription: "firts URL request, from the bot puppeteer"
            })
    }

    // Función que trae la info HTML

    const tagHtml = await page.evaluate(() => {
        const tags = document.querySelectorAll('.col-sm-6.col-xs-6.centrado strong')
        const tasas = []
        tags.forEach((tag) => {
            tasas.push(tag.innerHTML)
        });

        return tasas[tasas.length - 1]
    })

    // cierra el navegador
    await browser.close();
    // returna el array con la info
    console.log("BCV data is a ",typeof parseInt(tagHtml)) // number
    return parseInt(tagHtml) 

})();


module.exports = {
    getInfoBcv
}
