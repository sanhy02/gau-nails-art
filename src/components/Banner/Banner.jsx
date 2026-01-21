import './Banner.css'

function Banner({ title, buttonText }) {
  return (
    <div className="page-banner">
      <h1>{title}</h1>
      <button>{buttonText}</button>
    </div>
  )
}

export default Banner
