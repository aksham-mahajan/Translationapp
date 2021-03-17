// welcome to event based programming
// and callback
// button click
var translateButton = document.querySelector("#translate-button");

translateButton.addEventListener("click", buttonClickHandler)

// read input
var translateInput = document.querySelector("#translate-input");

// show output
var translateOutput = document.querySelector("#translate-output");

var url = "https://api.funtranslations.com/translate/dothraki.json"

// REPL URL: https://repl.it/@tanaypratap/lessonfourapi

function buttonClickHandler(event) {
    console.log("button clicked");
    var input = translateInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))
    
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
        }

        // function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

        // Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();