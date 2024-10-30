import './style.css'
import { getNameHTTP, setupCounter, postNameHTTP } from './functions.ts'

/*
Make Get, Post, Put, Delete requests
Using HTTP, WebSockets, GraphQL
Use SQL, MongoDB
*/
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Random Things</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <button id="getNameButton" type="button">HTTP (GET)</button>
    </div>
    <p id="displayName"></p>
    <div class="card">
      <input type="text" id="nameInput">
      <button id="postNameButton" type="button">HTTP (POST)</button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
getNameHTTP(document.querySelector<HTMLButtonElement>('#getNameButton')!, document.querySelector<HTMLElement>('#displayName')!)
postNameHTTP(document.querySelector<HTMLButtonElement>('#postNameButton')!, document.querySelector<HTMLInputElement>('#nameInput')!)

