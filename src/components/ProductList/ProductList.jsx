import { useState } from 'react'
import './ProductList.css'

function ProductList({ products }) {
  const [startIndex, setStartIndex] = useState(0)
  const STEP = 4
  const [visibleCount, setVisibleCount] = useState(4)

  const handlePrev = () => {
    if (startIndex + visibleCount < products.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const handleNext = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }
  const handleShowMore = () => {
    setVisibleCount(prev =>
      Math.min(prev + STEP, products.length)
    )
  }

  const visibleProduct = products.slice(0, visibleCount)

  return (
    <>
      <div className="product-wrapper">
        <button className='arrow left' onClick={handlePrev}>
          ❮
        </button>
        <div className="product-cart">
          {visibleProduct.map((item, index) => (
            <div className="card" style={{ width: '18rem' }} key={index}>
              <img src={item.image} className="card-img-top" />
              <div className="card-body">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                <button className="btn btn-primary">Xem chi tiết</button>
              </div>
            </div>
          ))}
        </div>
        <button className='arrow left' onClick={handleNext}>
          ❯
        </button>
      </div>

      {/* 👉 NÚT XEM TẤT CẢ (mobile) */}
      {visibleCount < products.length && (
        <div className="view-all-wrapper">
          <button
            className="btn btn-outline-primary view-all-btn"
            onClick={handleShowMore}
          >
            Xem thêm
          </button>
        </div>
      )}
    </>
  )
}

export default ProductList
