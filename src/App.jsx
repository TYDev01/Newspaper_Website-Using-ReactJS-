import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import './App.css'
import { Hero } from './components/Hero'
import { Articles } from './components/Articles'
import { Footer } from './components/Footer'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Hero />
        <Articles />
        <Footer />
        <Routes>
          <Route path='/' element />
        </Routes>
      </Router>
    </>
  )
}

export default App
