import React from 'react';

import RouterMap  from '../router/RouterMap';
import LeftMenue from './leftMenue';
import Header from './Header';
class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="mainContainer">
                <LeftMenue></LeftMenue>
                <Header></Header>
                <div className="mainContent">
                    <RouterMap></RouterMap>
                </div>
            </div>
        )
    }
}

export default MainContainer;