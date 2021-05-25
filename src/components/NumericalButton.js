import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import '../App.css';

const NumericalButton = ({ value }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button className="digits" onClick={() => handleSetDisplayValue(value)}>
      {value}
    </button>
  );
};

export default NumericalButton;