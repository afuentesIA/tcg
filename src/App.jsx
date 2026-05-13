import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar    from './components/Navbar'
import Footer    from './components/Footer'
import Home      from './pages/Home'
import Products  from './pages/Products'
import About     from './pages/About'
import Mandate   from './pages/Mandate'
import Logistics from './pages/Logistics'
import Contact   from './pages/Contact'
import './index.css'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollReset />
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />}      />
        <Route path="/products"  element={<Products />}  />
        <Route path="/about"     element={<About />}     />
        <Route path="/mandate"   element={<Mandate />}   />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/contact"   element={<Contact />}   />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
