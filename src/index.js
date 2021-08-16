import App from './app/app';
import { attach, dispatch } from './app/store';
import { renderCanvas } from './app/canvas-manager';

window.onload = () => {
    var root = document.querySelector('#root');
    root.addEventListener('render', function(event) {
        // event.detail is the state that was rendered.
        const { ingredients, decorations } = event.detail;
        if (ingredients) {
            renderCanvas(ingredients, decorations);
        }
    });
    attach(App, root);
}

window.onkeypress = (evt) => {
    dispatch('KEY_PRESSED', evt.keyCode);
};

//setInterval(()=>{dispatch('CHANGE_TIMER', (Math.random()*100).toFixed(2))}, 1000);
//setInterval(()=>{dispatch('CHANGE_GOLD', parseInt(Math.random()*100))}, 1500);
//setInterval(()=>{dispatch('ADD_CUSTOMER', {type:`TYPE_${parseInt(Math.random()*10)}`, name:Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)})}, 5000);
//setInterval(()=>{dispatch('REMOVE_CUSTOMER', 0)}, 12500);