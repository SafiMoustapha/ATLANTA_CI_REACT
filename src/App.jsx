import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Accueil from './pages/Accueil';
import Compte from './pages/Compte';
import Assistance from './pages/Assistance';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import AssuranceAuto from './pages/AssuranceAuto';
import AssuranceCamion from './pages/AssuranceCamion';
import AssuranceCamionnette from './pages/AssuranceCamionnette';
import AssuranceMoto from './pages/AssuranceMoto';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/assurance/auto" element={<AssuranceAuto />} />
          <Route path="/assurance/camion" element={<AssuranceCamion />} />
          <Route path="/assurance/camionnette" element={<AssuranceCamionnette />} />
          <Route path="/assurance/moto" element={<AssuranceMoto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;