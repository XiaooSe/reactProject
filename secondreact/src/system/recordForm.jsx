import React from 'react';
import * as RecordsAPI from '../utils/recorsApi';

class RecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            title: '',
            amount: ''
        }
    }
   vaild = ()=> {
      return this.state.date && this.state.title && this.state.amount;
    };
    handleChange(event) {
        let name, obj;
        name = event.target.name;
        this.setState((
            obj = {},
                obj["" + name] = event.target.value,
                obj
        ))
    };

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            date: this.state.date,
            title: this.state.title,
            amount: Number.parseInt(this.state.amount, 0)
        };
        console.log(data);
        RecordsAPI.create(data).then(
            response => {
                console.log(response.data);
                this.props.handleNewRecord(response.data);
                this.setState({
                    date: "",
                    title: "",
                    amount: ""
                })
            }
        ).catch(
            error => console.log(error.message)
        )
    };

    componentDidMount() {

    }

    render() {
        return (
                <form className="form-inline mb-10" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group mr-10">
                        <input type="text" className="form-control" onChange={ this.handleChange.bind(this) }  placeholder="Date" name="date" value={ this.state.date } />
                    </div>
                    <div className="form-group mr-10">
                        <input type="text" className="form-control" onChange={ this.handleChange.bind(this) }  placeholder="Title" name="title"  value={ this.state.title }/>
                    </div>
                    <div className="form-group mr-10">
                        <input type="text" className="form-control" onChange={ this.handleChange.bind(this) }  placeholder="Amount" name="amount" value={ this.state.amount } />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={ !this.vaild() }>Create Record</button>
                </form>
        )
    }
}

export default RecordForm;