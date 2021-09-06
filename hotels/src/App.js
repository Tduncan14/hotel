import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './booking/Home';
import Login from './auth/Login';
import Register  from './auth/Register';
import TopNav from './components/TopNav';


// const TopNav = () => (


//    <div className="nav bg-light justify-content-between">
//     <Link className="nav-link" to="/">Home</Link>
//     <Link className="nav-link" to="/login">Login</Link>
//     <Link className="nav-link" to="/register">Register</Link>

//    </div>

// )


function App() {
  return (
    <Router>
      {TopNav()}
      <Switch>
   <Route exact path="/" component={Home}/>
   <Route path="/login" component={Login}/>
   <Route path="/register" component={Register}/>
   </Switch>
    </Router>
  );
}

export default App;
