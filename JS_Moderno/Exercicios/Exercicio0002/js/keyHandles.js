import calculate from "./calculate.js"

const input = document.querySelector('#input')

export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value
    input.value += value
}

export function handleClearButton(){
    input.value = ''
    input.focus() // Direciona o foco automaticamente para dentro do input
}

export function handleTyping(ev) { // (ev) é relacionado ao evento em questão
    ev.preventDefault()
    
    const allowedKeys =  ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] // Caracteres permitidos
   
    if (allowedKeys.includes(ev.key)) { // saber se a tecla presionada pelo usuario contem no meu array
        input.value += ev.key
        return
    } 
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
    }
}