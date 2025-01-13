import './App.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
