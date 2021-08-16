import html from "innerself/index";

export default function Control(control, index) {
    return html`
        <li>
            <p>${control[0].toUpperCase()}: ${control} </p>
        </li>
    `;
}