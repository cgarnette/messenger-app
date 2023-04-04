import React from 'react';
import './App.css';
import { Router } from './routes/Router';
import AuthWrapper from './components/AuthWrapper';

function App() {
  return (
    <div className="App">
      <AuthWrapper>
        <Router />
      </AuthWrapper>
    </div>
  );
}

export default App;