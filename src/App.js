import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div >
      <Navbar/>
     <Outlet/>
    </div>
  );
}

export default App;
