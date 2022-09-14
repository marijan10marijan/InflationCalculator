
const price = document.getElementById('inflation_price')
const percent = document.getElementById('inflation_percent')
const years = document.getElementById('years_calculation')
const display = document.querySelector('.show-data')

const button = document.querySelector('#button')

function calculate() {
    let priceValue = parseFloat(price.value)
    let percentValue = parseFloat(percent.value)
    for (let i = 0; i < parseFloat(years.value); i++) {
        priceValue = priceValue + (priceValue * (percentValue / 100))
    }
    return priceValue.toFixed(2)
}

function calculateInflation() {
    const text = `Today's ${price.value} dollars is worth ${calculate()} dollars after ${years.value} years, at a ${percent.value}% inflation rate. `
    const paragraph = document.createElement('p')
    paragraph.innerText = text
    paragraph.classList.add('style-pargraph')
    display.appendChild(paragraph)
    price.value = ''
    years.value = ''
    percent.value = ''
}

button.addEventListener('click', calculateInflation)