import './Navbar.css'

function Navbar({ logo }) {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-center">
        <p className="nav-bar-title">Bích Ngọc Nails</p>
      </div>

      <div className="nav-right">
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>

        <ul className="nav-item-menu">
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
