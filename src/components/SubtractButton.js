import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import '../App.css'

const SubtractButton = ({ value }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button className="op-sub subtract" type="button" onClick={() => handleSetCalcFunction(value)}>
      {value}
    </button>
  );
};

export default SubtractButton;