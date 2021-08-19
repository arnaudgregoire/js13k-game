import html from 'innerself/index';
import Control from './control';
import { connect } from '../store';

function Controls(state) {
    const { phase } = state;
    
    return html`
    <div>
        <h2>Controls</h2>
        <ul>
            ${Object.keys(phase).map(Control)}
        </ul>
        Enter : Serve Cocktail
    </div>
    `;
}

export default connect(Controls);