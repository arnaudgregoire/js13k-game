import html from "innerself/index";
import { connect } from "../store";
import Recipe from "./recipe";
import Cocktail from "./cocktail";

function Game(state) {
    const { recipe, sentence, cocktail } = state;
    return html`
        <div style='display:flex; justify-content:space-between;flex-flow:column;'>
            <h3>${sentence}</h3>
            ${Cocktail(cocktail)}
            ${Recipe(recipe)}
        </div>
    `;
}

export default connect(Game);