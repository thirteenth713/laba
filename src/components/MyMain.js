import React from 'react';
import SimpleSlider from './SimpleSlider';
import List from './List';


class MyMain extends React.Component{

    render() {
        return (
            <div className="main_wrapper">
                <div className="main__left_side">
                    <div className="main__slider">
                        <SimpleSlider />
                    </div>
                </div>
                <div className="main__right_side">
                 <List />
                </div>
            </div>
        )
    }
}

export default MyMain;