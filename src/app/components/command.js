import html from 'innerself/index';

export default function Command(command, index) {
    if(command){
        return html`
        <li style='color:${command.selected ? 'yellow': 'white'}'>
            <p>${command.customer.name}</p>
            <p>${command.recipe.name}</p>
            <img src="assets/customers/${command.customer.type}.png"/>
            <p>${command.timer}</p>
        </li>
    `;
    }
    else{
        return html``;
    }

}