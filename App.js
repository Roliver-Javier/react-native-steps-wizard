import React from 'react';
import Steps from './src/Steps';
import StepsState from './src/context/stepsState';
export default function App() {
  return (
    <StepsState>
      <Steps />
    </StepsState>
  );
}
