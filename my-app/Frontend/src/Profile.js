import React, {Component} from 'react';
import ColorSelector from './ColorSelector'

class Profile extends Component {
    selectorMode = {
        FRAME: "Frame",
        NAME: "Name",
        NONE: "None"
    }

    constructor(props) {
        super(props);
        this.state = {
            mode: this.selectorMode.NONE
        }
    }

    pickNameColor = () => {
        console.log('clicked name');
        this.setState({
            mode: this.selectorMode.NAME
        });
    }

    pickFrameColor = () => {
        this.setState({
            mode: this.selectorMode.FRAME
        });
    }

    closeColorSelector = () => {
        this.setState({
            mode: this.selectorMode.NONE
        });
    }

    render() {
        console.log("Profile: " + this.props.user.name_color);
        return (
            <div className="Profile">
                <img className="profile-picture" src={"profile_picture.png"} alt={"Profile Picture"} style={{border: this.props.user.frame_color + " solid 3px"}} onClick={this.pickFrameColor}/>
                <div className="student-info">
                    <h1 className={"user-name"} style={{color: this.props.user.name_color}}>{this.props.user.name}</h1>
                    <div className="name-color">
                        <h2>Color:</h2>
                        <div className="color-selector" style={{background: this.props.user.name_color}} onClick={this.pickNameColor}/>
                    </div>
                    <h2>Points earned: {this.props.user.total_points}</h2>
                    <h2>Balance: ${this.props.user.points_available}</h2>
                </div>
                <div className={this.state.mode === this.selectorMode.NONE ? "hide" : "show"}>
                    <div className={"darken"} onClick={this.closeColorSelector}/>
                    <ColorSelector colors={this.props.colors} updater={this.state.mode === this.selectorMode.NAME ? this.props.updateName : this.props.updateFrame} closer={this.closeColorSelector}/>
                </div>
            </div>
        );
    }
}

export default Profile;
