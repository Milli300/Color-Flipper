const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B' ,'C', 'D', 'E' ,'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const main = document.getElementById('main')

btn.addEventListener('click' , randomColor, false);

// create callback function 'randomColor'
function randomColor(){
    let hexColor = '#'
    for(let i=0 ; i<6 ; i++){
        //Add # and the 6 randomly generated number
        hexColor += hex[getRandomNumber()];
        console.log(hexColor);
    }
    color.innerHTML = hexColor;
    main.style.backgroundColor =hexColor;

}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
