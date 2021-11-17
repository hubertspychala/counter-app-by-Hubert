import React, { Component } from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
// import Clock from "./Clock";
import ClockFunctional from "./ClockFunctional";
import Step from "./Step";

// -------------
//KOMPONENT KLASOWY
//--------------

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      showClock: true,
      stepValue: 1,
    };
  }

  changeValue = (action) => {
    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;

      if (action === "add") {
        currentCounterValue += 1;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else if (action === "addx") {
        currentCounterValue += prevState.stepValue;
      } else {
        currentCounterValue = 0;
      }
      return { counterValue: currentCounterValue };
    });
  };

  toggleClock = () => {
    this.setState((prevState) => {
      return {
        showClock: !prevState.showClock,
      };
    });
  };

  setStepsValue = (value) => {
    console.log("+++++++++++++++ " + value);
    this.setState({ stepValue: value });
  };

  render() {
    let clockElement = "";

    if (this.state.showClock) {
      // clockElement = <Clock toggleClockMethod={this.toggleClock} />;
      clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
    } else {
      clockElement = (
        <span onClick={this.toggleClock} className="show-clock">
          show clock
        </span>
      );
    }

    return (
      <div className="counter">
        Counter:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel
          buttonMethod={this.changeValue}
          incStep={this.state.stepValue}
        />
        <Step setStep={this.setStepsValue} />
        {clockElement}
      </div>
    );
  }
}
export default Counter;
console.log();

//--------------------
// KOMPONENT FUNKCYJNY
// ------------------
// function Counter(props) {
//   let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);
//   return (
//     <div className="counter">
//       Counter:
//       <span className="value">{props.initValue}</span>
//     </div>
//   );
// }
// export default Counter;
