import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Technologies from './Components/Technologies';
import Product from './Components/Product';
import Contact from './Components/Contact';
import CompHTML from './Components/CompHTML';
import CompCSS from './Components/CompCSS';
import ReactJS from './Components/ReactJS';
import NodeJS from './Components/NodeJS';
import { myContext } from './Components/Context/DataProvider';
import { useContext } from 'react';
import Login from './Components/Login';

function App() {
  const {login}= useContext(myContext)

  return (
    <div className="App">

      {
        login ? <Navbar/> : null
      }
      <Routes>
        <Route path='/' element={login ? <Home/> : <Login/>} />
        <Route path='/tech' element={login?<Technologies /> : <Login/>} >
          <Route path="" element={<Navigate to="html" />} />
          <Route path="html" element={<CompHTML />} />
          <Route path="css" element={<CompCSS />} />
          <Route path="react" element={<ReactJS />} />
          <Route path="node" element={<NodeJS />} />
        </Route>
        <Route path='/product' element={login ? <Product /> : <Login/>} />
        <Route path='/contact' element={login ? <Contact /> : <Login/>} />
      </Routes>
    </div>
  );
}

export default App;