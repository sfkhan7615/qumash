"use client";

import Link from "next/link";
import SiteCart from "./site-cart";

export default function MainHeader() {
  return (
    <div className="header-wrap classicHeader animated d-flex">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Desktop Logo */}
          <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
            <a href="/" title="Qumash - Wear The Vibe">
              <img
                src="/images/b-removebg-preview-size.png"
                alt="Qumash - Wear The Vibe"
              />
            </a>
          </div>

          {/* Navigation */}
          <div className="col-2 col-sm-3 col-md-3 col-lg-8">
            <div className="d-block d-lg-none">
              <button
                type="button"
                className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open"
              >
                <i className="icon anm anm-times-l"></i>
                <i className="anm anm-bars-r"></i>
              </button>
            </div>

            <nav className="grid__item" id="AccessibleNav">
              <ul id="siteNav" className="site-nav medium center hidearrow">
                <li className="lvl1 parent megamenu">
                  <a href="/">Home <i className="anm anm-angle-down-l"></i></a>
                </li>
                <li className="lvl1 parent megamenu">
                  <a href="/products">Products <i className="anm anm-angle-down-l"></i></a>
                </li>
                <li className="lvl1 parent dropdown">
                  <a href="/contact">Contact Us <i className="anm anm-angle-down-l"></i></a>
                </li>
                <li className="lvl1 parent dropdown">
                  <a href="/blogs">Blog <i className="anm anm-angle-down-l"></i></a>
                </li>
                {/* <li className="lvl1">
                  <a href="/buy">
                    <b>Buy Now!</b> <i className="anm anm-angle-down-l"></i>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>

          {/* Mobile Logo */}
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
            <div className="logo">
              <a href="/" title="Qumash - Wear The Vibe">
                <img
                  src="/images/b-removebg-preview-size.png"
                  alt="Qumash - Wear The Vibe"
                />
              </a>
            </div>
          </div>

          {/* Cart Component */}
          <div className="col-4 col-sm-3 col-md-3 col-lg-2">
            <SiteCart />
          </div>
        </div>
      </div>
    </div>
  );
}
