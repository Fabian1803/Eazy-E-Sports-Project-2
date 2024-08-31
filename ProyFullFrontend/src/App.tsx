import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './Styles';
import { HeaderStore, FooterStore, MainStore } from './Pages/Store';
import Login  from './Pages/Store/mainPages/login';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/"
          render={() => (
            <>
              <HeaderStore />
              <MainStore />
              <FooterStore />
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App



/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Customer {
  id: number;
  firstname: string;
  lastname: string;
}

function App() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    // Obtener la lista de clientes desde el backend cuando se monta el componente
    axios.get<Customer[]>('http://localhost:8080/api/customers')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching customers:', error);
      });
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.firstname} {customer.lastname}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/
