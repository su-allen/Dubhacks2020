import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Profile from './Profile'
import Classroom from './Classroom'
import Shop from './Shop'

const Colors = {
  ALICEBLUE: "AliceBlue",
  BISQUE: "Bisque",
  BLACK: "Black",
  GOLD: "Gold",
  INDIGO: "Indigo",
  LIGHTGREEN: "LightGreen",
  HOTPINK: "HotPink",
  WHITE: "White",
  DEFAULT: null,
};

var dummy_data = [
  {
    name: "Bob Ross",
    ranking: 1,
    total_points: 500,
    points_available: 500,
    badges: null, 
    badge_collection: null,
    frame_color: null,
    frame_collection: null,
    name_color: null,
    name_collection: null,
  },
  {
    name: "Roy Liu",
    ranking: 2,
    total_points: 66,
    points_available: 16,
    badges: ["℗", "♫"], 
    badge_collection: ["℗", "♫"],
    frame_color: Colors.ALICEBLUE,
    frame_collection: [Colors.ALICEBLUE, Colors.DEFAULT],
    name_color: Colors.LIGHTGREEN,
    name_collection: [Colors.LIGHTGREEN, Colors.DEFAULT],
  },
  {
    name: "uiL yoR",
    ranking: 3,
    total_points: 18,
    points_available: 18,
    badges: null, 
    badge_collection: null,
    frame_color: Colors.WHITE,
    frame_collection: [Colors.WHITE, Colors.DEFAULT],
    name_color: null,
    name_collection: [Colors.DEFAULT],
  },
];

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
      students: this.getStudents(),
    }
  }

  // Return a list of all the students to be displayed in the Classroom
  getStudents = () => {
    // TODO: GET request to database to get list of students in classroom and return it
    return dummy_data;
  }

  // Return this student
  getMe = () => {
    // TODO: GET request to database to get THIS student
    return dummy_data[1];
  }

  // Triggered when the Home button is selected
  viewHome = () => {
    this.setState({
      contentType: this.contentStates.HOME,
    });
  }

  // Triggered when the My Profile button is selected
  viewMyProfile = () => {
    this.setState({
      contentType: this.contentStates.PROFILE,
    });
  }

  // Triggered when the Classroom button is selected
  viewMyClassroom = () => {
    this.setState({
      contentType: this.contentStates.CLASSROOM,
    });
  }

  // Triggered when the Shop button is selected
  viewShop = () => {
    this.setState({
      contentType: this.contentStates.SHOP,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="navigation-bar">
          <button onClick={this.viewHome} className={this.state.contentType === this.contentStates.HOME ? 'selected' : ''} disabled={this.state.contentType === this.contentStates.HOME}>Home</button>
          <button onClick={this.viewMyProfile} className={this.state.contentType === this.contentStates.PROFILE ? 'selected' : ''} disabled={this.state.contentType === this.contentStates.PROFILE}>My Profile</button>
          <button onClick={this.viewMyClassroom} className={this.state.contentType === this.contentStates.CLASSROOM ? 'selected' : ''} disabled={this.state.contentType === this.contentStates.CLASSROOM}>Classroom</button>
          <button onClick={this.viewShop} className={this.state.contentType === this.contentStates.SHOP ? 'selected' : ''} disabled={this.state.contentType === this.contentStates.SHOP}>Shop</button>
        </div>
        <div className={this.state.contentType === this.contentStates.HOME ? "show" : "hide"}>
          <Home />
        </div>
        <div className={this.state.contentType === this.contentStates.PROFILE ? "show" : "hide"}>
          <Profile />
        </div>
        <div className={this.state.contentType === this.contentStates.CLASSROOM ? "show" : "hide"}>
          <Classroom students={this.state.students} colors={this.Colors}/>
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
