const puppeteer = require('puppeteer')

const getInfoTest = (async () =>  {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const porcinos = await page.goto("https://marca.com")
    
    await page.screenshot({ path: "src/infoTest/image.png" })

    const tagHtml = await page.evaluate(() => {
        const names = []
        const positions = []
        /* const stats = [] */

        const getsNames = document.querySelectorAll('.el-title.uk-heading-medium.uk-font-secondary.uk-text-secondary.uk-margin-remove-top.uk-margin-remove-bottom')
        getsNames.forEach((player) => {
            names.push(player.innerHTML.trim())
        });

        const getPositions = document.querySelectorAll('.el-content.uk-panel.uk-text-large span')
        getPositions.forEach((position) => {
            positions.push(position.innerText)
        });

        // this function brings the players stats
        /* const getStats = document.querySelectorAll('.el-meta.uk-text-large.uk-text-primary.uk-margin-medium-top')
        getStats.forEach((stat) => {
            stats.push(stat.innerHTML)
        }) */

        const result = Object.fromEntries(names.map((k, i) => [k, positions[i]]))

        return result
        
    })

    console.log(" esto busco", tagHtml)

    await browser.close();
    return {platyers: tagHtml}

})()





module.exports = {
    getInfoTest
}