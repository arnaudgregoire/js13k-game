import html from 'innerself/index';
import { connect } from '../store';

function Recipe(state) {
    const { recipe } = state;
    if (recipe.id) {
        return html`
        <div style='width:100%; text-align: center;'>
            <h1>${recipe.name}</h1>
            <div style='display:flex; justify-content:space-evenly; align-items:center;'>
                <p>${recipe.shape.id.toLowerCase()} </p>
                <p>${recipe.ingredients.reduce((acc, current) => {
        return acc.concat(`${current.ingredient.id.toLowerCase()} x${current.quantity}  `);
    },'')} </p>
                <p>${recipe.decorations.reduce((acc, current) => {

        return acc.concat(`${current.decoration.id.toLowerCase()} x${current.quantity}  `);
    },'')} </p>
            </div>
        </div>
    `;
    }
    else {
        return html``;
    }
}

export default connect(Recipe);