import React from 'react'
import { products } from '../../data/products'
import { useSearchParams } from 'react-router-dom'
import './Products.css'

const Products = () => {
  // searchParams dùng để lấy dữ liệu trên URL
  const [searchParams] = useSearchParams()
  // Lấy keyword từ ?q= , nếu không có thì gán chuỗi rỗng
  const keyword = searchParams.get('q') || ''
  // Lọc sản phẩm theo keyword
  const filteredProducts = products.filter(item =>
    // So khớp keyword với title hoặc desc (không phân biệt hoa thường)
    item.title.toLowerCase().includes(keyword.toLowerCase()) ||
    item.desc.toLowerCase().includes(keyword.toLowerCase())
  )

  return (
    <main className="products-page">
      {/* HERO */}
      <section className="products-hero">
        <h1>PRODUCTS</h1>
        {/* Chỉ hiển thị khi có keyword */}
        {keyword && (
          <p>
            Kết quả tìm kiếm cho: <b>{keyword}</b>
          </p>
        )}
      </section>

      {/* DANH SÁCH SẢN PHẨM */}
      <section className="products-list">
        {/* Nếu không có kết quả */}
        {filteredProducts.length === 0 ? (
          <p className="no-result">
            Không tìm thấy sản phẩm phù hợp
          </p>
        ) : (
          // Render danh sách sản phẩm đã lọc
          filteredProducts.map((item, index) => (
            <div className="product-card" key={index}>

              <div className="product-img">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="product-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

            </div>
          ))
        )}
      </section>
    </main>
  )
}

export default Products
