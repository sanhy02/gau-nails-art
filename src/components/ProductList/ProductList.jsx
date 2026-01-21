import { useState } from 'react'
import './ProductList.css'

function ProductList({ products }) {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 4

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

  const visibleProduct = products.slice(
    startIndex,
    startIndex + visibleCount
  )

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
              <button className="btn btn-primary">Xem thêm</button>
            </div>
          </div>
        ))}
      </div>
        <button className='arrow left' onClick={handleNext}>
          ❯
        </button>
      </div>
    </>
  )
}

export default ProductList
