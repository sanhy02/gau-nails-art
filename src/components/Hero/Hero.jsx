import './Hero.css'

function Hero({ img1, img2, img3 }) {
  return (
    <div className="body-page-container">
      <div className="body-page-content-1">
        <img src={img1} alt="" />
      </div>

      <div className="body-page-content-2">
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  )
}

export default Hero
