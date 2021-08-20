import html from 'innerself/index';
import Control from './control';
import { connect } from '../store';

function Controls(state) {
    const { phase } = state;
    
    return html`
    <div style="display: flex;flex-flow: column;justify-content: space-between;">
        <h2>Controls</h2>
        <div style="display:flex;">
            <ul style="display:flex; flex-flow:column; padding: 0px; justify-content:space-around; list-style-type:none;">
                ${Object.keys(phase).slice(0, Math.floor(Object.keys(phase).length/2)).map(Control)}
            </ul>
            <ul style="display:flex; flex-flow:column; padding: 0px; justify-content:space-around; list-style-type:none;">
                ${Object.keys(phase).slice(Math.floor(Object.keys(phase).length/2), Object.keys(phase).length).map(Control)}
            </ul>
        </div>
        Enter : Serve Cocktail
    </div>
    `;
}

export default connect(Controls);