import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Logasa from './pages/Logasa';
import Loguser from './pages/Loguser';
import Reguser from './pages/Reguser';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logasa" element={<Logasa />} />
        <Route path="/loguser" element={<Loguser />} />
        <Route path="/reguser" element={<Reguser/>} />

      </Routes>
    </Router>
  );
}

export default App;
