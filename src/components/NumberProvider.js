import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operandType, setOperandType] = useState('');


  const handleSetDisplayValue = num => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, 0)}`);
    }
  };

  const handleSetStoredValue = () => {
    setPreviousNumber(number);
    setNumber('');
  };

  const handleClearDisplay = () => {
    setNumber('');
    setPreviousNumber('');
    setOperandType('');
  };

  const handleSetCalcFunction = type => {
    if (number) {
      setOperandType(type);
      handleSetStoredValue();
    }
    if (previousNumber) {
      setOperandType(type);
    }
  };

  const compute = () => {
    if (number && previousNumber) {
      switch (operandType) {
        case '+':
          setPreviousNumber(`${Math.floor(`${(parseFloat(previousNumber) + parseFloat(number))}`)}`);
          break;
        case '-':
          setPreviousNumber(`${Math.floor(`${(parseFloat(previousNumber) - parseFloat(number))}`)}`);
          break;
        case '*':
          setPreviousNumber(`${Math.floor(`${parseFloat(previousNumber) * parseFloat(number)}`)}`);
          break;
        case '/':
          if (parseFloat(number) === 0) {
            handleClearDisplay();
            return;
         }
          setPreviousNumber(`${Math.floor(`${(parseFloat(previousNumber) / parseFloat(number))}`)}`);
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
        handleClearDisplay,
        handleSetCalcFunction,
        handleSetDisplayValue,
        handleSetStoredValue,
        number,
        previousNumber,
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;