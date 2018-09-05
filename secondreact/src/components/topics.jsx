import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mainContent from './mainContent';

const Topics = ({ match }) => {
    return (
        <div>
            <h2>topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>选项一</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>选项二</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>选项三</Link>
                </li>
            </ul>
            <Route path={`${match.url}/:id`} component={mainContent} />
            {/*roter默认显示的地方*/}
            <Route
                exact
                path={match.url}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    )
}

export default Topics;