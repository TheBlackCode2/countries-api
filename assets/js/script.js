import { CountryBoxTemplate } from "./country_module.js"

const searchBoxInput = document.querySelector('#search-input')
const filterBox = document.querySelector('.filter-box')
const filterBoxOptions = document.querySelectorAll('.filter-list li')
const countriesWrapper = document.querySelector('#countries .wrapper')
const countries = JSON.parse(localStorage.getItem('countries'))
const  countrySelectionCriterion = {
    region: "",
    name: "",
    capital: ""
}

countries.forEach(country => {
    countriesWrapper.appendChild(CountryBoxTemplate(country))
})

filterBox.addEventListener('click', () => {
    filterBox.classList.toggle('open')
})

filterBoxOptions.forEach(item => {
    item.addEventListener('click', () => {
        const filterBoxTitleNode = filterBox.querySelector('h3 span')
        filterBoxTitleNode.innerText = item.textContent
        countrySelectionCriterion.region = item.getAttribute('filter').toLowerCase()
        SearchAndFilter()
    })
})

searchBoxInput.addEventListener('keyup', () => {
    countrySelectionCriterion.name = searchBoxInput.value.toLowerCase()
    SearchAndFilter()
})



function SearchAndFilter()
{
    countriesWrapper.querySelectorAll('.country-box').forEach(countryBox => {
        const countryName = countryBox.querySelector('#name').textContent.toLowerCase()
        const countryRegion = countryBox.querySelector('#region').textContent.toLowerCase()
        const result = countryName.includes(countrySelectionCriterion.name) &&
                       countryRegion.includes(countrySelectionCriterion.region)

        if (!result)
            countryBox.style.display = 'none'
        else
            countryBox.style.display = 'block'
    })
}
