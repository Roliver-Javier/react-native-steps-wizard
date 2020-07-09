import React, { useReducer } from 'react';
import StepsReducer from './stepsReducer';
import StepsContext from './stepsContext';
import { UPDATE_CURRENT_STEP, SET_STEPS } from './types';

const StepsState = ({ children }) => {
  const initialState = {
    steps: [],
    currentStepIndex: 0,
  };
  const [state, dispatch] = useReducer(StepsReducer, initialState);
  const setSteps = (steps) => {
    dispatch({
      type: SET_STEPS,
      payload: steps,
    });
  };
  const setCurrentStep = (index) => {
    dispatch({
      type: UPDATE_CURRENT_STEP,
      payload: index,
    });
  };
  return (
    <StepsContext.Provider
      value={{
        steps: state.steps,
        currentStepIndex: state.currentStepIndex,
        setSteps,
        setCurrentStep,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};

export default StepsState;
