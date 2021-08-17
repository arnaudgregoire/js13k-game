import html from 'innerself/index';
import { INGREDIENTS, DECORATIONS, SHAPES } from '../enum';

export default function Control(control, index) {
    if(INGREDIENTS[control]){
        return html`
        <li>
            <p>${INGREDIENTS[control].key}: ${INGREDIENTS[control].name} </p>
        </li>`;
    }
    else if(DECORATIONS[control]){
        return html`
        <li style="display:flex;">
            <img style="height:30px;" src="assets/decorations/${DECORATIONS[control].name}.png"/>
            <p>${DECORATIONS[control].key.toUpperCase()}: ${DECORATIONS[control].name} </p>
        </li>`;
    }
    else{
        return html`
        <li style="display:flex;">
            <img style="height:30px;" src="assets/shapes/${SHAPES[control].name}.png"/>
            <p>${SHAPES[control].key.toUpperCase()}: ${SHAPES[control].name} </p>
        </li>`;
    }

}