import html from 'innerself/index';
import { connect } from '../store';
import Ingredient from './ingredient';
import Decoration from './decoration';

function Cocktail(state) {
    const { ingredients, decorations, shape } = state;
    return html`
        <ul style='display:none; list-style-type:none'>
            ${ingredients.map(Ingredient)}
        </ul>
        <ul style='display:none; list-style-type:none'>
            ${decorations.map(Decoration)}
        </ul>
        <p style='display:none'>
            ${shape.id ? shape.id.toLowerCase(): ''}
        </p>
        <canvas id="cocktail" style="height:600px; image-rendering: crisp-edges;"></canvas>
    `;
}

export default connect(Cocktail);