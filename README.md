

# react-native-steps-wizard
A react-native implementation of steps bar wizard indicator

### Usage
 ```javascript

export default const App = () => {
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
 ```

<img src="https://raw.githubusercontent.com/Roliver-Javier/react-native-steps-wizard/master/flayer.gif" width="250" height="400">
