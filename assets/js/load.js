import Country from './country_module.js';

const request = new XMLHttpRequest()

request.onload =  () => {
    const response = request.responseText
    const data = JSON.parse(response)
    const countries = []

    data.forEach(item => {
        const country = new Country()
        // Fill Data
        country.name = item.name
        country.nativeName = item.nativeName
        country.flagURL = item.flags.png
        country.population = item.population
        country.region = item.region
        country.subRegion = item.subregion
        country.capital = item.capital
        country.topLevelDomain = item.topLevelDomain
        country.currencies = item.currencies
        country.languages = item.languages
        country.borderCountries = item.borders
        countries.push(country)
    })

    const stringifyData = JSON.stringify(countries)
    localStorage.setItem('countries', stringifyData)
    console.log('Size of data: ' + stringifyData.length * 2 + " bytes")
}
request.open('GET', "assets/data/data.json", true);

if (localStorage.getItem('countries') === null)
    request.send()
