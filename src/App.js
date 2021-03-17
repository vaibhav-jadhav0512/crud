import ListCustomerComponent from './components/ListCustomerComponent';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateCustomerComponent from './components/CreateCustomerComponent';



function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListCustomerComponent}></Route>
                <Route path="/customers" component={ListCustomerComponent}></Route>
                <Route path="/addcustomer" component={CreateCustomerComponent}></Route>
              </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
    
  );
}

export default App;
