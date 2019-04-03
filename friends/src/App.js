import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

import FriendInfoForm from './components/FriendInfoForm';
import FriendsList from './components/FriendsList';


class App extends Component {
  constructor() {
    super();
    this.state = {
     friends: [],
     name: '',
     age: '',
     email: '',
      }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
        .then(res => this.setState({friends: res.data}))
  }

  handleFriendFormInput = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });  
  }

  handleSubmitBtn = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    })
      .then(res => {
        this.setState({ friends: res.data})
      })
      .catch(err => {
        console.log(err);
      })
  }

  

  render() {
    return (
      <div className="App">

        <FriendsList friends= {this.state.friends} />
        <FriendInfoForm handleFriendFormInput = {this.handleFriendFormInput} />
        <br/>
        
        
      </div>
    );
  }
}

export default App;
