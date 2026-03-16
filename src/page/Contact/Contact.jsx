import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <h1>LIÊN HỆ</h1>
        <p>Gau Nails Art – Luxury Nail Studio</p>
      </section>

      {/* INFO */}
      <section className="contact-info">
        <div className="info-item">
          <h3>ĐỊA CHỈ</h3>
          <p>123 Nguyen Trai, District 1, Ho Chi Minh City</p>
        </div>

        <div className="info-item">
          <h3>ĐIỆN THOẠI</h3>
          <p>0855 654 656</p>
        </div>

        <div className="info-item">
          <h3>EMAIL</h3>
          <p>gaunailsart@gmail.com</p>
        </div>
      </section>

      {/* FORM */}
      <section className="contact-form">
        <h2>Gửi cho chúng tôi một tin nhắn</h2>

        <form>
          <input type="text" placeholder="Tên của bạn" />
          <input type="email" placeholder="Email của bạn" />
          <textarea placeholder="Tin nhắn của bạn" rows="5"></textarea>

          <button type="submit">Gửi Tin Nhắn</button>
        </form>
      </section>
    </main>
  )
}
export default Contact