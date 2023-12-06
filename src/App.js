// App.js
import React from 'react';
import './App.css';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

function App() {
  return (
    <div className="app-container">
      <SectionOne />
      <div className="divider" />
      <SectionTwo />
      <div className="divider" />
      <SectionThree />
    </div>
  );
}

export default App;


