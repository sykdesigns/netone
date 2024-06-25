import { useState } from 'react'
import Sidebar from '../components/Sidebar';
import './index.css'

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      {/* Main content goes here */}
    </div>
  );
};

export default App;
