import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import PostalCode from './pages/PostalCode';
import Items from './pages/Items';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/PostalCode' element={<PostalCode />} />
      <Route path='/Items' element={<Items />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
