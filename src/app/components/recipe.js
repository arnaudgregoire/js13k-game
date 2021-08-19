import html from 'innerself/index';
import { connect } from '../store';

function Recipe(state) {
    const { recipe } = state;
    return html`
        <div>
            <h1>${recipe.name}</h1>
            <p>${recipe.shape.id.toLowerCase()}</p>
            <p>${recipe.ingredients.reduce((acc, current)=>{
                return acc.concat(`${current.ingredient.id.toLowerCase()} x${current.quantity}  `);
            },'')}</p>
            <p>${recipe.decorations.reduce((acc, current)=>{

                return acc.concat(`${current.decoration.id.toLowerCase()} x${current.quantity}  `);
            },'')}</p>
        </div>
    `;
}

export default connect(Recipe);