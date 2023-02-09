//stap1 Crieer een nieuwe file onder PLAYWRIGHT\tests (zelfde folder waar example.spec.ts in zit)
//stap2 Die nieuwe file geef je een naam met aangevuld .spec.ts
//stap3 in die nieuwe file schrijf je de onderstaande import. Deze roept de modules test en expect aan
import { test, expect } from '@playwright/test';
// de modules test en expect worden opgehaald uit PLAYWRIGHT\node_modules\@playwright\test\lib

// onderstaand de aanroep voor je eerste test. Tussen de quotes achter test kan je het een naam geven
// in dit geval 'Naamgeving'. Bij de page.goto vul je tussen de '' in welke url je wilt openen
test('Naamgeving', async ({ page }) => { //<-- { hiermee open je de functie test welke je later afsluit
    await page.goto('https://www.pancompany.com/');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Kandidaten - Pancompany/);
}); //<-- })hiermee sluit je de functie test af. 


