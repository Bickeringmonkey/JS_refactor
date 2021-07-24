let html = '';
let red;
let green;
let blue;
let randomRGB;
let main = document.querySelector('main');

// Function and While Loop

function getRgbColor() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
}

var count = 0;
while ( count < 10) {
    getRgbColor();
    count++;
    html += `<div style="background-color: ${randomRGB}">${count}</div>`; 
}
main.innerHTML = html;

// for loop

for ( let i = 11; i <= 20; i++ ) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`; 
}

main.innerHTML = html;

// function with a for loop

function getRgbColor2() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
     }

for ( let i = 21; i <= 30; i++ ) {
    getRgbColor2();
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

main.innerHTML = html;

// Further refactoring
const randomValue = () => Math.floor(Math.random() * 256 ); // this creates a random value for colors

function randomRGB1(value) {
    const color = `rgb( ${value()}, ${value()}, ${value()})`; // Generates a random RGB Color
    return color;
}

for ( let i = 31; i <= 40; i++ ) {
    html += `<div style="background-color: ${randomRGB1(randomValue)}">${i}</div>`; 
}

main.innerHTML = html;
// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">1</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">2</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">3</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">4</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">5</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">6</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">7</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">8</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">9</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">10</div>`;

