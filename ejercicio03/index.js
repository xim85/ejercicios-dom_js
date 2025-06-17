//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const ulElement = document.createElement('ul')

countries.forEach((country) => {
  const liElement = document.createElement('li')
  liElement.innerText = country
  ulElement.appendChild(liElement)
})

const container = document.body
container.appendChild(ulElement)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementToRemove = document.querySelector('.fn-remove-me')
elementToRemove.remove()

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const ulElementCars = document.createElement('ul')

cars.forEach((car) => {
  const liElement = document.createElement('li')
  liElement.innerText = car
  ulElementCars.appendChild(liElement)
})

const targetDiv = document.querySelector('div[data-function="printHere"]')
targetDiv.appendChild(ulElementCars)

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesImg = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

countriesImg.forEach((item) => {
  const newDiv = document.createElement('div')
  const newH4 = document.createElement('h4')
  newH4.innerText = item.title

  const newImg = document.createElement('img')
  newImg.src = item.imgUrl

  newDiv.appendChild(newH4)
  newDiv.appendChild(newImg)
  container.appendChild(newDiv)
})

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const button = document.createElement('button')
button.innerText = 'Eliminar último elemento'

button.addEventListener('click', () => {
  const divs = document.querySelectorAll('div')
  const lastDiv = divs[divs.length - 1]
  lastDiv.remove()
})

container.appendChild(button)

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

countriesImg.forEach((item) => {
  const newDiv = document.createElement('div')

  const newH4 = document.createElement('h4')
  newH4.innerText = item.title

  const newImg = document.createElement('img')
  newImg.src = item.imgUrl

  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'Eliminar'

  deleteButton.addEventListener('click', () => {
    newDiv.remove()
  })

  newDiv.appendChild(newH4)
  newDiv.appendChild(newImg)
  newDiv.appendChild(deleteButton)
  container.appendChild(newDiv)
})
