import React from 'react';
import './App.css';
import Header from './Header';
import Siderbar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className='app_body'>
        <Siderbar />
      </div>
      {/* Sidebar */}
      
      {/* Feed */}

      {/* Widgets */}
    </div>
  );
}

export default App;
