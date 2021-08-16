import html from "innerself/index";

export default function Component(component, index) {
    return html`
        <li>
            <img src="assets/${component}.png" style="height:300px; image-rendering: crisp-edges;">
        </li>
    `;
}