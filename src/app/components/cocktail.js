import html from "innerself/index";
import { connect } from "../store";
import Ingredient from "./ingredient";

function Cocktail(state) {
    const { ingredients } = state;
    return html`
        <ul style='display:flex; list-style-type:none'>
            ${ingredients.map(Ingredient)}
        </ul>
        <canvas id="cocktail" style="height:600px; border: 1px solid; image-rendering: crisp-edges;"></canvas>
    `;
}

export default connect(Cocktail);