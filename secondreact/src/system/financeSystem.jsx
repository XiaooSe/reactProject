import React from 'react';
import Record from './record';
import RecordForm from './recordForm';
import AccountBox from './accountBox';
import * as RecordsAPI from '../utils/recorsApi';



class FinaceSystem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            records: []
        }
    }
    addRecord(record) {
        this.setState({
            error: null,
            isLoaded: true,
            records: [
                ...this.state.records,
                record
            ]
        })
    }
    deleteRecord(record) {
        const recordIndex = this.state.records.indexOf(record);
        const newRecords = this.state.records.filter( (item, index) => index !== recordIndex);
        this.setState({
            records: newRecords
        });
    };
    updateRecord(record, data) {
        const recordIndex = this.state.records.indexOf(record);
        const newRecords = this.state.records.map( (item, index) => {
            if(index !== recordIndex) {
                // This isn't the item we care about - keep it as-is
                return item;
            }

            // Otherwise, this is the one we want - return an updated value
            return {
                ...item,
                ...data
            };
        });
        this.setState({
            records: newRecords
        });

    };

    credits() {
        let credits = this.state.records.filter((record) => {
            return record.amount >= 0;
        })

        return credits.reduce((prev, curr) => {
            return prev + Number.parseInt(curr.amount, 0);

        },0)
    };

    debits() {
        let credits = this.state.records.filter((record) => {
            return record.amount < 0;
        })

        return credits.reduce((prev, curr) => {
            return prev + Number.parseInt(curr.amount, 0);

        },0)
    };

    balance() {
        return this.credits() + this.debits();
    }

    componentDidMount() {
        console.log(RecordsAPI.api);
        RecordsAPI.getAll().then(
            response => this.setState({
                records: response.data,
                isLoaded: true
            })
        ).catch(
            error => this.setState({
                isLoaded: true,
                error
            })
        )
    }

    render() {
        const { error, isLoaded, records } = this.state;
        let recordComponent;
        if(error) {
            recordComponent = <div>Error: { error.message}</div>
        } else if (!isLoaded) {
            recordComponent =  <div>Loading....</div>
        } else {
            recordComponent = (
                <div id="FinaceSystem">

                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {records.map((record) =>
                            (<Record
                                key={record.id}
                                record={record}
                                handleEditRecord={this.updateRecord.bind(this)}
                                handleDeleteRecord={this.deleteRecord.bind(this)}
                            />)
                        )}
                        </tbody>
                    </table>
                </div>
            )
        }
        return (
            <div>
                <h2>Records</h2>
                <div className="row mb-10">
                    <AccountBox text="Credit" type="success" amount={this.credits()}/>
                    <AccountBox text="Debit" type="danger" amount={this.debits()}/>
                    <AccountBox text="Banlance" type="info" amount={this.balance()}/>
                </div>
                <RecordForm  handleNewRecord={this.addRecord.bind(this)} />
                { recordComponent }
            </div>
            )



    }
}

export default FinaceSystem;