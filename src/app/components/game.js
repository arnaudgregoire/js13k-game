import html from "innerself/index";
import { connect } from "../store";
import Recipe from "./recipe";
import Component from "./component";

function Game(state) {
    const { recipe, sentence, composition } = state;
    return html`
        <div>
            <h3>${sentence}</h3>
            <ul>
                ${composition.map(Component)}
            </ul>
            ${Recipe(recipe)}
        </div>
    `;
}

export default connect(Game);