"use client"

import Link from "next/link"

export default function TopHeader() {

  return (
    <div className="top-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-5 col-lg-4">
            <div className="currency-picker">
              <span className="selected-currency">INR</span>
              <ul id="currencies">
                {/* <li data-currency="INR" className="">INR</li> */}
              </ul>
            </div>
            <div className="language-dropdown">
              <span className="language-dd">English</span>
              <ul id="language">
                <li className="">English</li>
                <li className="">Hindi</li>
              </ul>
            </div>
            <p className="phone-no"><i className="anm anm-phone-s"></i> +91 9876543210</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 d-none d-lg-none d-md-block d-lg-block">
            <div className="text-center"><p className="top-header_middle-text"> All India Express Shipping</p></div>
          </div>
          <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
            <span className="user-menu d-block d-lg-none"><i className="anm anm-user-al" aria-hidden="true"></i></span>
            <ul className="customer-links list-inline">
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/register">Create Account</Link></li>
              <li><Link href="/wishlist">Wishlist</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
