import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We provide high-quality services to help your business grow.</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: contact@yourdomain.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>

    </>
  )
}
