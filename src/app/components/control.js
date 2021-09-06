import html from 'innerself/index';
import { INGREDIENTS, DECORATIONS, SHAPES } from '../enum';

function idToName(id) {
    return id.toLowerCase().replace('_',' ');
}

export default function Control(control, index) {
    if (INGREDIENTS[control]) {
        return html`
        <li style="color:black; background:${INGREDIENTS[control].color}; display:flex; justify-content:space-between; align-items:center;">
            <h1>${INGREDIENTS[control].key.toUpperCase()}</h1>
            <p style="flex-grow:4; text-align:center;">${idToName(INGREDIENTS[control].id)}</p>
        </li>`;
    }
    else if (DECORATIONS[control]) {
        return html`
            <li style="color:black; background:white; display:flex; justify-content:space-between; align-items:center;">
            <h1>${DECORATIONS[control].key.toUpperCase()}</h1>
            <p style="flex-grow:4; text-align:center;">${idToName(DECORATIONS[control].id)}</p>
        </li>`;
    }
    else {
        return html`
            <li style="color:black; background:white; display:flex; justify-content:space-between; align-items:center;">
            <h1>${SHAPES[control].key.toUpperCase()}</h1>
            <p style="flex-grow:4; text-align:center;">${idToName(SHAPES[control].id)}</p>
        </li>`;
    }

}