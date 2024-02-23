const body = document.body;
const switchModeBtn = document.querySelector('.mode')

const defaultTheme = 'light-mode'
const storedTheme = localStorage.getItem('theme')

let theme = (storedTheme === null) ? defaultTheme : storedTheme;
body.className = theme

if (switchModeBtn === null)
    throw new Error("Failed to load switch mode button!");

switchModeBtn.addEventListener('click', () => {
    const modeIcon = switchModeBtn.querySelector('ion-icon')
    const modeTextNode = switchModeBtn.querySelector('span')

    if (theme == 'light-mode')
    {
        theme = 'dark-mode'
        body.className = theme
        modeIcon.setAttribute('name', 'Sunny')
        modeTextNode.innerText = 'Light Mode'
        localStorage.setItem('theme', theme)
    }
    else
    {
        theme = 'light-mode'
        body.className = theme
        modeIcon.setAttribute('name', 'Moon')
        modeTextNode.innerText = 'Dark Mode'
        localStorage.setItem('theme', theme)
    }
})

