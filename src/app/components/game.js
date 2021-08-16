import html from "innerself/index";
import { connect } from "../store";
import Recipe from "./recipe";
import Component from "./component";

function Game(state) {
    const { recipe, sentence, composition } = state;
    return html`
        <div style='display:flex; justify-content:space-between;flex-flow:column;'>
            <h3>${sentence}</h3>
            <ul style="list-style-type:none; display:flex">
                ${composition.map(Component)}
            </ul>
            ${Recipe(recipe)}
        </div>
    `;
}

export default connect(Game);