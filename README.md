

# react-native-steps-wizard
A react-native implementation of steps bar wizard indicator

### Installation
 ```npm
 ```
### Usage
 ```javascript
class Example extends Component {
  routes = [
    {
      'Shipping': () => <ExampleComponent message="Test #1" />,
      'nextAction': () => this.doSomething('hello world!'),
      'previousAction': () => this.doSomething('back to previous view #1')
    },
    {
      'Payment': () => <ExampleComponent message="Test #2" />,
      'nextAction': () => this.doSomething('hello world #2!'),
      'previousAction': () => this.doSomething('back to previous view #2')
    },
    {
      'Confirm': () => <ExampleComponent message="Test #3" />,
      'nextAction': () => this.doSomething('hello world #3!'),
      'previousAction': () => this.doSomething('back to previous view #3')
    }
  ];
  
  customStyle = {/*Here your styles properties */}

  doSomething(text = 'do something...') {
    console.log(text);
  }

  render() {
    return (
      <View>
        <Steps stepsStyle={customStyle}
               steps={this.routes} />
      </View>
    );
  }
}
 ```
)


<img src="https://raw.githubusercontent.com/Roliver-Javier/react-native-steps-wizard/master/flayer.gif" width="250" height="400">
