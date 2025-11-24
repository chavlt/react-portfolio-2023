import Header from './Header'
import Footer from './Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Gallery from '../pages/Gallery'
import Project from '../pages/Project';






function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects/:projectId" element={<Project />} />
        </Routes>
        
        <Footer />
      </Router>

    </div>
  );
}

export default App;
