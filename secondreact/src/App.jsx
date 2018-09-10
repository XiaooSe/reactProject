import React from 'react';
import { Switch, Route, Redirect,HashRouter} from 'react-router-dom';

import './media/css/main.less';
import Login from './page/logoin';
import MainContainer from './component/Main';
import NotFound from './component/NotFound';
import FinanceSystem from './system/financeSystem';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount(){

    }

    render() {
        return (
            <React.Fragment>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/FinanceSystem" />}/>
                        <Route path="/main" component={MainContainer}/>
                        <Route path="/FinanceSystem" component={FinanceSystem}/>
                        <Route exact path="/login" component={Login}/>
                        <Route component={NotFound}/>
                    </Switch>
                </HashRouter>
            </React.Fragment>
        )
    }
}

export default App;