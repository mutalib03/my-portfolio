import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const selectForm = document.querySelector("form")
const button = document.querySelector('button')
const allInput = document.querySelectorAll("input")
selectForm.addEventListener('submit',() =>{

    button.textContent= "MESSAGE SENT"

})

 