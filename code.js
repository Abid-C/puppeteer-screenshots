const puppeteer = require('puppeteer');

const url = "https://www.google.com"

const Screenshot = async () => {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(url);

    await page.screenshot ({

        path: "./screenshot.png",

        fullPage: true
    });
}

Screenshot ();