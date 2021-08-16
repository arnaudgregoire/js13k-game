import html from 'innerself/index';
import { connect } from '../store';
import Ingredient from './ingredient';
import Decoration from './decoration';

function Cocktail(state) {
    const { ingredients, decorations } = state;
    return html`
        <ul style='display:none; list-style-type:none'>
            ${ingredients.map(Ingredient)}
        </ul>
        <ul style='display:none; list-style-type:none'>
            ${decorations.map(Decoration)}
        </ul>
        <canvas id="cocktail" style="height:600px; border: 1px solid; image-rendering: crisp-edges;"></canvas>
    `;
}

export default connect(Cocktail);