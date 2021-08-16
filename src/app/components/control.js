import html from "innerself/index";
import { INGREDIENTS } from "../enum";

export default function Control(control, index) {
    return html`
        <li>
            <p>${INGREDIENTS[control].key}: ${INGREDIENTS[control].name} </p>
        </li>
    `;
}