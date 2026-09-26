import{test, expect} from '@playwright/test'

test('Login', async({page})=>
    {        
    //await expect(page).toHaveTitle('OpenCart - Open Source Shopping Cart Solution')
    //await expect(page).toHaveURL('https://www.opencart.com/')
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
})