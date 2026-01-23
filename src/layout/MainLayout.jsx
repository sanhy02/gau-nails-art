import Navbar from '../components/navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import logo from '../assets/logo.png'

function MainLayout({ children }) {
  return (
    <>
      <Navbar logo={logo} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
