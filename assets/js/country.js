const countryFlag = document.querySelector(".country-flag")
const countryName = document.querySelector("#name")
const nativeName = document.querySelector("#native-name")
const population = document.querySelector("#population")
const region = document.querySelector("#region")
const subRegion = document.querySelector("#sub-region")
const capital = document.querySelector("#capital")

const topLevelDomain = document.querySelector("#top-level-domain")
const currencies = document.querySelector("#currencies")
const languages = document.querySelector("#languages")

const borderCountries = document.querySelector(".border-countries")


const countries = JSON.parse(localStorage.getItem('countries'))
const selectedCountry = countries[parseInt(localStorage.getItem("countryID"))]

countryFlag.src = selectedCountry.flagURL
countryName.textContent = selectedCountry.name
nativeName.textContent = selectedCountry.nativeName
population.textContent = selectedCountry.population
region.textContent = selectedCountry.region
subRegion.textContent = selectedCountry.subRegion
capital.textContent = selectedCountry.capital

topLevelDomain.textContent = selectedCountry.topLevelDomain
currencies.textContent = selectedCountry.currencies[0].code
languages.textContent = selectedCountry.languages.map( language => language.name).join(", ")

borderCountries.innerHTML = selectedCountry.borderCountries.map(
    countryName => `<a href="#" class="primary-btn small-btn">${countryName}</a>`
).join('')
