import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import PostalCode from './pages/PostalCode';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/PostalCode' element={<PostalCode />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
