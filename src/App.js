import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tablero from './componentes/Tablero';
import NavBar from './componentes/Navbar';
import Home from './componentes/Home';
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import Authors from './componentes/Authors';
import { useState } from 'react';
import User_posts from './User_posts';



function App() {
   const [user_activo, setUser_activo]=useState('');
  return (
    <div className="conatainer-fluid bg-light">
              
       <Router>
       <NavBar />
        <Routes>
          <Route path="/albums" element={<Tablero />} />
          <Route path='authors' element={<Authors />} />
          <Route path='/User_posts' element={< User_posts user_activo={user_activo} setUser_activo={setUser_activo}/>} />
          <Route path='/' element={<Home />} />
        </Routes>
       </Router>     
     
    </div>
  );
}

export default App;
