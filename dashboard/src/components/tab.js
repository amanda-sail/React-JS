import './tab.css';
import React from "react";

class Tab extends React.Component {
    render() {

        let {title, current, previous, time} = this.props;

        return (
            <div className='dashboard'>
                <div className='data'>
                    <h2>{title}</h2>
                    <h3>{current}hrs</h3>
                    <p>{time}&nbsp; - &nbsp;{previous}</p>
                </div>
            </div>
        );
    }
};

export default Tab;