import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar({ logo }) {
  // State lưu từ khóa người dùng nhập
  const [keyword, setKeyword] = useState('')
  // Hook dùng để chuyển trang
  const navigate = useNavigate()
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
