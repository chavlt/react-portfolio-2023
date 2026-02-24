import Header from './Header'
import Footer from './Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Gallery from '../pages/Gallery'
import Project from '../pages/Project'
import LegalNotice from "../pages/LegalNotice"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
        </Routes>
        
        <Footer />
      </Router>

    </div>
  );
}

export default App;
