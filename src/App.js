import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Login_success from './components/Login_success';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/Login_success' element={<Login_success/>}/>

          
          
          
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
