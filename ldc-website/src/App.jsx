import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Headroom from 'react-headroom'
import Hero from './components/Hero'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Layout from './Layout'
import NotFound from './pages/404NFPage'
import TeamPage from './pages/TeamPage'
import FAQPage from './pages/FAQPage'
import SponsorPage from './pages/SponsorPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (
    <>
    {/* bg-gradient-to-b from-blue-50 to-orange-50 */}
      <div className='text-purple-950 font-Mode'>
        
        <Router>
          <Routes>
            
            <Route element={<Layout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/About' element={<AboutPage />} />
              <Route path='/404' element={<NotFound />} />
              <Route path='/Team' element={<TeamPage />} />
              <Route path='/FAQ' element={<FAQPage />} />
              <Route path='/Sponsors' element={<SponsorPage />} />
              <Route path='/Register' element={<RegisterPage />} />
            </Route>

          </Routes>
        </Router>
        
      </div>
    </>
  )
}

export default App
