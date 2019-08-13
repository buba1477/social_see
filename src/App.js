import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Classnav/Classnav';
import Content from './components/Content/Content';

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
