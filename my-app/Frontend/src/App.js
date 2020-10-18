import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Profile from './Profile'
import Classroom from './Classroom'
import Shop from './Shop'

class App extends Component {
  contentStates = {
    HOME: 'Home',
    PROFILE: 'Profile',
    CLASSROOM: 'Classroom',
    SHOP: 'SHOP'
  }

  constructor(props) {
    super(props);
    this.state = {
      contentType: this.contentStates.HOME,
      user: "Bob Ross",
      students: this.getStudents(),
    }
  }

  getStudents = () => {
    // TODO: get request to get list of students in classroom
    return [
      {
        name: "Bob Ross",
        ranking: 1,
        color: "blue",
        total_points: 500,
        balance: 480,
        badges: [],
      },
      {
        name: "Roy Liu",
        ranking: 2,
        color: "black",
        total_points: 66,
        balance: 25,
        badges: ["℗", "♫"], 
      }
    ];
  }

  getUser = () => {
    // TODO: same as above
    return this.getStudents()[0];
  }

  viewHome = () => {
    this.setState({
      contentType: this.contentStates.HOME,
    });
  }

  viewMyProfile = () => {
    this.setState({
      contentType: this.contentStates.PROFILE,
    });
  }

  viewMyClassroom = () => {
    this.setState({
      contentType: this.contentStates.CLASSROOM,
    });
  }

  viewShop = () => {
    this.setState({
      contentType: this.contentStates.SHOP,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="navigation-bar">
          <button onClick={this.viewHome} className={this.state.contentType === this.contentStates.HOME ? 'selected' : ''}>Home</button>
          <button onClick={this.viewMyProfile} className={this.state.contentType === this.contentStates.PROFILE ? 'selected' : ''}>My Profile</button>
          <button onClick={this.viewMyClassroom} className={this.state.contentType === this.contentStates.CLASSROOM ? 'selected' : ''}>Classroom</button>
          <button onClick={this.viewShop} className={this.state.contentType === this.contentStates.SHOP ? 'selected' : ''}>Shop</button>
        </div>
        <div className={this.state.contentType === this.contentStates.HOME ? "show" : "hide"}>
          <Home />
        </div>
        <div className={this.state.contentType === this.contentStates.PROFILE ? "show" : "hide"}>
          <Profile user={this.getUser()}/>
        </div>
        <div className={this.state.contentType === this.contentStates.CLASSROOM ? "show" : "hide"}>
          <Classroom students={this.state.students}/>
        </div>
        <div className={this.state.contentType === this.contentStates.SHOP ? "show" : "hide"}>
          <Shop />
        </div>
      </div>
    );
  }
}

// an example commit 
export default App;
