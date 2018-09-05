import React from 'react';

import RouterMap from '../router/RouterMap';
import LeftNav from './leftNav';
import Header from './Header';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="main">
                <Header></Header>
                <LeftNav></LeftNav>
                <div id="mainContent">
                    <RouterMap></RouterMap>
                </div>
            </div>
        )
    }
}

export default Main;