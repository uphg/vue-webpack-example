import './style.css'
import Code from './code.png'

function component() {
  const element = document.createElement('div')
  element.classList.add('hello')
  element.innerHTML = 'Hello, webpack!'
  return element
}

function addCode() {
  const div = document.createElement('div')
  div.classList.add('code-image')

  const myCode = new Image()
  myCode.src = Code
  div.appendChild(myCode)

  return div
}

document.body.appendChild(component())
document.body.appendChild(addCode())
