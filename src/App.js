import React from 'react';

import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    }
  }

  

  handleSubmitIncrease = e => {
    this.setState( {counter: this.state.counter + 1} )
    e.preventDefault(); // prevent Default HTML action
    
  };

  handleSubmitDecrease = e => {
    this.setState( {counter: this.state.counter - 1} )
    e.preventDefault(); // prevent Default HTML action
    
  };

  render() {
    const formStyle = {
      margin: 'auto',
      padding: '50px',
    };
    const rowStyle = {
      margin: '10px',
      width: '300px',
      height: '100px',
      padding: '10px',
    };
    console.log(this.state.counter)
    const {abc} = this.state;
    return (
      <div className ="App">
        <h1 className ="showcounter">
          {this.state.counter}
        </h1>
        <button onClick = {this.handleSubmitIncrease} className = 'counter'>
          increase
          </button>
        <button onClick = {this.handleSubmitDecrease} className = 'counter'>
          decrease
          </button>
         
      </div>
    );
  }
}
//aaaa
export default App;
