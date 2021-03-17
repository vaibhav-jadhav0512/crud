import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class CreateCustomerComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            // id : '',
            name : '',
            address : '',
            mobile : ''
        }
        // this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
    }
    // changeIdHandler=(event)=>{
    //     this.setState({id: event.target.value});
    // }
    changeNameHandler=(event)=>{
        this.setState({name: event.target.value});
    }
    changeAddressHandler=(event)=>{
        this.setState({address: event.target.value});
    }
    changeMobileHandler=(event)=>{
        this.setState({mobile: event.target.value});
    }
    saveCustomer=(e)=>{
        e.preventDefault();
        let customer = {name : this.state.name, address : this.state.address, mobile : this.state.mobile};
        console.log('customer => ' + JSON.stringify(customer));

        CustomerService.createCustomer(customer).then(res =>{
            this.props.history.push('/addcustomer');
        });
    }
    cancel(){
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Customer</h3>
                            <div className="card-body">
                                <form>
                                    {/* <div className="form-group">
                                    <label>Id:</label>
                                    <input placeholder="Id" name="id" className="form-control" value={this.state.id} onChange={this.changeIdHandler}/>
                                    </div> */}
                                    <div className="form-group">
                                    <label>Name:</label>
                                    <input placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                    <label>Address:</label>
                                    <input placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>
                                    <div className="form-group">
                                    <label>Mobile:</label>
                                    <input placeholder="Mobile" name="mobile" className="form-control" value={this.state.mobile} onChange={this.changeMobileHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveCustomer}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCustomerComponent;