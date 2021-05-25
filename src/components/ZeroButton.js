import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import '../App.css'

const ZeroButton = ({ value }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button className="digits digit-0" onClick={() => handleSetDisplayValue(value)}>
      {value}
    </button>
  );
};

export default ZeroButton;