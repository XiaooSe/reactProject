import React from 'react';

class AcoountBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
           <div className="col-lg-4 col-md-4 col-xs-4 diInline">
               <div className="card">
                   <div className={`card-header bg-${this.props.type}`}>{this.props.text}</div>
                   <div className="card-body">
                       {this.props.amount}
                   </div>
               </div>
           </div>
        )
    }
}

export default AcoountBox;