import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar({ logo }) {
  // State lưu từ khóa người dùng nhập
  const [keyword, setKeyword] = useState('')
  // Hook dùng để chuyển trang
  const navigate = useNavigate()
  const location = useLocation()
  const lastScroll = useRef(0)

  useEffect(() => {
    const mobileBreakpoint = 992
    // only apply on mobile and for specific paths
    const allowedPaths = ['/', '/products', '/contact', '/book-now']
    if (window.innerWidth > mobileBreakpoint) return
    if (!allowedPaths.includes(location.pathname)) return

    const handler = () => {
      const current = window.scrollY || window.pageYOffset
      const nav = document.querySelector('.nav-bar')
      if (!nav) return

      if (current > lastScroll.current && current > 50) {
        // scrolling down -> hide
        nav.classList.add('nav-hidden')
      } else {
        // scrolling up -> show
        nav.classList.remove('nav-hidden')
      }
      lastScroll.current = current
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [location.pathname])
  // Hàm xử lý khi click Search hoặc nhấn Enter
  const handleSearch = () => {
    // Nếu keyword rỗng hoặc chỉ có khoảng trắng thì không làm gì
    if (!keyword.trim()) return
    // Điều hướng sang trang Products + gắn query string ?q=
    navigate(`/products?q=${keyword}`)
    // Reset ô input sau khi search
    setKeyword('')
  }

  return (
    <div className="nav-bar">
      {/* Logo – click về trang Home */}
      <div className="nav-left">
        <Link className='nav-link' to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* Tên thương hiệu */}
      <div className="nav-center">
        <p className="nav-bar-title">Gấu Nails Art</p>
      </div>

      <div className="nav-right">

        {/* Ô tìm kiếm */}
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search..."

            // Input được điều khiển bởi state keyword
            value={keyword}

            // Khi gõ → cập nhật keyword
            onChange={(e) => setKeyword(e.target.value)}

            // Nhấn Enter → search
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />

          {/* Click nút Search */}
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Menu điều hướng */}
        <ul className="nav-item-menu">
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/products">Products</Link>
          <Link className='nav-link' to="/about">About</Link>
          <Link className='nav-link' to="/contact">Contact</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
