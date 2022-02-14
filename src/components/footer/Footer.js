/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css'

function Footer() {
  return (
    <><div id="cc">
    <p>Copy Right Reserved @2020</p>
  </div>
  <div className="footer-container">
    <div className="footer-1">
      <h3>About Us</h3>
      <a href="#">Blog</a>
      <a href="#">Creators</a>
      <a href="#">Staff</a>
      <a href="#">Investors</a>
    </div>
    <div className="footer-2">
      <h3>Contact Us</h3>
      <a href="#">Jobs</a>
      <a href="#">Support</a>
      <a href="#">Contact</a>
      <a href="#">Internship</a>
    </div>
    <div className="footer-3">
      <h3>Social Media</h3>
      <a href="#">Facebook</a>
      <a href="#">Youtube</a>
      <a href="#">Instagram</a>
      <a href="#">Discord</a>
    </div>
    <div className="sub">
      <h3>Subscribe to Our Newsletter</h3>
      <div className="sub-box">
      <input type="Email" placeholder="Type your Email" id="box" />
      <input type="submit" value="Sign Up" id="signup-button" />
      </div>
    </div>
  </div></>
  )
}

export default Footer
