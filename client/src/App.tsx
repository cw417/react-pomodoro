import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';

function App() {
  return (
    <div className="App">
      <Header
        title={"Pomodoro Timer"}
        stylingClasses={""}
      />
      <PomodoroTimer
        stylingClasses={""}
      />
    </div>
  );
}

export default App;
