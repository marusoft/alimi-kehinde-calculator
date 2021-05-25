import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import '../App.css'

const MultiplyButton = ({ value }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button className="op-mul multiply" type="button" onClick={() => handleSetCalcFunction(value)}>
      {value}
    </button>
  );
};

export default MultiplyButton;