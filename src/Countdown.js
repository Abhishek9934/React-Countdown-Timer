import React, { Component } from "react";
import "./App.css";
class Countdown extends Component {

    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
      };
    
      startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: this.state.timerTime
        });
      
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 10;
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });
          } else {
            clearInterval(this.timer);
            this.setState({ timerOn: false });
            alert("Timer ended");
          }
        }, 10);
      };


      resumeTimer = () => {
        this.setState({
          timerOn: true
        });
      
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 10;
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });
          } else {
            clearInterval(this.timer);
            this.setState({ timerOn: false });
            alert("Timer ended");
          }
        }, 10);
      };
    
      stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
      };

      resetTimer = () => {
        if (this.state.timerOn === false) {
          this.setState({
            timerTime: this.state.timerStart
          });
        }
      };
     
      restartTimer =()=>
      {
        this.setState({
          timerOn: false,
          timerTime: 0,
          timerStart: 0
        });
      }
  
      adjustTimer = input => {
        
        const { timerTime, timerOn } = this.state;

        if (!timerOn) {
          if (input === "increaseHours" && timerTime + 3600000 < 216000000) {
            this.setState({ timerTime: timerTime + 3600000 });
          } else if (input === "decreaseHours" && timerTime - 3600000 >= 0) {
            this.setState({ timerTime: timerTime - 3600000 });
          } else if (input === "increaseMinutes" && timerTime + 60000 < 216000000) {
            this.setState({ timerTime: timerTime + 60000 });
          } else if (input === "decreaseMinutes" && timerTime - 60000 >= 0) {
            this.setState({ timerTime: timerTime - 60000 });
          } else if (input === "increaseSeconds" && timerTime + 1000 < 216000000) {
            this.setState({ timerTime: timerTime + 1000 });
          } else if (input === "decreaseSeconds" && timerTime - 1000 >= 0) {
            this.setState({ timerTime: timerTime - 1000 });
          }

        }

      
      };
    
  render() {

    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);
    return (
      <div className="Countdown">
        <div className="Countdown-header">Timer</div>
        <div className="Countdown-label">Hours : Minutes : Seconds</div>
        <div className="Countdown-display">
          <button onClick={() => this.adjustTimer("increaseHours")}>&#8679;</button>
          <button onClick={() => this.adjustTimer("increaseMinutes")}>&#8679;</button>
          <button onClick={() => this.adjustTimer("increaseSeconds")}>&#8679;</button>
          <div className="Countdown-time">
            {hours} : {minutes} : {seconds}
          </div>

          <button onClick={() => this.adjustTimer("decreaseHours")}>&#8681;</button>
          <button onClick={() => this.adjustTimer("decreaseMinutes")}> &#8681;</button>
          <button onClick={() => this.adjustTimer("decreaseSeconds")}>&#8681;</button>
        </div>


        {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button className="Button-start" onClick={this.startTimer}>Start</button>
        )}
        {timerOn === true && timerTime >= 1000 && (
          <button className="Button-stop" onClick={this.stopTimer}> Stop </button>
        )}
        {timerOn === false && (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button className="Button-start" onClick={this.resumeTimer}>Resume</button>
          )}

        {(timerOn === false || timerTime < 1000) &&(timerStart !== timerTime && timerStart > 0) && (
            <button className="Button-reset" onClick={this.resetTimer}>Reset</button>
          )}
        <div className="Bottom">
        <button className="Restart" onClick={this.restartTimer}>
          Reset to 0
        </button>
        </div>

      </div>
    );
  }
}
export default Countdown;
