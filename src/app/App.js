import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Redirect to={{ pathname: '/login' }}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
