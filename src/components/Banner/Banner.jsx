import { Link } from 'react-router-dom'
import './Banner.css'

function Banner({ title, buttonText }) {
  return (
    <div className="page-banner">
      <h1>{title}</h1>
      <Link to="/book-now"><button>{buttonText}</button></Link>
    </div>
  )
}

export default Banner
