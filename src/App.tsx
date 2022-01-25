import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
