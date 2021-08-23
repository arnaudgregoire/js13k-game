import html from 'innerself/index';
import { connect } from '../store';
import Command from './command';

function Commands(state) {
    const { commands } = state;
    return html`
        <div>
            <h2>Commands</h2>
            <ul style='list-style-type:none;'>
                ${commands.map(Command)}
            </ul>
        </div>
    `;
}

export default connect(Commands);