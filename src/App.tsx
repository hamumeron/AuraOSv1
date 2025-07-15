import React, { useState } from 'react';
import BrowserApp from './components/BrowserApp';
import CalculatorApp from './components/CalculatorApp';
import NotepadApp from './components/NotepadApp';

const App: React.FC = () => {
  const [openApps, setOpenApps] = useState<string[]>([]);

  const toggleApp = (name: string) => {
    if (openApps.includes(name)) {
      setOpenApps(openApps.filter(app => app !== name));
    } else {
      setOpenApps([...openApps, name]);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-sky-500 to-indigo-700 overflow-hidden relative">
      {/* タスクバー */}
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-black/50 flex items-center space-x-4 px-4">
        <button onClick={() => toggleApp('browser')} className="text-xl">🌐</button>
        <button onClick={() => toggleApp('calculator')} className="text-xl">🧮</button>
        <button onClick={() => toggleApp('notepad')} className="text-xl">📝</button>
      </div>

      {/* アプリウィンドウ */}
      {openApps.includes('browser') && <BrowserApp onClose={() => toggleApp('browser')} />}
      {openApps.includes('calculator') && <CalculatorApp onClose={() => toggleApp('calculator')} />}
      {openApps.includes('notepad') && <NotepadApp onClose={() => toggleApp('notepad')} />}
    </div>
  );
};

export default App;
