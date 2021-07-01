
import Header from './Header';
import Cart from './Cart';
import Admin from './Admin/Admin';
import Home from './Home';
import Indetity from './Intendity';
import Commande from './Commande';
import Payment from './Payment';
import Terminer from './Terminer';
import{BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/Admin">
          <Admin/>
        </Route>
        <Route path="/identity">
          <Indetity/>
        </Route>
        <Route path="/commande">
          <Commande/>
        </Route>
        <Route path="/payment">
          <Payment/>
        </Route>
        <Route path="/terminer">
          <Terminer/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
