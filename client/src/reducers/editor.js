import * as types from '../constants/ActionTypes';

const initialState = {
  editor: {
    layerSelectionExpanded: false,
    layerCreatorExpanded: false
  },
  layers: [],
}

export default function editor (state = initialState, action) {
  switch(action.type) {

    case types.SAMPLE_DATA_SUCCESS:
      const newState = { ...state, editor: action.state.editor, layers: action.state.layers};
      return newState;

    case types.TOGGLE_LAYER_SELECTOR_EXPANDED:
      let newLayerSelectionExpanded = !state.layerSelectionExpanded;
      return {...state, layerSelectionExpanded: newLayerSelectionExpanded};

    default:
      return state;
  }
}
