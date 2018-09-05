import React from 'react';
import { Route,Redirect } from 'react-router-dom';

import Index from '../page';
import Home from '../page/home';
import User from '../page/user';

class RouterMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="routeMap">
                <Route exact path="/main" render={() => <Redirect to='/main/index' />} />
                <Route exact path='/main/index' component={Index}/>
                <Route exact path='/main/home' component={Home}/>
                <Route exact path='/main/user' component={User}/>
            </div>
        )
    }
}

export default RouterMap;