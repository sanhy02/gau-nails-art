import React from 'react'
import heroImg from '../../assets/mong15.jpg'
import product12 from '../../assets/mong12.jpg'
import product13 from '../../assets/mong13.jpg'
import product14 from '../../assets/mong14.jpg'
import './About.css'

const About = (products) => {
  return (
    <>
      <main className="about-page">

        {/* HERO */}
        <section className="about-hero">
          <img src={heroImg} alt="About" />
          <h1>GAU NAILS ART</h1>
        </section>

        {/* QUOTE */}
        <section className="about-quote">
          <p>
            “Vẻ đẹp không phải để ràng buộc,
            mà để thể hiện cá tính riêng.”
          </p>
          <span>— Gau Nails Art</span>
        </section>

        {/* STORY – DARK */}
        <section className="about-story dark">
          <h2>KHÔNG RÀNG BUỘC</h2>
          <p>
            Gau Nails Art được sinh ra từ mong muốn mang đến
            sự tự do trong cái đẹp. Mỗi bộ nail là một câu chuyện,
            một cá tính, một tuyên ngôn riêng.
          </p>
        </section>

        {/* GALLERY */}
        <section className="about-gallery">
          <img src={product12} />
          <img src={product13} />
          <img src={product14} />
        </section>

      </main>
    </>
  )
}
export default About
