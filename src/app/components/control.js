import html from 'innerself/index';
import { INGREDIENTS, DECORATIONS, SHAPES } from '../enum';

export default function Control(control, index) {
    if(INGREDIENTS[control]){
        return html`
        <li>
            <p style="color:white; font-size:20px;">${INGREDIENTS[control].key}: ${INGREDIENTS[control].id.toLowerCase()} </p>
        </li>`;
    }
    else if(DECORATIONS[control]){
        return html`
        <li style="display:flex; image-rendering:crisp-edges;">
            <img style="height:40px;" src="assets/decorations/${DECORATIONS[control].id.toLowerCase()}.png"/>
            <p style="color:white; font-size:20px;">${DECORATIONS[control].key.toUpperCase()}: ${DECORATIONS[control].id.toLowerCase()} </p>
        </li>`;
    }
    else{
        return html`
        <li style="display:flex; image-rendering:crisp-edges;">
            <img style="height:40px;" src="assets/shapes/${SHAPES[control].id.toLowerCase()}.png"/>
            <p style="color:white; font-size:20px;">${SHAPES[control].key.toUpperCase()}: ${SHAPES[control].id.toLowerCase()} </p>
        </li>`;
    }

}