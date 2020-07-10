import React from 'react';
import Steps from './src/Steps';
import StepsState from './src/context/stepsState';
import Shipping from './src/Shipping';
import Payments from './src/Payments';
import Confirmation from './src/Confirmation';

export default function App() {
  const routes = [
    {
      title: 'Shipping',
      component: () => <Shipping />,
    },
    {
      title: 'Payments',
      component: () => <Payments />,
    },
    {
      title: 'Confirmation',
      component: () => <Confirmation />,
    },
  ];
  return (
    <StepsState>
      <Steps routes={routes} />
    </StepsState>
  );
}
