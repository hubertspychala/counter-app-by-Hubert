import { Component } from "react";
import "./Step.css";

class Step extends Component {
  constructor(props) {
    super(props);
  }

  InputChange = (e) => {
    let newValue = Number(e.target.value);
    this.props.setStep(newValue);
  };

  render() {
    return (
      <div className="step">
        <span>Krok:</span>
        <input type="number" min="1" onChange={this.InputChange} />
      </div>
    );
  }
}

export default Step;
