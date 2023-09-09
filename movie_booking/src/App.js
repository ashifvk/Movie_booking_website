import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Reg from './Reg';
import Users from './Users';
import Addshows from './Addshows';
import Show from './Show';
import Edit from './Edit';
import ContactusView from './ContactusView';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/nav' element={<Nav/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/reg' element={<Reg/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/addshow' element={<Addshows/>}/>
    <Route path='/show' element={<Show/>}/>
    <Route path='/edit/:showid' element={<Edit/>}/>
    <Route path='/contactusView' element={<ContactusView/>}/>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
