import React from 'react';
import './styles/App.scss';



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
          <input type="text" onKeyUp={this.handleKeyPress}/>
          <p>{this.state.text}</p>
        </div>
    );
  }
}

export default App;
