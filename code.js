const optionDefinitions = [
    { name: 'url', alias: 'u', type: String },
    { name: 'viewport', alias: 'v', type: String, multiple: true, defaultOption: true }
]

const commandLineArgs = require ('command-line-args')
const options = commandLineArgs (optionDefinitions)

const puppeteer = require('puppeteer');

const Screenshot = async (url) => {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(url);

    const _url = new URL(url)

    await page.screenshot ({

        path: "./screenshots/" + _url.hostname + ".png",  
    });
}

Screenshot (options.url)
.then( (res)=>{
    console.log('Screenshot taken.');
    process.exit(0);
})
.catch(err=>{
    console.log('Something went wrong');
    console.error(err);
    process.exit(0);
});