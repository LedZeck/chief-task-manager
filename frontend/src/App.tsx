import React from 'react';
import './App.css';

import Main from './containers/Main';
import { TaskProvider } from './contexts/TaskContext';

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Main />
      </TaskProvider>
    </div>
  );
}

export default App;
