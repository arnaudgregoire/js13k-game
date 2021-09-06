import html from 'innerself/index';
import Control from './control';
import { connect } from '../store';

function Controls(state) {
    const { controls } = state;

    return html`
    <div style="display: flex;flex-flow: column;justify-content: space-between;">
        <h2>Controls</h2>
        <div style="display:flex;">
            <ul style="display:flex; flex-flow:column; padding: 0px; justify-content:space-around; list-style-type:none;">
                ${controls.slice(0, Math.floor(controls.length/2)).map(Control)}
            </ul>
            <ul style="display:flex; flex-flow:column; padding: 0px; justify-content:space-around; list-style-type:none;">
                ${controls.slice(Math.floor(controls.length/2), controls.length).map(Control)}
            </ul>
        </div>
        Enter : Serve Cocktail
    </div>
    `;
}

export default connect(Controls);