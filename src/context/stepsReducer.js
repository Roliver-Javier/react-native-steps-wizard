import { UPDATE_CURRENT_STEP, SET_STEPS } from './types';
export default (state, action) => {
  switch (action.type) {
    case SET_STEPS: {
      return {
        ...state,
        steps: action.payload,
      };
    }

    case UPDATE_CURRENT_STEP: {
      return {
        ...state,
        currentStepIndex: action.payload,
      };
    }

    default:
      return state;
  }
};
