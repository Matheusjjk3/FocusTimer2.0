import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"
import * as events from "./events.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function plusMin() {
  el.minutes.click()
  sounds.buttonPressAudio.play()
}

export function minusMin() {
  el.minutes.click()
  sounds.buttonPressAudio.play()
}

export function toggleSoundForest() {
  state.isForest = document.documentElement.classList.toggle("forest-on")

  if (state.isForest) {
    sounds.buttonAudioForest.play()
    return
  }
  sounds.buttonAudioForest.pause()
}

export function toggleSoundRain() {
  state.isRain = document.documentElement.classList.toggle("rain-on")

  if (state.isRain) {
    sounds.buttonAudioRain.play()
    return
  }
  sounds.buttonAudioRain.pause()
}

export function toggleSoundCoffee() {
  state.isCoffee = document.documentElement.classList.toggle("coffee-on")

  if (state.isCoffee) {
    sounds.buttonAudioCoffee.play()
    return
  }
  sounds.buttonAudioCoffee.pause()
}

export function toggleSoundFire() {
  state.isFire = document.documentElement.classList.toggle("fire-on")

  if (state.isFire) {
    sounds.buttonAudioFire.play()
    return
  }
  sounds.buttonAudioFire.pause()
}
