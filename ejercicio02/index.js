//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement('div')
const container = document.body
container.appendChild(newDiv)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newParagraph = document.createElement('p')
newDiv.appendChild(newParagraph)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const newDivWithP = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const newParagraph = document.createElement('p')
  newDivWithP.appendChild(newParagraph)
}
container.appendChild(newDivWithP)

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p = document.createElement('p')
p.innerText = 'Soy dinámico'
container.appendChild(p)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2Element = document.querySelector('.fn-insert-here')
h2Element.innerText = 'Wubba Lubba dub dub'

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ulElement = document.createElement('ul')
apps.forEach((app) => {
  const liElement = document.createElement('li')
  liElement.innerText = app
  ulElement.appendChild(liElement)
})

container.appendChild(ulElement)

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementsToRemove = document.querySelectorAll('.fn-remove-me')

elementsToRemove.forEach((element) => {
  element.remove()
})

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const pMiddle = document.createElement('p')
newParagraph.innerText = 'Voy en medio!'

const firstDiv = document.querySelector('div')

firstDiv.parentNode.insertBefore(pMiddle, firstDiv.nextSibling)

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divs = document.querySelectorAll('.fn-insert-here')

divs.forEach((div) => {
  const newParagraph = document.createElement('p')
  newParagraph.innerText = 'Voy dentro!'
  div.appendChild(newParagraph)
})
