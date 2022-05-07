let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let css = document.querySelector('h3');
let body = document.querySelector('body');
let randomizer = document.querySelector('.randomizer');

const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = `background: linear-gradient(to right, ${color1.value}, ${color2.value});`;
}
const setRandomGradient = () => {
    // create random color and convert to string as hexadecimal number
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    /* check if the length of the color is valid (must be 6 characters)
    if not, add zeroes on the front of the number*/
    if (randomColor.length < 6) {
        for (let i = 6; i > randomColor.length; i--){
            randomColor = '0' + randomColor;
        }
    }
    // add hashtag to number so it could be set as parameter and change value of color1
    randomColor = '#' + randomColor
    color1.value = randomColor;
    // same steps as above but for color2
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (randomColor.length < 6) {
        for (let i = 6; i > randomColor.length; i--){
            randomColor = '0' + randomColor;
        }
    }
    randomColor = '#' + randomColor;
    color2.value = randomColor;
    // call setGradient() with modified color values
    setGradient();
}
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randomizer.addEventListener('click', setRandomGradient);