import logo from './logo.svg';
import './App.css';
import NavBar from './E-commerce/navBar';
import { Route, Routes } from 'react-router-dom';
import Home from './E-commerce/Pages/Home';
import Shoes from './E-commerce/Pages/Shoes';
import Dresses from './E-commerce/Pages/Dresses';
import Bags from './E-commerce/Pages/Bags';
import Shirts from './E-commerce/Pages/Shirts';

function App() {
  return (
    <div className='font-fashionfairplay:'>
      <NavBar/>
    <Routes>
      <Route path='/' exact Component={Home}></Route>
      <Route path='/Shoes' exact Component={Shoes}></Route>
      <Route path='/Dresses' exact Component={Dresses}></Route>
      <Route path='/Bags' exact Component={Bags}></Route>
      <Route path='/Shirts' exact Component={Shirts}></Route>      
    </Routes>  
    </div>
  );
}

export default App;
