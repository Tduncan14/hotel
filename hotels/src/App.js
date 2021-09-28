import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import TopNav from './components/TopNav';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
//components
import Home from './booking/Home';
import Login from './auth/Login';
import Register  from './auth/Register';
import Dashboard from './user/Dashboard';
import DashboardSeller from './user/DashboardSeller';




// const TopNav = () => (


//    <div className="nav bg-light justify-content-between">
//     <Link className="nav-link" to="/">Home</Link>
//     <Link className="nav-link" to="/login">Login</Link>
//     <Link className="nav-link" to="/register">Register</Link>

//    </div>

// )


function App() {
  return (

 <>

      <Router>
        <TopNav/>
     < ToastContainer/>
      <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/login" component={Login}/>
   <Route exact  path="/register" component={Register}/>
   <PrivateRoute exact path="/dashboard" component = {Dashboard}/>
   <PrivateRoute exact path = "/dashboard/seller" component= {DashboardSeller}/>
   </Switch>
    </Router>
</>
  );
}

export default App;
