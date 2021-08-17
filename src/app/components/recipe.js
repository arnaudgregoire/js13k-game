import html from 'innerself/index';
import { connect } from '../store';

function Recipe(state) {
    const { recipe } = state;
    return html`
        <div>
            <h1>${recipe.name}</h1>
            <p>${recipe.shape.name}</p>
            <p>${recipe.ingredients.reduce((acc, current)=>{
                return acc.concat(`${current.ingredient.name} x${current.quantity}  `);
            },'')}</p>
            <p>${recipe.decorations.reduce((acc, current)=>{

                return acc.concat(`${current.decoration.name} x${current.quantity}  `);
            },'')}</p>
        </div>
    `;
}

export default connect(Recipe);