import React,{Component} from 'react';
import { Route,Redirect } from 'react-router-dom';

// import WithLoadable from '../utils/loadable';

import Index from '../page';
import Home from '../page/home';
import User from '../page/user';

 
class RouterMap extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {}
    }
    render(){
        return (
            <div>
                <Route exact path="/main" render={() => <Redirect to='/main/index' />} /> 
                <Route exact path='/main/index' component={Index}/>                
                <Route exact path='/main/Home' component={Home}/>
                <Route exact path='/main/User' component={User}/>    
            </div>
        )
    }
}

export default RouterMap