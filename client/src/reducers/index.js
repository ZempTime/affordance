import { combineReducers } from 'redux';

import editor from './editor';

const rootReducer = combineReducers({
  editorState: editor
});

export default rootReducer;
