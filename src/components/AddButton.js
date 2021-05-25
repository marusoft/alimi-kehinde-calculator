import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import '../App.css'

const AddButton = ({ value }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button className="op-add" type="button" onClick={() => handleSetCalcFunction(value)}>
      {value}
    </button>
  );
};

export default AddButton;