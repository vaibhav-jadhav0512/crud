import ListCustomerComponent from './components/ListCustomerComponent';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
        <div className="container">
          <ListCustomerComponent/>
        </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
