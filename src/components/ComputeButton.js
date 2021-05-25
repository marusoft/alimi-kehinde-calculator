import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import '../App.css'

const EqualButton = () => {
  const { compute } = useContext(NumberContext);
  return (
    <button className="eq" type="button" onClick={() => compute()}>
      =
    </button>
  );
};

export default EqualButton;