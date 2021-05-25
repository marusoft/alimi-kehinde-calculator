import React from "react";
import Output from "./Output";
import NumericalButton from './NumericalButton';
import ZeroButton from './ZeroButton';
import AddButton from './AddButton';
import SubtractButton from './SubtractButton'
import DivideButton from './DivideButton'
import MultiplyButton from "./MultiplyButton";
import ClearButton from "./ClearButton";
import ComputeButton from "./ComputeButton"

import "../App.css";


const Calculator = () => {

  return (
    <div className="calculator">
      <Output />
      <div className="calculator-buttons">
        <ZeroButton value={0} />
        <NumericalButton value={1} />
        <NumericalButton value={2} />
        <NumericalButton value={3} />
        <NumericalButton value={4} />
        <NumericalButton value={5} />
        <NumericalButton value={6} />
        <NumericalButton value={7} />
        <NumericalButton value={8} />
        <NumericalButton value={9} />
        <AddButton value='+' />
        <SubtractButton value='-' />
        <MultiplyButton value='*' />
        <DivideButton value='/' />
        <ClearButton value='c' />
        <ComputeButton value='=' />
      </div>
    </div>
  );
};

export default Calculator;
