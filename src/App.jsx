import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Accueil from './pages/Accueil';
import Compte from './pages/Compte';
import Assistance from './pages/Assistance';


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/compte" element={<Compte />} />
          <Route path="/assistance" element={<Assistance />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;