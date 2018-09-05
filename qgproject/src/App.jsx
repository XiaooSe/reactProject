import React from 'react';
import { Switch, Route, Redirect,HashRouter} from 'react-router-dom';


import './media/css/main.less';

import Login from './page/logoin';
import MainContainer from './component/Main';
import NotFound from './component/NotFound'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount(){
        
    }    
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/login" />}/>
                        <Route path="/main" component={MainContainer}/>
                        <Route exact path="/login" component={Login}/>
                        <Route component={NotFound}/>
                    </Switch>       
                </HashRouter>         
            </div>
        )
    }
}

export default App;
