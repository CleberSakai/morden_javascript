import calculate from "./calculate.js"
import copy from "./copy.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandles.js"
import theme from "./theme.js"


// Iterando sobre todos os botões, e depois adicionando o evento de click neles, acrescetando seus valores para o input
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', handleButtonPress)
})

// Impedir que o usuario digite coisas aleatorias
document.getElementById('input').addEventListener('keydown', handleTyping)

// Funcionalidade para limpar o input
document.getElementById('clear').addEventListener('click', handleClearButton)

document.getElementById('equal').addEventListener('click', calculate)



// Mudar o tema da pagina, de claro para escuro e vice-versa
document.getElementById('themeSwitcher').addEventListener('click', theme)

document.getElementById('copyToClipboard').addEventListener('click', copy)
