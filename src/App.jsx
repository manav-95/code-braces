import './App.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
