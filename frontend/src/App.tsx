import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Router />
      </div>
      <TopBar />  
      
    </div>
  );
}

export default App;
