function createItem(tag, clas) {
    const element = document.createElement(tag)
    element.className = clas
    return element
} 

function board() {
    const tabuleiro = createItem('div', 'tabuleiro')
    document.body.appendChild(tabuleiro)

    for( let i = 1 ; i < 10 ; ++i ) {
        const a = createItem('div', `board${i}`)
        a.innerHTML = '-'
        document.querySelector('.tabuleiro').appendChild(a)
    }
}

let letra = 'O'


function alternate() {
    if(letra === 'X') {
        letra = 'O'
    } else {letra = 'X'}
    return letra
}

 let pause = true

function titulo() {
    const elemento = createItem('div', 'titulo')
    const nomeJogo = createItem('h1', 'nomeJogo')

    nomeJogo.innerHTML = 'Hash Game'

    document.body.appendChild(elemento)
    elemento.appendChild(nomeJogo)
}

function placar() {
    const elemento = createItem('div', 'placar')
    this.jogador = createItem('div', 'jogador')
    this.simbolo = createItem('div', 'simbolo')

    document.body.appendChild(elemento)
    elemento.appendChild(this.jogador)
    elemento.appendChild(this.simbolo)

    this.jogador.innerHTML = 'Player 1'
    this.simbolo.innerHTML = 'X'
}

function repeatPlacar(simbol) {
    if( simbol === 'O') {
        document.querySelector('.jogador').innerHTML = 'Player 1'
        document.querySelector('.simbolo').innerHTML = 'X'
    } else {
        document.querySelector('.jogador').innerHTML = 'Player 2'
        document.querySelector('.simbolo').innerHTML = 'O'
    }
}

function footer() {
    const elemento = createItem('div', 'footer')
    const menssagem = createItem('div', 'msg')
    const botaoDiv = createItem('div', 'botoes')
    const botao = createItem('button', 'restart')

    document.body.appendChild(elemento)
    elemento.appendChild(menssagem)
    elemento.appendChild(botaoDiv)
    botaoDiv.appendChild(botao)

    document.querySelector('.restart').innerHTML = 'Restart'
    document.querySelector('.msg').innerHTML = '...'
    botao.onclick = a => location.reload()


}

function winner() {
    const b1 = document.querySelector('.board1').innerHTML
    const b2 = document.querySelector('.board2').innerHTML
    const b3 = document.querySelector('.board3').innerHTML
    const b4 = document.querySelector('.board4').innerHTML
    const b5 = document.querySelector('.board5').innerHTML
    const b6 = document.querySelector('.board6').innerHTML
    const b7 = document.querySelector('.board7').innerHTML
    const b8 = document.querySelector('.board8').innerHTML
    const b9 = document.querySelector('.board9').innerHTML
    const j = document.querySelector('.jogador').innerHTML

    if (b1 === b2 && b1 === b3 && b1 != '-' ||
        b4 === b5 && b4 === b6 && b4 != '-' ||
        b7 === b8 && b7 === b9 && b7 != '-' ||
        b1 === b4 && b1 === b7 && b1 != '-' ||
        b2 === b5 && b2 === b8 && b2 != '-' ||
        b3 === b6 && b3 === b9 && b3 != '-' ||
        b1 === b5 && b1 === b9 && b1 != '-' ||
        b3 === b5 && b3 === b7 && b3 != '-') {
            if(j === 'Player 1') {
                document.querySelector('.msg').innerHTML = 'Player 2 won!'
            } else {
                document.querySelector('.msg').innerHTML = 'Player 1 won!'
        }
    } 
}

function loop() {
    for (let i = 1; i < 10; ++i) {
        filler(`.board${i}`)
    }
} 

function filler(classe) {
    const elemento = document.querySelector(classe)
    elemento.onclick = a => {
        if (elemento.innerHTML === 'X' || elemento.innerHTML === 'O') {
            alert('Spot already filled!')
        } else {
            let msg = document.querySelector('.msg').innerHTML
            if (msg === '...') { 
                elemento.innerHTML = alternate()
                repeatPlacar(letra)
                winner()   
            } else {
                alert ('Restart!')}
        } 
    }
    return elemento
}  

function run() {
    new titulo()
    new placar()
    new board()
    new footer()
    new loop()
}

new run()
