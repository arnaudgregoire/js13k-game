import html from "innerself/index";
import Control from "./control";
import {CONTROLS} from "../enum";

function Controls() {
    return html`
    <div>
        <h2>Controls</h2>
        <ul>
            ${Object.values(CONTROLS).map(Control)}
        </ul>
    </div>
    `;
}

export default Controls;