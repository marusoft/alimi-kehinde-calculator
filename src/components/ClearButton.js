import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import '../App.css'

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button type="button" className="clear" onClick={() => handleClearValue()}>
      C
    </button>
  );
};

export default ClearButton;