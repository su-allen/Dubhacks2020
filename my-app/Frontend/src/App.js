import React, {Component} from 'react';
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
      contentType: this.contentStates.HOME
    }
  }

  render() {
    return (
      <div className="App">
        <div className={this.state.contentType === this.contentStates.HOME ? "show" : "hide"}>
          <Home/>
        </div>
        <div className={this.state.contentType === this.contentStates.PROFILE ? "show" : "hide"}>
          <Profile/>
        </div>
        <div className={this.state.contentType === this.contentStates.CLASSROOM ? "show" : "hide"}>
          <Classroom/>
        </div>
        <div className={this.state.contentType === this.contentStates.SHOP ? "show" : "hide"}>
          <Shop/>
        </div>
      </div>
    );
  }
}

// an example commit 
export default App;
