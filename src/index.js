import { App } from './app/app';
import { attach, dispatch } from './app/store';
import CanvasManager from './app/canvas-manager';

window.onload = init;

function init () {
    window.onkeypress = (evt) => {
        dispatch('KEY_PRESSED', evt.key);
    };
    var root = document.querySelector('#root');
    let canvasManager = new CanvasManager();
    root.addEventListener('render', function(event) {
        // event.detail is the state that was rendered.
        const { ingredients, decorations, shape } = event.detail;
        if (ingredients) {
            canvasManager.renderCanvas(ingredients, decorations, shape);
        }
    });
    attach(App, root);
    game = new Game()
    game.start()
}


//setInterval(()=>{dispatch('CHANGE_TIMER', (Math.random()*100).toFixed(2))}, 1000);
//setInterval(()=>{dispatch('CHANGE_GOLD', parseInt(Math.random()*100))}, 1500);
//setInterval(()=>{dispatch('ADD_CUSTOMER', {type:`TYPE_${parseInt(Math.random()*10)}`, name:Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)})}, 5000);
//setInterval(()=>{dispatch('REMOVE_CUSTOMER', 0)}, 12500);