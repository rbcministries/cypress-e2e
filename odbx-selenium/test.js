const { Builder, By, Key, until } = require('selenium-webdriver');

const driver = new Builder()
  .forBrowser('firefox')
  .usingServer('http://localhost:4444/wd/hub')
  .build();

driver.get('https://odb.org').then(async function () {


});