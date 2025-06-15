//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const button = document.querySelector('.showme')
console.log(button)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const header = document.querySelector('#pillado')
console.log(header)

//1.3 Usa querySelector para mostrar por consola todos los p

const paragraphs = document.querySelectorAll('p')
paragraphs.forEach((paragraph) => {
  console.log(paragraph)
})

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemons = document.querySelectorAll('.pokemon')
pokemons.forEach((pokemon) => {
  console.log(pokemon)
})

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const testElements = document.querySelectorAll('[data-function="testMe"]')
testElements.forEach((element) => {
  console.log(element)
})

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

console.log(testElements[2])
