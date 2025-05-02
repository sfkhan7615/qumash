"use client"

import { useState } from "react"

export default function Footer() {
  // State for newsletter email input
  const [email, setEmail] = useState("")

  // Handle input change
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  // Handle form submit
  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Perform the subscription action here
    console.log("Email subscribed:", email)
    // Clear the input after submission
    setEmail("")
  }

  return (
    <footer id="footer">
      <div className="newsletter-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 w-100 d-flex justify-content-start align-items-center">
              <div className="display-table">
                <div className="display-table-cell footer-newsletter">
                  <div className="section-header text-center">
                    <label className="h2"><span>sign up for </span>newsletter</label>
                  </div>
                  <form action="#" method="post" onSubmit={handleSubmit}>
                    <div className="input-group">
                      <input
                        type="email"
                        className="input-group__field newsletter__input"
                        name="EMAIL"
                        placeholder="Email address"
                        required
                        value={email} // Bind the email state to the input field
                        onChange={handleEmailChange} // Handle input changes
                      />
                      <span className="input-group__btn">
                        <button type="submit" className="btn newsletter__submit" name="commit" id="Subscribe">
                          <span className="newsletter__submit-text--large">Subscribe</span>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 d-flex justify-content-end align-items-center">
              <div className="footer-social">
                <ul className="list--inline site-footer__social-icons social-icons">
                  <li><a className="social-icons__link" href="#" target="_blank" title="Facebook"><i className="icon icon-facebook"></i></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" title="Twitter"><i className="icon icon-twitter"></i><span className="icon__fallback-text">Twitter</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" title="Pinterest"><i className="icon icon-pinterest"></i><span className="icon__fallback-text">Pinterest</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" title="Instagram"><i className="icon icon-instagram"></i><span className="icon__fallback-text">Instagram</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" title="Tumblr"><i className="icon icon-tumblr-alt"></i><span className="icon__fallback-text">Tumblr</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" title="YouTube"><i className="icon icon-youtube"></i><span className="icon__fallback-text">YouTube</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" title="Vimeo"><i className="icon icon-vimeo-alt"></i><span className="icon__fallback-text">Vimeo</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                <h4 className="h4">Quick Shop</h4>
                <ul>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Kids</a></li>
                  <li><a href="#">Sportswear</a></li>
                  <li><a href="#">Sale</a></li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                <h4 className="h4">Informations</h4>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Terms &amp; condition</a></li>
                  <li><a href="#">My Account</a></li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                <h4 className="h4">Customer Services</h4>
                <ul>
                  <li><a href="#">Request Personal Data</a></li>
                  <li><a href="#">FAQ's</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Orders and Returns</a></li>
                  <li><a href="#">Support Center</a></li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                <h4 className="h4">Contact Us</h4>
                <ul className="addressFooter">
                  <li><i className="icon anm anm-map-marker-al"></i>
                    <p>55 Gallaxy Enque,<br />2568 steet, 23568 NY</p>
                  </li>
                  <li className="phone"><i className="icon anm anm-phone-s"></i>
                    <p>(440) 000 000 0000</p>
                  </li>
                  <li className="email"><i className="icon anm anm-envelope-l"></i>
                    <p>sales@yousite.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
                <span>Made in India with &#10084;</span> <a href="https://qumash.in">All rights reserved for Qumash</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
