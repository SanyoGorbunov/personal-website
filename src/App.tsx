import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NumbersPage from './pages/NumbersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AboutPage/>} />
        <Route path='/numbers' element={<NumbersPage/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
