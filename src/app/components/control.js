import html from 'innerself/index';
import { INGREDIENTS, DECORATIONS, SHAPES } from '../enum';

export default function Control(control, index) {
    if(INGREDIENTS[control]){
        return html`
        <li>
            <p style="color:white; font-size:20px;">${INGREDIENTS[control].key}: ${INGREDIENTS[control].name} </p>
        </li>`;
    }
    else if(DECORATIONS[control]){
        return html`
        <li style="display:flex; image-rendering:crisp-edges;">
            <img style="height:40px;" src="assets/decorations/${DECORATIONS[control].name}.png"/>
            <p style="color:white; font-size:20px;">${DECORATIONS[control].key.toUpperCase()}: ${DECORATIONS[control].name} </p>
        </li>`;
    }
    else{
        return html`
        <li style="display:flex; image-rendering:crisp-edges;">
            <img style="height:40px;" src="assets/shapes/${SHAPES[control].name}.png"/>
            <p style="color:white; font-size:20px;">${SHAPES[control].key.toUpperCase()}: ${SHAPES[control].name} </p>
        </li>`;
    }

}