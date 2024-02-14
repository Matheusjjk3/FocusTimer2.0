import * as el from "./elements.js"
import * as actions from "./actions.js"
import state from "./state.js"
import { addFive, removeFive, updateDisplay } from "./timer.js"

export function registerControls() {
  el.controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key) // ACEITAR APENAS NÚMEROS NA ALTERAÇÃO DO SET

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute("contenteditable")
  })
}

export function minusFiveMin() {
  el.minutes.addEventListener("click", () => {
    removeFive()
  })
}

export function registerSounds() {
  el.sounds.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

el.addFiveButton.addEventListener("click", () => {
  addFive()
})

el.removeFiveButton.addEventListener("click", () => {
  removeFive()
})
