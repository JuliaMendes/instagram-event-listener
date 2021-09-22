//1

let verMais = document.querySelector('#more')

let card = document.querySelector('.card');

let container = document.querySelector('.container.content')

let clone = card.cloneNode(true)

verMais.addEventListener('click', function acrescentarFeed() {
    container.insertBefore(clone, verMais)
})

//2 //5

function toggleHeart(heart) {
    let like = document.querySelector('.likes b')

    if (heart.src.includes('heart.svg')) {
        heart.src = "img/red-heart.png";

        // soma mais um no like
        let likeTexto = like.innerText;
        let numero = parseInt(likeTexto.split(' ')[0])
        like.innerText = numero + 1 + ' like'
    } else {
        heart.src = "img/icons/heart.svg";

        let likeTexto = like.innerText;
        let numero = parseInt(likeTexto.split(' ')[0])
        like.innerText = numero - 1 + ' like'
    }
}

//3

let busca = document.querySelector('.busca form')

busca.addEventListener('mouseover', function addSombra() {
    busca.style.boxShadow = '0px 1px 3px black'
})

busca.addEventListener('mouseout', function removeSombra() {
    busca.style.boxShadow = ''
})

//4 
verMais.addEventListener('mouseover', function cursorPointer() {
    verMais.style.cursor = 'pointer'
    verMais.style.boxShadow = '0px 1px 3px black'
})

verMais.addEventListener('mouseout', function removeHover() {
    verMais.style.boxShadow = ''
})



