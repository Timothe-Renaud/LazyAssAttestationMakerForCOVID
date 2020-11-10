/**
 * @author: Timothé-Renaud Langlois - Teston
 * @date: 09/11/2020
 * Génere automatiquement ton certificat de sortis COVID
 * Procédur:
 * - npm i pupperteer
 * - relancé l'IDE
 * - lancé le script vie l'IDE
 */

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 10
  });

  //Recup Date+Heure
  var today = new Date();
  var Jour = today.getDay() +" "+ today.getMonth() +" "+ today.getFullYear();
  var tmp = today; 
  tmp.setMinutes(tmp.getMinutes() + 5);
  var Tmp = tmp.getHours().toString().concat( tmp.getMinutes().toString());

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 926 });

  // Suite des ordres des montagnes
  await page.goto('https://media.interieur.gouv.fr/deplacement-covid-19/');  
  await page.keyboard.press('Enter');
  await page.type('#field-firstname', 'First-Name');
  await page.type('#field-lastname', 'LastName');
  await page.type('#field-birthday', '01011998');
  await page.type('#field-placeofbirth', 'MaVilleZer');
  await page.type('#field-address', 'Mon adresseZer');
  await page.type('#field-city', 'MaVille');
  await page.type('#field-zipcode', '75000');
  await page.type('#field-datesortie', Jour);
  await page.type('#field-heuresortie', Tmp);
  await page.click('#checkbox-travail');
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await page.click('#generate-btn');

})
();