import React, { Component } from 'react';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';
import './App.css';

class App extends Component {
  state = {
    circle1: "",
    circle2: "",
    circle3: "",
    circle4: "",
  };

  componentDidMount() {
    this.setState({
      circle1: false,
      circle2: false,
      circle3: false,
      circle4: false,
    });
  }

  handleClickSelect1 = (event) => {
    event.preventDefault();
    this.setState({
      circle1: true,
      circle2: false,
      circle3: false,
      circle4: false,
    });
  };

  handleClickSelect2 = (event) => {
    event.preventDefault();
    this.setState({
      circle1: false,
      circle2: true,
      circle3: false,
      circle4: false,
    });
  };

  handleClickSelect3 = (event) => {
    event.preventDefault();
    this.setState({
      circle1: false,
      circle2: false,
      circle3: true,
      circle4: false,
    });
  };

  handleClickSelect4 = (event) => {
    event.preventDefault();
    this.setState({
      circle1: false,
      circle2: false,
      circle3: false,
      circle4: true,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
    
        <main>
          <CircleSelector
            state={this.state}
            circle1={this.handleClickSelect1}
            circle2={this.handleClickSelect2}
            circle3={this.handleClickSelect3}
            circle4={this.handleClickSelect4}
          />
          <Circles state={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
