import Request from './components/Request'
import About from './components/About'
import Nav from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import AddRequest from './components/AddRequest'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    {/* //     <Nav/>
    //     <About/>
    //     <div className='Request-list'>
    //       <Request/>
    //       <Request/>
    //       <Request/>
    //       <Request/>
    //       <Request/>
    //       <Request/>
    //       <Request/>
    //       <Request/>
    //       <Request/>
    //       <Request/>
    //       <Request/>
    //       <Request/>
    //     </div> */}
        <Router>
            <Switch>
            <Route path="/" exact component={About} />
            <Route path="/nav" exact component={Nav} />
            <Route path="/request" exact component={Request} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Register} />
            <Route path="/addrequest" exact component={AddRequest} />
        </Switch>
        </Router>
    </div>
    
  );
}

export default App;