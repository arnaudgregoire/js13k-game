import html from "innerself/index";

export default function Customer(customer, index) {
    return html`
        <li>
            <p>name:${customer.name}</p>
            <p>type:${customer.type}</p>
            <p>index:${index}</p>
        </li>
    `;
}