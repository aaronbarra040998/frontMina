import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Logasa from './pages/Logasa';
// import Loguser from './pages/Loguser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logasa" element={<Logasa />} />
        {/* <Route path="/loguser" element={<Loguser />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
