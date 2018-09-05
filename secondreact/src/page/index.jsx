import React from 'react';
import { Button } from 'antd';

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div id="index">
                这是Index页面
                <Button type="primary" onClick={() => this.location()}>Primary</Button>
            </div>
        )
    }
    location(){

        this.props.history.push({pathname: '/main/Home'})
    }
}

export default Index;