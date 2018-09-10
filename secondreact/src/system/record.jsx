import React from 'react';
import PropTypes from 'prop-types';
import * as RecordsAPI from '../utils/recorsApi';

class Record extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
    }

    componentDidMount() {



    }
    handleToggle() {
        this.setState({
            edit: !this.state.edit
        });
    };
    handleEdit(event) {
        event.preventDefault();
        const record = {
            date: this.refs.date.value,
            title: this.refs.title.value,
            amount: Number.parseInt(this.refs.amount.value, 0)
        }
        RecordsAPI.update(this.props.record.id, record).then(
            response => {
                this.setState({edit: false});
                this.props.handleEditRecord(this.props.record, response.data);
            }
        ).catch(
            error => console.log(error.message)
        )

    };

    handleDelete(event) {
        event.preventDefault();
        RecordsAPI.remove(this.props.record.id).then(
            response => this.props.handleDeleteRecord(this.props.record)
        ).catch(
            error => console.log(error.message)
        )
    };

    recordRow() {
        return (
            <tr>
                <td>{ this.props.record.date }</td>
                <td>{ this.props.record.title }</td>
                <td>{ this.props.record.amount }</td>
                <td>
                    <button className="btn btn-info mr-10" onClick={ this.handleToggle.bind(this) }>Edit</button>
                    <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
                </td>
            </tr>
        )
    };

    recordForm() {
        return (
            <tr>
                <td><input type="text" className="form-control" ref="date" defaultValue= {this.props.record.date} ref="date" /></td>
                <td><input type="text" className="form-control" ref="title" defaultValue= {this.props.record.title} ref="title" /></td>
                <td><input type="text" className="form-control" ref="amount" defaultValue= {this.props.record.amount} ref="amount" /></td>
                <td>
                    <button className="btn btn-info mr-10" onClick={this.handleEdit.bind(this)}>Update</button>
                    <button className="btn btn-danger" onClick={ this.handleToggle.bind(this) }>Cancer</button>
                </td>
            </tr>
        )
    };
    render() {
        if(this.state.edit) {
            return this.recordForm();
        } else {
          return  this.recordRow();
        }

    }
}

export default Record;

Record.propTypes = {
    id: PropTypes.number,
    date: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number
}