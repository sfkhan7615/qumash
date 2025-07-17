"use client";

import Link from "next/link";

export default function MobileHeader() {
  const handleLinkClick = () => {
    // Clean up mobile menu state
    document.body.classList.remove("menuOn");
    const mobileNav = document.querySelector(".mobile-nav-wrapper");
    if (mobileNav) {
      mobileNav.classList.remove("active");
    }
    const menuToggle = document.querySelector(".js-mobile-nav-toggle");
    if (menuToggle) {
      menuToggle.classList.remove("mobile-nav--close");
      menuToggle.classList.add("mobile-nav--open");
    }
  };

  return (
    <div className="mobile-nav-wrapper" role="navigation">
      <div className="closemobileMenu">
        <i className="icon anm anm-times-l pull-right"></i> <strong>QUMASH</strong>
      </div>
      <ul id="MobileNav" className="mobile-nav">
        <li className="lvl1 parent megamenu">
          <Link href="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li className="lvl1 parent megamenu">
          <Link href="/products" onClick={handleLinkClick}>Products</Link>
        </li>
        <li className="lvl1 parent megamenu">
          <Link href="/contact" onClick={handleLinkClick}>Contact Us</Link>
        </li>
        <li className="lvl1 parent megamenu">
          <Link href="/blogs" onClick={handleLinkClick}>Blog</Link>
        </li>
        {/* <li className="lvl1">
          <Link href="/buy">
            <strong>Buy Now!</strong>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
