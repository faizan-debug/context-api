import React from 'react';
import './App.css';
//Components
import Posts from './components/Posts';
//State
import GlobalState from './context/global/GlobalState';

function App() {
  return (
    <GlobalState>
    <div>
      <h1>Context API with AXIOS</h1>
      <Posts />
    </div>
    </GlobalState>
  );
}

export default App;
