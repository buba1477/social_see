import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Classnav';
import Content from './components/Content';

const App = () => {
  return (
    <div className='app-wripper' >
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
