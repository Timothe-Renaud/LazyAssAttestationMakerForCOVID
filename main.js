/**
 * @author: Timothé-Renaud Langlois - Teston
 * @date: 09/11/2020
 * Genere automatiquement ton certificat de sortis COVID
 * Procedur:
 * - npm i pupperteer
 * - relancé l'IDE
 * - lancé le script vie l'IDE
 */

const puppeteer = require('puppeteer');
//const iPhone = puppeteer.devices['iPhone 6'];

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 10
  });

  //Methode Date
  var today = new Date();
  var Jour = today.getDay() +" "+ today.getMonth() +" "+ today.getFullYear();
  var d = today; 
  d.setMinutes(d.getMinutes() + 5);
  var TimeZer = d.getHours() +" "+ d.getMinutes();


  const page = await browser.newPage();
  //await page.emulate(iPhone);

  // Suite des ordres des montagnes
  await page.goto('https://media.interieur.gouv.fr/deplacement-covid-19/');  
  
  await page.keyboard.press('Enter');
  await page.type('#field-firstname', 'Timothé-Renaud');
  await page.type('#field-lastname', 'Langlois-Teston');
  await page.type('#field-birthday', '28041998');
  await page.type('#field-placeofbirth', 'La Seyne Sur Mer');
  await page.type('#field-address', '10 AV de la convention');
  await page.type('#field-city', 'Arcueil');
  await page.type('#field-zipcode', '94110');
  await page.type('#field-datesortie', Jour);
  await page.type('#field-heuresortie', TimeZer);
  await page.click('#checkbox-travail');
  await page.click('#generate-btn');
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  
  //await page.screenshot({path: 'example.png'});
  //await page.
})
();