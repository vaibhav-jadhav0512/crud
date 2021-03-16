import axios from 'axios';


const URL = "http://localhost:8080/api/v1/customers";


class CustomerService{
        getCustomers(){
            return axios.get(URL);
        }
}


export default new CustomerService();