import { UPDATE_TITLE } from '../actions/types';

const initialState = {title: 'default title'};

export default (state = initialState, action) => {
  if (action.type === UPDATE_TITLE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return state;
  }
};
