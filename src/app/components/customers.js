import html from "innerself/index";
import { connect } from "../store";
import Customer from "./customer";

function Customers(state) {
    const { customers } = state;
    return html`
        <div>
            <h2>Customers</h2>
            <ul>
                ${customers.map(Customer)}
            </ul>
        </div>
    `;
}

export default connect(Customers);