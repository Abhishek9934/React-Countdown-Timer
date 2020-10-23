import React, { Component } from "react";


import Countdown from "./Countdown";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="Timers">
          <Countdown />
        </div>
      </div>
    );
  }
}

export default App;