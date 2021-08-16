import { attach } from "./app/store";
import App from "./app/app";
import {renderCanvas} from "./app/canvas-manager";

attach(App, document.querySelector("#root"));

//setInterval(()=>{dispatch('CHANGE_TIMER', (Math.random()*100).toFixed(2))}, 1000);
//setInterval(()=>{dispatch('CHANGE_GOLD', parseInt(Math.random()*100))}, 1500);
//setInterval(()=>{dispatch('ADD_CUSTOMER', {type:`TYPE_${parseInt(Math.random()*10)}`, name:Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)})}, 5000);
//setInterval(()=>{dispatch('REMOVE_CUSTOMER', 0)}, 12500);

window.addEventListener("keydown", event => {
    dispatch('KEY_PRESSED', event.keyCode);
});

document.querySelector("#root").addEventListener("render", function(event) {
    // event.detail is the state that was rendered.
    const { ingredients, decorations } = event.detail;
    if (ingredients) {
        renderCanvas(ingredients, decorations);
    }
});