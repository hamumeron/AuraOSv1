import Draggable from 'react-draggable';
import { useState } from 'react';

const CalculatorApp = ({ onClose }: { onClose: () => void }) => {
  const [expression, setExpression] = useState('');
  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setExpression(eval(expression).toString());
    } catch {
      setExpression('Error');
    }
  };

  return (
    <Draggable>
      <div className="absolute top-20 left-40 w-64 h-64 bg-white text-black rounded-xl shadow-lg">
        <div className="bg-gray-800 text-white p-2 flex justify-between rounded-t-xl">
          <span>calculator</span>
          <button onClick={onClose}>❌</button>
        </div>
        <div className="p-4">
          <input
            className="w-full border p-1 mb-2"
            value={expression}
            onChange={e => setExpression(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default CalculatorApp;
