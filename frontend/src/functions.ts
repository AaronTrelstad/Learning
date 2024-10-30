import axios from 'axios'

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export async function getNameHTTP(buttonElement: HTMLButtonElement, displayElement: HTMLElement) {
  const getName = async () => {
    const data = await axios.get("http://localhost:3000/api/name")
    console.log(data)
    displayElement.innerHTML =  `My name is ${data.data.name.name}`
  }

  buttonElement.addEventListener('click', () => getName())
}

export async function postNameHTTP(buttonElement: HTMLButtonElement, nameInput: HTMLInputElement) {
  const postName = async () => {
    const name = nameInput.value
    await axios.post("http://localhost:3000/api/name", {name})
  }

  buttonElement.addEventListener('click', () => postName())
}
