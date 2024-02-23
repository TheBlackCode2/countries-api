class Country
{
    constructor()
    {
        this.name = ''
        this.nativeName = ''
        this.flagURL = ''
        this.population = 0
        this.region = ''
        this.subRegion = ''
        this.capital = ''
        this.topLevelDomain = []
        this.currencies = []
        this.languages = []
        this.borderCountries = []
    }
}
let count = 0
function CountryBoxTemplate(country)
{
    if (country === null)
        return
    
    const countryBoxItem = document.createElement('article')
    countryBoxItem.id = count
    count++
    countryBoxItem.className = 'country-box'
    countryBoxItem.innerHTML = `
        <img src="${country.flagURL}">
        <div class="country-info">
            <h2 id="name">${country.name}</h2>
            <p>Population: <span id="population">${country.population}</span></p>
            <p>Region: <span id="region">${country.region}</span></p>
            <p>Capital: <span id="capital">${country.capital}</span></p>
        </div>
        `
    countryBoxItem.addEventListener('click', ()=> {
        localStorage.setItem('countryID', countryBoxItem.id)
        location.href = './country.html'
    })
    return countryBoxItem
}

export default Country
export {CountryBoxTemplate}