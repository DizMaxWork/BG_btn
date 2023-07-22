let h1 = document.querySelector('.title')
let btn = document.querySelector('.btn')
let text = document.querySelector('.txt')
let body = document.querySelector('body')

function createColor(){
    let hexArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','F']
    let hexCount = 6;

    let hexItem = '';

    for (let i = 0; i < hexCount; i++){
        let hexRandom = Math.floor(Math.random() * hexArr.length);
        
        hexItem += hexArr[hexRandom]

    }

    text.innerHTML = 'Цвет изменен на : #' + hexItem;
    body.style.background = '#' + hexItem;
}
btn.addEventListener('click', createColor)