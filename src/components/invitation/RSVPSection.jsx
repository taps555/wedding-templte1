"use client"

import { useState } from "react"
import "./RSVPSection.css"

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: 1,
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the data to your backend API
    console.log("Form submitted:", formData)
    // For demo purposes, we'll just show a success message
    setSubmitted(true)
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        attending: "yes",
        guests: 1,
        message: "",
      })
    }, 5000)
  }

  return (
    <section id="rsvp" className="section rsvp-section">
      <div className="container">
        <div className="section-header">
          <h2 className="cursive section-title">RSVP</h2>
          <p className="section-subtitle">Please let us know if you can make it</p>
        </div>

        <div className="rsvp-container">
          {submitted ? (
            <div className="thank-you-message">
              <h3>Thank You!</h3>
              <p>Your RSVP has been submitted successfully. We look forward to celebrating with you!</p>
            </div>
          ) : (
            <form className="rsvp-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label>Will you attend?</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === "yes"}
                      onChange={handleChange}
                    />
                    <span>Joyfully Accept</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === "no"}
                      onChange={handleChange}
                    />
                    <span>Regretfully Decline</span>
                  </label>
                </div>
              </div>

              {formData.attending === "yes" && (
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                  </select>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="message">Message to the Couple (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your wishes or message"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn">
                Send RSVP
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default RSVPSection
