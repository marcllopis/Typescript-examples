import React from 'react';

import Button from './Button';
import EventButton from './EventButton';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';
import OldClass from './OldClass';

import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title='This is a title' num={23}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={(text) => console.log(text)}/>
        <EventButton onClick={(e) => console.log(e)}/>
        <Input />
      </header>
      <OldClass something='some text for classes' />
      <Footer text={'footer text'}/>
    </div>
  );
}

export default App;
