import React, { useState, useEffect } from 'react'
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

  // Phân loại: móng tay (tay) và móng chân (chan)
  const handProducts = filteredProducts.filter(p => p.category === 'tay')
  const footProducts = filteredProducts.filter(p => p.category === 'chan')

  // Load more / pagination state (show 6 items per group initially)
  const PAGE_SIZE = 6
  const [handLimit, setHandLimit] = useState(PAGE_SIZE)
  const [footLimit, setFootLimit] = useState(PAGE_SIZE)

  // Reset limits when user changes search keyword
  useEffect(() => {
    setHandLimit(PAGE_SIZE)
    setFootLimit(PAGE_SIZE)
  }, [keyword])

  return (
    <main className="products-page">
      {/* HERO */}
      <section className="products-hero">
        <h1>CÁC MẪU MÓNG MÀ BẠN CÓ THỂ SẼ THÍCH</h1>
        {/* Chỉ hiển thị khi có keyword */}
        {keyword && (
          <p>
            Kết quả tìm kiếm cho: <b>{keyword}</b>
          </p>
        )}
      </section>

      {/* DANH SÁCH SẢN PHẨM */}
      <section className="products-list">
        {/* Nếu không có kết quả chung */}
        {filteredProducts.length === 0 ? (
          <p className="no-result">Không tìm thấy sản phẩm phù hợp</p>
        ) : (
          <>
            {/* Móng tay */}
            {handProducts.length > 0 && (
              <div className="products-group">
                <h2 className="group-title">Móng tay</h2>
                <div className="group-grid">
                  {handProducts.slice(0, handLimit).map(item => (
                    <div className="product-card" key={item.id}>
                      <div className="product-img">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="product-info">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {handProducts.length > handLimit && (
                  <div style={{ textAlign: 'center', marginTop: 18 }}>
                    <button className="load-more-btn" onClick={() => setHandLimit(prev => prev + PAGE_SIZE)}>
                      Xem thêm
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Móng chân */}
            {footProducts.length > 0 && (
              <div className="products-group">
                <h2 className="group-title">Móng chân</h2>
                <div className="group-grid">
                  {footProducts.slice(0, footLimit).map(item => (
                    <div className="product-card" key={item.id}>
                      <div className="product-img">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="product-info">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {footProducts.length > footLimit && (
                  <div style={{ textAlign: 'center', marginTop: 18 }}>
                    <button className="load-more-btn" onClick={() => setFootLimit(prev => prev + PAGE_SIZE)}>
                      Xem thêm
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  )
}

export default Products
