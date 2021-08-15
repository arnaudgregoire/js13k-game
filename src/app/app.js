import html from "innerself/index";
import Customers from "./components/customers";
import Gold from "./components/gold";
import Timer from "./components/timer";
import Game from "./components/game";

export default function App() {
    return html`
        <div style='height:100vh; width:100vw; font-family:Verdana; color:white; background-color:black'>
            <div style='display:flex; justify-content:space-even;'>
                ${Timer()}
                ${Gold()}
            </div>
            <div style='display:flex; justify-content:space-between;'>
                ${Customers()}
                ${Game()}
                <div>
                    <h3>Controls</h3>
                    <p>A: Acanthe</p>
                    <p>B: Baethus</p>
                    <p>C: Copea</p>
                </div>
            </div>
        </div>
    `;
}
