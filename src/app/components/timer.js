import html from "innerself/index";
import { connect } from "../store";

function Timer(state) {
    const { timer } = state;
    return html`
        <p>Time :${timer}</p>
    `;
}

export default connect(Timer);