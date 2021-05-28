import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import '../App.css'

const ClearButton = () => {
  const { handleClearDisplay } = useContext(NumberContext);
  return (
    <button type="button" className="clear" onClick={() => handleClearDisplay()}>
      C
    </button>
  );
};

export default ClearButton;