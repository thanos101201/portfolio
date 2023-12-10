import About from './Components/AboutComponent';
import Contact from './Components/ContactComponent';
import Home from './Components/Home';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
