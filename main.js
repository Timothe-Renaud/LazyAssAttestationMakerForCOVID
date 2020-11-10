/**
 * @author: Timothé-Renaud Langlois - Teston
 * @date: 09/11/2020
 * Genere automatiquement ton certificat de sortis COVID
 * Procedur:
 * - npm i pupperteer
 * - relancé l'IDE
 * - lancé le script vie l'IDE
 * 
 * Le script fonctionne a 70% voir les autres branches pour les issues.
 */

const puppeteer = require('puppeteer');

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
  var TimeZer = d.getHours() +""+ d.getMinutes();

 //Ordres fonctionnel sur la pages web des montagnes
  const page = await browser.newPage();
  await page.goto('https://media.interieur.gouv.fr/deplacement-covid-19/');  //u can change the URL 
  await page.keyboard.press('Enter'); //dismiss the update popup that displayed on the page (normaly)
  await page.keyboard.press('Enter');
  await page.type('#field-firstname', 'First-Name', {delay: 10});
  await page.type('#field-lastname', 'LastName', {delay: 10});
  await page.type('#field-birthday', '01011998', {delay: 10});
  await page.type('#field-placeofbirth', 'MaVilleZer', {delay: 5});
  await page.type('#field-address', 'Mon adresseZer', {delay: 9});
  await page.type('#field-city', 'MaVille', {delay: 7});
  await page.type('#field-zipcode', '94110', {delay: 3});
  await page.type('#field-datesortie', Jour, {delay: 4});

  //Issue with date time here
  await page.click('#field-heuresortie', TimeZer, {delay:3});
  await page.keyboard.press('Enter'); 
  await page.click('#checkbox-travail');

  //validation du Form
  await page.click('#generate-btn');
})();