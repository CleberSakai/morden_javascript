export default function calculate() {
    const resultInput = document.querySelector('#result')
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    const result = eval(input.value) // Atenção e cuidado com o uso do eval() !!!!!
    resultInput.value = result
    resultInput.classList.remove('error')
}