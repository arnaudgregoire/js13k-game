import html from "innerself/index";

export default function Component(component, index) {
    return html`
        <li>
            <p>name:${component}</p>
            <p>index:${index}</p>
        </li>
    `;
}