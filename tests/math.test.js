const { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius, add } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should convert 32F to 0C', () => {
    const toCelsius = fahrenheitToCelsius(32)
    expect(toCelsius).toBe(0)
})

test('Should convert 0C to 32F', () => {
    const toFahrenheit = celsiusToFahrenheit(0)
    expect(toFahrenheit).toBe(32)
})

test('Should add two numbers', (done) => {
    add(3, 5).then((sum) => {
        expect(sum).toBe(8)
        done()
    })
})

test('Should add two numbers async/await', async () => {
    const sum = await add(22, 5)
    expect(sum).toBe(27)
})