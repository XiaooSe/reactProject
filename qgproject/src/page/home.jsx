import React from 'react';

import { connect } from "react-redux";
import * as Action from '$redux/actions';
import { bindActionCreators } from 'redux';

class Home extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            test:'hello'
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
	render() {
		return (
			<div className="home">
                <p>Home</p>
                <div>
                    <h1 className="text-center mt-5">{this.props.count}</h1>
                    <p className="text-center">
                        <button onClick={() => this.numberAdd()} className="btn btn-primary mr-2">增加 合并GIT</button>
                    </p>                    
                </div>
            </div>
		)
    }
    numberAdd(){
        this.props.addNumberActions.addNumber(3)
    }

}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNumberActions:bindActionCreators(Action,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
