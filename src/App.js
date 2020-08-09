import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {

    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
  searchUsers = (text) => {
    console.log(text)
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
