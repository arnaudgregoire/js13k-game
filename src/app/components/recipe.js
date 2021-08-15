import html from "innerself/index";
import { connect } from "../store";

function Recipe(state) {
    const { recipe } = state;
    return html`
        <div>
            <p>title:${recipe.title}</p>
            <p>content:${recipe.content}</p>
        </div>
    `;
}

export default connect(Recipe);