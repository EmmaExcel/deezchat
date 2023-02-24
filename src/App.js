
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import{BrowserRouter as Router ,Navigate,Route ,Routes} from "react-router-dom"
import { useContext } from 'react';
import {AuthContext} from './context/AuthContext'

function App() {

  const {currentUser} =useContext(AuthContext);

  const ProtectedRoute=({children})=>{
    if(!currentUser){
       return <Navigate to="/login"/>
    }

    return children
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/"  element={<ProtectedRoute>
            <Home/>
          </ProtectedRoute>} />
          <Route path="login"  element={<Login/>} />
          <Route path="/register"  element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
