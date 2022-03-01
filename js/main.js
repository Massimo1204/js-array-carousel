const images = ['<img src="/img/01.jpg"  alt="img calm lake">' ,'<img src="/img/02.jpg"  alt="img Svizzera">', '<img src="/img/03.jpg"  alt="img London"></img>','<img src="/img/04.jpg"  alt="img city"></img>','<img src="/img/05.jpg"  alt="img beach">'];
const mainImageWrapper = document.getElementById('main-img-wrapper');
const sideImageWrapper = document.getElementById('side-img-wrapper');
let sideImageSelector;
const buttonDown = document.getElementById('my-button-down');
const buttonUp = document.getElementById('my-button-up');
let counter = 0;
let sideImageCounter = 1 ; 
mainImageWrapper.innerHTML = images[0];

for(let i=0; i<5 ; i++){
    sideImageWrapper.innerHTML += images[i];
}

let sideImageSelectorPrevious = sideImageWrapper.querySelector('img:nth-child('+sideImageCounter+')');
sideImageSelectorPrevious.classList.add('active');

function changeImageDown(){
    counter++;
    sideImageCounter++;
    if(counter > 4 ){
        counter = 0;
    } 
    if(sideImageCounter > 5){
        sideImageCounter=1;
    }
    sideImageSelectorPrevious.classList.remove('active');
    mainImageWrapper.innerHTML = images[counter];
    sideImageSelector = sideImageWrapper.querySelector('img:nth-child('+sideImageCounter+')');
    sideImageSelectorPrevious = sideImageSelector;
    sideImageSelector.classList.add('active');
}

function changeImageUp(){
    counter--;
    sideImageCounter--;
    if(counter < 0 ){
        counter = 4;
    }
    if (sideImageCounter < 1){
        sideImageCounter= 5 ;
    }
    sideImageSelectorPrevious.classList.remove('active');
    mainImageWrapper.innerHTML = images[counter];
    sideImageSelector = sideImageWrapper.querySelector('img:nth-child('+sideImageCounter+')');
    sideImageSelectorPrevious = sideImageSelector;
    sideImageSelector.classList.add('active');

}

buttonDown.addEventListener('click', changeImageDown);
buttonUp.addEventListener('click', changeImageUp);
