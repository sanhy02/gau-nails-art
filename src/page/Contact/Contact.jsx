import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <h1>CONTACT</h1>
        <p>Gau Nails Art – Luxury Nail Studio</p>
      </section>

      {/* INFO */}
      <section className="contact-info">
        <div className="info-item">
          <h3>Address</h3>
          <p>123 Nguyen Trai, District 1, Ho Chi Minh City</p>
        </div>

        <div className="info-item">
          <h3>Phone</h3>
          <p>0855 654 656</p>
        </div>

        <div className="info-item">
          <h3>Email</h3>
          <p>gaunailsart@gmail.com</p>
        </div>
      </section>

      {/* FORM */}
      <section className="contact-form">
        <h2>Send us a message</h2>

        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message" rows="5"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  )
}
export default Contact