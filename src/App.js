import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
     <BrowserRouter>
     <Layout>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
     </Layout>
     </BrowserRouter>
  );
}

export default App;
