import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar     from './components/Navbar'
import Footer     from './components/Footer'
import Home       from './pages/Home'
import Products   from './pages/Products'
import About      from './pages/About'
import Allocations from './pages/Allocations'
import Logistics  from './pages/Logistics'
import Contact    from './pages/Contact'
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
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&family=Archivo+Narrow:wght@400;500;600&display=swap" rel="stylesheet" />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />}        />
        <Route path="/products"   element={<Products />}    />
        <Route path="/about"      element={<About />}       />
        <Route path="/allocations" element={<Allocations />} />
        <Route path="/logistics"  element={<Logistics />}   />
        <Route path="/contact"    element={<Contact />}     />
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