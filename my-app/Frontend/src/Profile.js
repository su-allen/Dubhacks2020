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
        console.log('clicked frame');
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
        return (
            <div className="Profile">
                <img className="profile-picture" src={"profile_picture.png"} alt={"Profile Picture"} onClick={this.pickFrameColor}/>
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
                    <ColorSelector colors={this.props.colors}/>
                </div>
            </div>
        );
    }
}

export default Profile;
