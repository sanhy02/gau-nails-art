import './index.css'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Products from './page/Products/Products.jsx'
import Home from './page/Home/Home.jsx'
import About from './page/About/About.jsx'
import Contact from './page/Contact/Contact.jsx'
import BookNow from './page/BookNow/BookNow.jsx'


function App() {

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-now" element={<BookNow />} />
        </Routes>
    </MainLayout>
    </>
  )
}

export default App
