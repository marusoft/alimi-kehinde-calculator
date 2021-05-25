import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import '../App.css'

const DivideButton = ({ value }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button className="op-div" type="button" onClick={() => handleSetCalcFunction(value)}>
      {value}
    </button>
  );
};

export default DivideButton;