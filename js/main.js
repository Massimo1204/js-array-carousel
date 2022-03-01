const images = ['<img src="/img/01.jpg"  alt="img calm lake">' ,'<img src="/img/02.jpg"  alt="img Svizzera">', '<img src="/img/03.jpg"  alt="img London"></img>','<img src="/img/04.jpg"  alt="img city"></img>','<img src="/img/05.jpg"  alt="img beach">'];
const mainImageWrapper = document.getElementById('main-img-wrapper');
const buttonDown = document.getElementById('my-button-down');
let counter = 0;

mainImageWrapper.innerHTML = images[0];

function changeImageDown(){
    counter++;
    mainImageWrapper.innerHTML = images[counter];
    if(counter >= 4 ){
        counter = -1;
    }
}

buttonDown.addEventListener('click', changeImageDown);