import html from "innerself/index";
import { connect } from "../store";

function Gold(state) {
    const { gold } = state;
    return html`
        <p>Gold :${gold}</p>
    `;
}

export default connect(Gold);