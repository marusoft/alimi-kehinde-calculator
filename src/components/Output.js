import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import '../App.css'

const Output = () => {
  const { number, previousNumber, operandType } = useContext(NumberContext);
  return (
    <div className="output">
      <span>
        {!number.length && !previousNumber ? '' : number || previousNumber}
      </span>
      <br></br>
      <span>
        {!previousNumber ? '' : `${previousNumber} ${operandType} ${number}`}
      </span>
    </div>
  );
};

export default Output;