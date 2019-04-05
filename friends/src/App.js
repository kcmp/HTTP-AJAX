import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

import FriendInfoForm from './components/FriendInfoForm';
import FriendsList from './components/FriendsList';
import AddFriendButton from './components/AddFriendButton';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     friends: [],
     postSuccessMessage: '',
      postError: '',
      putSuccessMessage: '',
      putError: '',
      deleteSuccessMessage: '',
      deleteError: '',
      showForm: 'post'
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

  deleteFriend = e => {
    e.preventDefault();
    this.props.deleteFriend(this.state.friends);
  };

  handleSubmitBtn = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    })
      .then(res => {
        this.setState({ friends: res.data.friends})
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleFriendDeleteBtn = id => {
    // id.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
        // axios.get('http://localhost:5000/friends')
          .then(res => {
            this.setState({
              friends: res.data.friends
            })
          })
          .catch(err => {
            console.log(err);
          })
  }

  render() {
    return (
      <div className="App">

        <FriendsList friends= {this.state.friends} handleFriendDeleteBtn = {this.handleFriendDeleteBtn} deleteFriend = {this.deleteFriend}/>
        <FriendInfoForm handleFriendFormInput = {this.handleFriendFormInput} />
        <br/>
        <AddFriendButton handleSubmitBtn = {this.handleSubmitBtn} handleFriendFormInput= {this.handleFriendFormInput}/>
        <br/>
        
      </div>
    );
  }
}

export default App;
