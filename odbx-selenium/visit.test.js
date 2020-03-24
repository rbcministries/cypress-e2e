let assert = require('chai').assert,
wd = require('selenium-webdriver');

const { webdriver, Builder, By, Key, until } = wd;

describe('Devotional', function () {
    this.timeout(30000);
    it('Visit', async function () {
        const driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://odb.org/');

        const todayButton = By.css('h1.today-title>a');
        var query = await driver.wait(until.elementLocated(todayButton), 30000);
        await driver.wait(until.elementIsVisible(query), 30000);

        const footer = driver.findElement(By.tagName('footer'));
        await driver.executeScript("arguments[0].scrollIntoView()", footer);

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