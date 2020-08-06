import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <Navbar title='hello' />
      <Users />
    </div>
  );
}

export default App;
