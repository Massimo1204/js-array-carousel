const images = ['<img src="/img/01.jpg"  alt="img calm lake">' ,'<img src="/img/02.jpg"  alt="img Svizzera">', '<img src="/img/03.jpg"  alt="img London"></img>','<img src="/img/04.jpg"  alt="img city"></img>','<img src="/img/05.jpg"  alt="img beach">'];
const mainImageWrapper = document.getElementById('main-img-wrapper');
const buttonDown = document.getElementById('my-button-down');
const buttonUp = document.getElementById('my-button-up');
let counter = 1;

mainImageWrapper.innerHTML = images[0];

function changeImageDown(){
    mainImageWrapper.innerHTML = images[counter];
    if(counter >= 4 ){
        counter = 0;
    }
    counter++;

}

function changeImageUp(){
    counter--;
    mainImageWrapper.innerHTML = images[counter];
    if(counter <= 0 ){
        counter = 5;
    }
}

buttonDown.addEventListener('click', changeImageDown);
buttonUp.addEventListener('click', changeImageUp);
