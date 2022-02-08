import './monthly.css';
import React from 'react';

class Monthly extends React.Component {
    render() {

        let {activity, hours, previous} = this.props;

        return(
            <div className='dashboard'>
                <img src="" alt="" />
                <div>
                    <h2>{activity}</h2>
                    <h3>{hours}</h3>
                    <p>{previous}</p>
                </div>
            </div>
        );
    }
};

export default Monthly;