import html from 'innerself/index';

export default function Decoration(decoration, index) {
    return html`
        <li>
            <p>${decoration.id.toLowerCase()}</p>
        </li>
    `;
}