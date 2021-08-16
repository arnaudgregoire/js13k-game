import { createStore } from 'innerself';
import withLogger from 'innerself/logger';
import reducer from './reducer';

const { attach, connect, dispatch } = createStore(withLogger(reducer));

export { attach, connect, dispatch };