import React from 'react';
import './styles/App.scss';
import Text from './component/Text';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hola'
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    const newtext = e.currentTarget.value;
    this.setState({
      text: newtext
    });

  }

  render() {
    return (
        <div className="app">
         <Text handleKeyPress={this.handleKeyPress} text={this.state.text} />
        </div>
    );
  }
}

export default App;
