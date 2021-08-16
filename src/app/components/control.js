import html from 'innerself/index';
import { INGREDIENTS, DECORATIONS } from '../enum';

export default function Control(control, index) {
    if(INGREDIENTS[control]){
        return html`
        <li>
            <p>${INGREDIENTS[control].key}: ${INGREDIENTS[control].name} </p>
        </li>
    `;
    }
    else{
        return html`
        <li>
            <p>${DECORATIONS[control].key}: ${DECORATIONS[control].name} </p>
        </li>
    `;
    }

}