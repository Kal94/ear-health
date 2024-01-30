import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import WhyUs from './pages/WhyUs/WhyUs';
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/why-us' element={<WhyUs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
