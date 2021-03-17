import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class ListCustomerComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            customers : []
        }

        this.addCustomer = this.addCustomer.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res)=>{
            this.setState({customers : res.data});
        });
    }

    addCustomer(){
        this.props.history.push('/addcustomer');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Customers List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addCustomer}>Add customer</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.state.customers.map(
                            customer =>
                            <tr key = {customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.address}</td>
                                <td>{customer.mobile}</td>
                            </tr>
                            )
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCustomerComponent;