//stap1 Crieer een nieuwe file onder PLAYWRIGHT\tests (zelfde folder waar example.spec.ts in zit)
//stap2 Die nieuwe file geef je een naam met aangevuld .spec.ts
//stap3 in die nieuwe file schrijf je de onderstaande import. Deze roept de modules test en expect aan
import { test, expect } from '@playwright/test';
// de modules test en expect worden opgehaald uit PLAYWRIGHT\node_modules\@playwright\test\lib

// onderstaand de aanroep voor je eerste test. Tussen de quotes achter test kan je je test  een naam geven
// in dit geval 'Open - Homepage'. Bij de page.goto vul je tussen de '' in welke url je wilt openen
test('Open - Homepage', async ({ page }) => {   //<-- { hiermee open je de functie 'test' welke je later afsluit
    await page.goto('https://www.pancompany.com/');

// We klikken ook de cookie banner weg
await page.getByRole('button', { name: 'Deny' }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Kandidaten - Pancompany/);
});                                             //<-- })hiermee sluit je de functie 'test' af. 


//Voor de volgende test roepen we weer de homepage aan, klikken we de banner weg maar willen we
//op de knop, Over Pancompany, klikken en valideren op 2 manieren dat de pagina is geopen 
test('Open - Over Pancompany', async ({ page }) => {
  await page.goto('https://www.pancompany.com/');

// We klikken ook de cookie banner weg
await page.getByRole('button', { name: 'Deny' }).click();

  // Klik op de , Over PanCompany, knop.
  //await page.getByRole('link', { name: 'Over PanCompany' }).click();
  await page.getByTitle('Over PanCompany').click();

    // Verwacht dat er in de URL nu, over-pancompany, staat.
    await expect(page).toHaveURL(/.*over-pancompany/);

    await page.locator('section').filter({ hasText: 'Wij zijn Pancompany Pancompany is een community van Proven IT Experts. Wij houde' }).getByRole('link', { name: 'Neem contact op' }).click();
  });


//Voor de volgende test roepen we weer de Pancompany homepage weer aan maar dan voor de opdrachtgevers, klikken we de banner weg maar willen we
//op de knop, Over Pancompany, klikken en valideren op 2 manieren dat de pagina is geopen 
test('Open - Pancompany', async ({ page }) => {
  await page.goto('https://www.pancompany.com/opdrachtgevers/');

// We klikken ook de cookie banner weg
await page.getByRole('button', { name: 'Deny' }).click();

  //await page.getByRole('link', { name: 'This is who we are.' }).click();
  await page.getByRole('heading', { name: 'This is who we are.' })

  // Verwacht dat er in de URL nu, over-pancompany, staat.
  await expect(page).toHaveURL(/.*opdrachtgevers/);

  // Verwacht dat het plaatje van de AH er staat.
  await page.locator('div:nth-child(2) > .w-grid-item > .w-grid-item-h > .w-post-elm > .attachment-large').click();
  
  });