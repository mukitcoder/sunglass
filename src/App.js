import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Products from './Pages/Home/Products/Products';
import Product from './Pages/Home/Product/Product';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <PrivateRoute path="/purchase">
            <Purchase/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
            <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
