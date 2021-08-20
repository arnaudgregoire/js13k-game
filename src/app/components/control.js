import html from 'innerself/index';
import { INGREDIENTS, DECORATIONS, SHAPES } from '../enum';

export default function Control(control, index) {
    if(INGREDIENTS[control]){
        return html`
        <li style="color:black; background:${INGREDIENTS[control].color}; display:flex; justify-content:space-between; align-items:center;">
            <h1>${INGREDIENTS[control].key.toUpperCase()}</h1>
            <p style="flex-grow:4; text-align:center;">${window.idToName(INGREDIENTS[control].id.toLowerCase())}</p>
        </li>`;
    }
    else if(DECORATIONS[control]){
        return html`
            <li style="color:black; background:white; display:flex; justify-content:space-between; align-items:center;">
            <h1>${DECORATIONS[control].key.toUpperCase()}</h1>
            <p style="flex-grow:4; text-align:center;">${window.idToName(DECORATIONS[control].id.toLowerCase())}</p>
            <img style="height:30px;" src="assets/decorations/${DECORATIONS[control].id.toLowerCase()}.png"/>
        </li>`;
    }
    else{
        return html`
            <li style="color:black; background:white; display:flex; justify-content:space-between; align-items:center;">
            <h1>${SHAPES[control].key.toUpperCase()}</h1>
            <p style="flex-grow:4; text-align:center;">${window.idToName(SHAPES[control].id.toLowerCase())}</p>
        </li>`;
    }

}