import Draggable from 'react-draggable';

const BrowserApp = ({ onClose }: { onClose: () => void }) => (
  <Draggable>
    <div className="absolute top-10 left-10 w-96 h-72 bg-white text-black rounded-xl shadow-lg">
      <div className="bg-gray-800 text-white p-2 flex justify-between rounded-t-xl">
        <span>Browser</span>
        <button onClick={onClose}>❌</button>
      </div>
      <iframe
        src="https://example.com"
        className="w-full h-full border-0 rounded-b-xl"
        title="iframe"
      />
    </div>
  </Draggable>
);
export default BrowserApp;
