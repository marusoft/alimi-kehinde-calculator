import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [operandType, setOperandType] = useState('');


  const handleSetDisplayValue = num => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, 0)}`);
    }
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setOperandType('');
  };

  const handleSetCalcFunction = type => {
    if (number) {
      setOperandType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setOperandType(type);
    }
  };

  const compute = () => {
    if (number && storedNumber) {
      switch (operandType) {
        case '+':
          setStoredNumber(`${Math.floor(`${(parseFloat(storedNumber) + parseFloat(number))}`)}`);
          break;
        case '-':
          setStoredNumber(`${Math.floor(`${(parseFloat(storedNumber) - parseFloat(number))}`)}`);
          break;
        case '*':
          setStoredNumber(`${Math.floor(`${parseFloat(storedNumber) * parseFloat(number)}`)}`);
          break;
        case '/':
          if (parseFloat(number) === 0) {
            handleClearValue();
            return;
         }
          setStoredNumber(`${Math.floor(`${(parseFloat(storedNumber) / parseFloat(number))}`)}`);
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  return (
    <NumberContext.Provider
      value={{
        compute,
        operandType,
        handleClearValue,
        handleSetCalcFunction,
        handleSetDisplayValue,
        handleSetStoredValue,
        number,
        storedNumber,
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;