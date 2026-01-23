import React from 'react'
import './BookNow.css'

const BookNow = () => {
  return (
    <>
      <main className="book-page">
        {/* HERO */}
        <section className="book-hero">
          <h1>BOOK NOW</h1>
          <p>Reserve your luxury nail experience</p>
        </section>

        {/* FORM */}
        <section className="book-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full name" required />
              <input type="tel" placeholder="Phone number" required />
            </div>

            <div className="form-group">
              <input type="date" required />
              <input type="time" required />
            </div>

            <select>
              <option value="">Select service</option>
              <option>Nail Art</option>
              <option>Gel Nails</option>
              <option>Manicure</option>
              <option>Pedicure</option>
              <option>Combo Package</option>
            </select>

            <textarea
              placeholder="Notes (optional)"
              rows="4"
            ></textarea>

            <button type="submit">CONFIRM BOOKING</button>
          </form>
        </section>
      </main>
    </>
  )
}
export default BookNow