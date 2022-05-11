
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Order from './components/Order';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="order" element={<Order />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
