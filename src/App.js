import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <Router>
      <MessengerCustomerChat pageId="753206974730152" appId="715051529518972" />
      <Home />
    </Router>
  );
}

export default App;
