// import logo from '../public/brandlogo.png';
import Nav from './components/NavBar'
import Request from './components/Request'
import About from './components/About'
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <About/>
        <div className='Request-list'>
          <Request/>
          <Request/>
          <Request/>
          <Request/>
          <Request/>
          <Request/>
          <Request/>
          <Request/>
          <Request/>
          <Request/>
          <Request/>
          <Request/>
        </div>
        
    </div>
  );
}

export default App;
