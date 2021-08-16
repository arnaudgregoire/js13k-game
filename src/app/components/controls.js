import html from 'innerself/index';
import Control from './control';
import {INGREDIENTS, DECORATIONS} from '../enum';

function Controls() {
    return html`
    <div>
        <h2>Controls</h2>
        <ul>
            ${Object.keys(INGREDIENTS).map(Control)}
        </ul>
        <ul>
            ${Object.keys(DECORATIONS).map(Control)}
        </ul>
    </div>
    `;
}

export default Controls;