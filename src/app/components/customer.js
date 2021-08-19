import html from 'innerself/index';

export default function Customer(customer, index) {
    return html`
        <li>
            <p>Customer n°${index}: ${customer.name}</p>
            <img src="assets/customers/${customer.type}.png"/>
        </li>
    `;
}