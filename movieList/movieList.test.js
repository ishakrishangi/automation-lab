const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async() => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll( async() => {
    await driver.quit()
})


describe('Testing if movieList works',()=>{
    
    test('displaying shrek',async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('Shrek\n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })
    
    test('shrek 2 display',async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('Shrek 2 \n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })

    test('shrek 3 display' ,async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('Shrek 3 \n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })

    test('shrek 4 display',async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('Shrek 4\n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })

    test('cross off works',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        await driver.sleep(2000)
        let checked =  await driver.findElement(By.xpath('//li//span')).getAttribute('class')
        expect(checked).toBe('checked')
    })

    test('uncross off works',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        await driver.sleep(2000)
        let checked =  await driver.findElement(By.xpath('//li//span')).getAttribute('class')
        expect(checked).toBe('')
    })

    test('crossed off message works',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        const displayed = await driver.findElement(By.xpath('//main/aside')).getText()
        expect(displayed).toBe('Shrek watched!')
    })

    test('uncrossed off message works',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        const displayed = await driver.findElement(By.xpath('//main/aside')).getText()
        expect(displayed).toBe('Shrek added back!')
    })

    test('delete Shrek 2 works',async()=>{
        await driver.findElement(By.xpath('(//main/ul/li/button)')).click()
        await driver.sleep(2000)
        const input = await driver.findElement(By.xpath('//input')).getText()
        expect(input).toBe('')
    })

    


})
