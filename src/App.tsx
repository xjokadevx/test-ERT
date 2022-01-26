import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
// import { GlobalStyle } from './styles/GlobalStyle'
// import { Greetings } from './components/Greetings'
import Home from './pages/HomePage/Home';
import NotFound from './pages/NotFound/NotFound';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<NotFound />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
