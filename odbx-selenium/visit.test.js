let assert = require('chai').assert,
    wd = require('selenium-webdriver');

const fs = require('fs');
const { webdriver, Builder, By, Key, until } = wd;

describe('Devotional', function () {
    this.timeout(120000); // 2 minutes, just in case
    it('Visit', async function () {
        const driver = await new Builder()
            .usingServer('http://127.0.0.1:4444/wd/hub')
            .forBrowser('firefox').build();
        await driver.get('https://odb.org/');

        const todayButton = By.css('h1.today-title>a');
        var query = await driver.wait(until.elementLocated(todayButton), 30000);
        await driver.wait(until.elementIsVisible(query), 30000);

        const footer = driver.findElement(By.tagName('footer'));
        await driver.executeScript("arguments[0].scrollIntoView()", footer);

        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)", footer);

        const footerAddress = await driver.wait(until.elementLocated(By.css('footer address')), 30000);
        await driver.wait(until.elementIsVisible(footerAddress), 30000);

        const imgData = await driver.takeScreenshot();
        fs.writeFile('img.png', imgData, 'base64', function (err) {
            if (err) return console.log(err);
            console.log('Screenshot saved');
        });

        let titleHome = await driver.getTitle();

        await driver.findElement(todayButton).click();

        const devoTitle = By.css('.devo-title');
        var query = await driver.wait(until.elementLocated(devoTitle), 30000);
        await driver.wait(until.elementIsVisible(query), 30000);

        const titleDevo = await driver.getTitle();
        await assert.notEqual(titleHome, titleDevo);
        await driver.quit()
    })
});