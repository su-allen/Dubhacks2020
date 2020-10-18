import React, {Component} from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    chooseColor = () => {
        // TODO: change color
        console.log("color selector was clicked");
    }

    render() {
        return (
            <div className="Profile">
                <img className="profile-picture" src={"profile_picture.png"} alt={"Profile Picture"}/>
                <div className="student-info">
                    <h1 className={"user-name"} style={{color: this.props.user.name_color}}>{this.props.user.name}</h1>
                    <div className="name-color">
                        <h2>Color:</h2>
                        <div className="color-selector" style={{background: this.props.user.name_color}} onClick={this.chooseColor}/>
                    </div>
                    <h2>Points earned: {this.props.user.total_points}</h2>
                    <h2>Balance: ${this.props.user.points_available}</h2>
                </div>
            </div>
        );
    }
}

export default Profile;
