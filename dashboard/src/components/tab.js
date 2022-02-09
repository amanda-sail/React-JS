import './tab.css';
import React from "react";

class Tab extends React.Component {
    render() {

        let {title, current, previous, time} = this.props;

        return (
            <div className='dashboard'>
                <div className='data'>
                    <div className="current-data">
                        <h2>{title}</h2>
                        <h3>{current}hrs</h3>
                    </div>
                    <div className='previous-data'>
                        <p>{time}&nbsp; - &nbsp;{previous}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Tab;