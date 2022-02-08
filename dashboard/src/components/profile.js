import './profile.css';
import React from 'react';

class Profile extends React.Component {
    render() {
        return(
            <div id='profile-container'>
                <div id="profile">
                    <img src="./images/image-jeremy.png" alt="Photo of Jeremy Robson" />
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
                <div id="time">
                    <p>Daily</p>
                    <p>Weekly</p>
                    <p>Monthly</p>
                </div>
            </div>
        );
    }
}

export default Profile;