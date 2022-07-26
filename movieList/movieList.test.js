const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async() => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll( async() => {
    await driver.quit()
})


describe('movie-list tests', () => {

    test('check if movie is added to the list', async() => {
        //selecting the input element and sending it keys
        await driver.findElement(By.xpath('//input')).sendKeys('Shrek\n')
        await driver.sleep(2000)
        await driver.findElement(By.xpath('//input')).sendKeys('Shrek 2\n')
        await driver.sleep(2000)
        await driver.findElement(By.xpath('(//main/ul/li/span)[2]')).click()
        // await driver.sleep(2000)

        const isDisplayed = await driver.findElement(By.xpath('//main/aside')).isDisplayed()
        expect(isDisplayed).toBeTruthy()
        await driver.sleep(2000)


        await driver.findElement(By.xpath('(//main/ul/li/button)[2]')).click()
        await driver.sleep(2000)

    })
})


        //selectint the button and clicking it
        // await driver.findElement(By.xpath('//button')).click()
        

        // const movie = await driver.findElement(By.xpath('//li'))

        // const displayed = movie.isDisplayed()

        // expect(displayed).toBeTruthy()
        // await driver
