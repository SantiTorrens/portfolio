import React from 'react';

import Header from '../Components/Header/Header';

import './App.css';
import Main from '../Components/Main/Main';
// import Mobile from '../Components/Mobile/Mobile';

function App() {
  return (
    <div className="App">
        {/* <Mobile /> */}
        <Header />
        <Main />
    </div>
  );
}

export default App;
