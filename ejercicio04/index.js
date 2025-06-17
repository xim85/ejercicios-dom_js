//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const button = document.getElementById('btnToClick')

button.addEventListener('click', (event) => {
  console.log('Evento de clic:', event)
})

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusInput = document.querySelector('.focus')

focusInput.addEventListener('focus', () => {
  console.log('Valor del input al enfocarse:', focusInput.value)
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const valueInput = document.querySelector('.value')

valueInput.addEventListener('input', () => {
  console.log('Valor actual del input:', valueInput.value)
})
