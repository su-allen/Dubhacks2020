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
    total_points: 1000,
    points_available: 1000,
    badges: null,
    badge_collection: null,
    frame_color: Colors.LIGHTGREEN,
    frame_collection: null,
    name_color: Colors.BLACK,
    name_collection: null,
  },
  {
    name: "Roy Liu",
    ranking: 2,
    total_points: 900,
    points_available: 900,
    badges: ["℗", "♫"],
    badge_collection: ["℗", "♫"],
    frame_color: Colors.ALICEBLUE,
    frame_collection: [Colors.ALICEBLUE, Colors.DEFAULT],
    name_color: Colors.LIGHTGREEN,
    name_collection: [Colors.LIGHTGREEN, Colors.DEFAULT],
  },
  {
    name: "George Curious",
    ranking: 3,
    total_points: 840,
    points_available: 840,
    badges: null,
    badge_collection: null,
    frame_color: Colors.HOTPINK,
    frame_collection: [Colors.WHITE, Colors.DEFAULT],
    name_color: null,
    name_collection: [Colors.DEFAULT],
  },
  {
    name: "Bob Sponge",
    ranking: 4,
    total_points: 810,
    points_available: 810,
    badges: null,
    badge_collection: null,
    frame_color: Colors.GOLD,
    frame_collection: [Colors.BLACK, Colors.DEFAULT],
    name_color: Colors.ALICEBLUE,
    name_collection: [Colors.DEFAULT],
  },
  {
    name: "Bruce Wayne",
    ranking: 5,
    total_points: 800,
    points_available: 800,
    badges: null,
    badge_collection: null,
    frame_color: Colors.BLACK,
    frame_collection: [Colors.BLACK, Colors.DEFAULT],
    name_color: Colors.HOTPINK,
    name_collection: [Colors.DEFAULT],
  },
  {
    name: "Sun WuKong",
    ranking: 6,
    total_points: 720,
    points_available: 720,
    badges: null,
    badge_collection: null,
    frame_color: Colors.BISQUE,
    frame_collection: [Colors.BLACK, Colors.DEFAULT],
    name_color: Colors.BLACK,
    name_collection: [Colors.DEFAULT],
  },
  {
    name: "James Bonds",
    ranking: 7,
    total_points: 700,
    points_available: 700,
    badges: null,
    badge_collection: null,
    frame_color: Colors.BLACK,
    frame_collection: [Colors.BLACK, Colors.DEFAULT],
    name_color: Colors.WHITE,
    name_collection: [Colors.DEFAULT],
  },
  {
    name: "Saitama Saitama",
    ranking: 8,
    total_points: 0,
    points_available: 0,
    badges: null,
    badge_collection: null,
    frame_color: Colors.GOLD,
    frame_collection: [Colors.BLACK, Colors.DEFAULT],
    name_color: Colors.INDIGO,
    name_collection: [Colors.DEFAULT],
  },
  {
    name: "Ariana Grande",
    ranking: 9,
    total_points: 0,
    points_available: 0,
    badges: null,
    badge_collection: null,
    frame_color: Colors.HOTPINK,
    frame_collection: [Colors.BLACK, Colors.DEFAULT],
    name_color: Colors.WHITE,
    name_collection: [Colors.DEFAULT],
  },
  {
    name: "Naruto Uzumaki",
    ranking: 10,
    total_points: 0,
    points_available: 0,
    badges: null,
    badge_collection: null,
    frame_color: Colors.WHITE,
    frame_collection: [Colors.BLACK, Colors.DEFAULT],
    name_color: Colors.BLACK,
    name_collection: [Colors.DEFAULT],
  },
  {
    name: "Luffy D. Monkey",
    ranking: 11,
    total_points: 0,
    points_available: 0,
    badges: null,
    badge_collection: null,
    frame_color: Colors.WHITE,
    frame_collection: [Colors.BLACK, Colors.DEFAULT],
    name_color: Colors.BLACK,
    name_collection: [Colors.DEFAULT],
  },
  {
    name: "Captain Crunch",
    ranking: 12,
    total_points: 0,
    points_available: 0,
    badges: null,
    badge_collection: null,
    frame_color: Colors.WHITE,
    frame_collection: [Colors.BLACK, Colors.DEFAULT],
    name_color: Colors.BLACK,
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
      user: this.getUser(),
      students: this.getStudents(),
    }
  }

  // Return a list of all the students to be displayed in the Classroom
  getStudents = () => {
    // TODO: GET request to database to get list of students in classroom and return it
    return dummy_data;
  }

  // Return user data
  getUser = () => {
    // TODO: same as above
    return this.getStudents()[0];
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

  // Triggered when a shop buy button is clicked
  handleShopBuy = (type, color) => {
    console.log("PURCHASED " + type, color);
    if (type === "frame_color") {
      type = "frame_collection";
    } else {
      type = "name_collection";
    }

    this.setState({
      user: { ...this.state.user, [type]: (this.state.user[type] ? [...this.state.user[type], color] : [color]), points_available: this.state.user.points_available - 100 },
    });
  }

  updateFrameColorTo = (color) => {
    this.setState({
      user: {...this.state.user, frame_color: color}
    });
  }

  updateNameColorTo = (color) => {
    this.setState({
      user: {...this.state.user, name_color: color}
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
        <p style={{float: "right"}}>{`Points Available: ${this.state.user.points_available}`}</p>
        </div>
        <div className={this.state.contentType === this.contentStates.HOME ? "show" : "hide"}>
          <Home />
        </div>
        <div className={this.state.contentType === this.contentStates.PROFILE ? "show" : "hide"}>
          <Profile user={this.getUser()} colors={Colors}/>
        </div>
        <div className={this.state.contentType === this.contentStates.CLASSROOM ? "show" : "hide"}>
          <Classroom students={this.state.students} colors={Colors} />
        </div>
        <div className={this.state.contentType === this.contentStates.SHOP ? "show" : "hide"}>
          <Shop me={this.state.user} colors={Colors} handleShopBuy={this.handleShopBuy} />
        </div>
      </div>
    );
  }
}

// an example commit 
export default App;
