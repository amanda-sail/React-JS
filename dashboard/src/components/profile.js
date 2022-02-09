import './profile.css';
import React from 'react';

class Profile extends React.Component {

    fn = (e) => {
        this.props.changeTimeframe(e.target.textContent.toLowerCase())
    }

    render() {
        return(
            <div id='profile-container'>
                <div id="profile">
                    <img src="./images/image-jeremy.png" alt="Photo of Jeremy Robson" />
                    <div id="profile-text">
                        <p>Report for</p>
                        <h1>Jeremy Robson</h1>
                    </div>
                </div>
                <div id="time">
                    <p onMouseOver={this.fn}>Daily</p>
                    <p onMouseOver={this.fn}>Weekly</p>
                    <p onMouseOver={this.fn}>Monthly</p>
                </div>
            </div>
        );
    }
}

export default Profile;