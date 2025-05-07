"use client"

import { useState } from "react";

export default function ContactPage() {
  // State for form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Handler for form input changes
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // State for dynamic contact information
  const contactInfo = {
    address: "55 Gallaxy Enque, 2568 Street, 23568 NY",
    phone: "(440) 000 000 0000",
    email: "sales@yousite.com",
    hours: {
      weekdays: "Mon - Sat: 9am - 11pm",
      sunday: "Sunday: 11am - 5pm"
    },
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com", icon: "facebook" },
      { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
      { platform: "Instagram", url: "https://instagram.com", icon: "instagram" },
      { platform: "YouTube", url: "https://youtube.com", icon: "youtube" }
    ]
  };

  // Submit the form
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    // Send the form data to your backend or API
  };

  return (
    <div className="contact-template">
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper"><h1 className="page-width">Contact Us</h1></div>
        </div>
      </div>
      <div className="map-section map">
        {/* Google Map dynamically injected here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=" 
          height="350" 
          allowFullScreen 
          title="Our store"
        ></iframe>
        <div className="container">
          <div className="row">
            <div className="map-section__overlay-wrapper">
              <div className="map-section__overlay">
                <h3 className="h4">Our store</h3>
                <div className="rte-setting">
                  <p>{contactInfo.address}</p>
                  <p>{contactInfo.hours.weekdays}<br />{contactInfo.hours.sunday}</p>
                </div>
                <p><a href={`https://maps.google.com/?daddr=${contactInfo.address}`} className="btn btn--secondary btn--small" target="_blank">Get directions</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 mb-4">
            <h2>Drop Us A Line</h2>
            <p>Lorem Ipsum is a placeholder text used in the printing industry...</p>
            <div className="formFeilds contact-form form-vertical">
              <form onSubmit={handleSubmit} id="contact_form" className="contact-form">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input 
                        type="text" 
                        id="ContactFormName" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input 
                        type="email" 
                        id="ContactFormEmail" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input 
                        type="tel" 
                        id="ContactFormPhone" 
                        name="phone" 
                        placeholder="Phone Number" 
                        value={formData.phone} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input 
                        type="text" 
                        id="ContactSubject" 
                        name="subject" 
                        placeholder="Subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <textarea 
                        rows={10} 
                        id="ContactFormMessage" 
                        name="message" 
                        placeholder="Your Message" 
                        value={formData.message} 
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="submit" className="btn" value="Send Message" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="open-hours">
              <strong>Opening Hours</strong><br />
              {contactInfo.hours.weekdays}<br />
              {contactInfo.hours.sunday}
            </div>
            <hr />
            <ul className="addressFooter">
              <li><i className="icon anm anm-map-marker-al"></i><p>{contactInfo.address}</p></li>
              <li className="phone"><i className="icon anm anm-phone-s"></i><p>{contactInfo.phone}</p></li>
              <li className="email"><i className="icon anm anm-envelope-l"></i><p>{contactInfo.email}</p></li>
            </ul>
            <hr />
            <ul className="list--inline site-footer__social-icons social-icons">
              {contactInfo.socialLinks.map((link, index) => (
                <li key={index}><a className="social-icons__link" href={link.url} target="_blank" title={`Follow us on ${link.platform}`}><i className={`icon icon-${link.icon}`}></i></a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
