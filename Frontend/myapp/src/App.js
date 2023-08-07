// import logo from '../public/brandlogo.png';
import Request from './components/Request'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'

import Nav from './components/NavBar'
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
        </Switch>
        </Router>
    </div>
    
  );
}

export default App;
