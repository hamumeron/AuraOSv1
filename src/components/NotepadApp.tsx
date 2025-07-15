import Draggable from 'react-draggable';
import { useState } from 'react';

const NotepadApp = ({ onClose }: { onClose: () => void }) => {
  const [text, setText] = useState('');

  return (
    <Draggable>
      <div className="absolute top-32 left-20 w-80 h-64 bg-white text-black rounded-xl shadow-lg flex flex-col">
        <div className="bg-gray-800 text-white p-2 flex justify-between rounded-t-xl">
          <span>memo pad</span>
          <button onClick={onClose}>❌</button>
        </div>
        <textarea
          className="flex-1 p-2 rounded-b-xl resize-none"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
    </Draggable>
  );
};

export default NotepadApp;
