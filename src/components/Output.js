import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import '../App.css'

const Output = () => {
  const { number, storedNumber, operandType } = useContext(NumberContext);
  return (
    <div className="output">
      <span>
        {!number.length && !storedNumber ? '' : number || storedNumber}
      </span>
      <br></br>
      <span>
        {!storedNumber ? '' : `${storedNumber} ${operandType} ${number}`}


       {/** {(() => {
          if (!Number(number) === 0) {
            if (!storedNumber) {
              return ''
            }
            return `${storedNumber} ${operandType} ${number}`
          }

          return handleClearValue();
        })()}
 */}

      </span>
    </div>
  );
};

export default Output;