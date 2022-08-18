import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/landing-page' element={<LandingPage />} />
        </Routes>
    </Router>
  );
}

export default App;
