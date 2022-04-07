const puppeteer = require('puppeteer');

const url = "https://www.google.com"

const Screenshot = async () => {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(url);

    await page.screenshot ({

        path: "./screenshots/screenshot.png",

        fullPage: true
    });
}

Screenshot ()
.then( (r)=>{
    console.log('Screenshot taken.');
    process.exit(0);
})
.catch(err=>{
    console.log('Something went wrong');
    console.error(err);
    process.exit(0);
});