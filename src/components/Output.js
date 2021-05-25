import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import '../App.css'

const Output = () => {
  const { number, storedNumber, operandType } = useContext(NumberContext);
  return (
    <div>
    <h2 className={storedNumber && storedNumber.length > 12 ? 'long-main-display' : undefined}>
    {!number.length && !storedNumber ? '' : number || storedNumber}
  </h2>
  <p className={storedNumber && storedNumber.length > 12 ? 'long-stored-display' : undefined}>
  {!storedNumber ? '' : `${storedNumber} ${operandType} ${number}`}
</p>
    </div>
  );
};

export default Output;
