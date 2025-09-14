import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import AuthPage from './pages/Auth.jsx'
import LandingPage from './pages/LandingPage.jsx'
import CarbonMarketplace from './pages/MarketPlace.jsx'
import ProjectCreationPage from './pages/ProjectCreation.jsx'
import AuditorVerificationPage from './pages/AuditorVerificationPage.jsx'
import AuditorDashboard from './pages/AllProjects.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/marketplace" element={<CarbonMarketplace />} />
        <Route path="/project-creation" element={<ProjectCreationPage />} />
        <Route path="/audit" element={<AuditorVerificationPage />} />
        <Route path="/auditor" element={<AuditorDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
