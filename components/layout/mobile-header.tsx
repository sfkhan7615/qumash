"use client";

export default function MobileHeader() {
  return (
    <div className="mobile-nav-wrapper" role="navigation">
      <div className="closemobileMenu">
        <i className="icon anm anm-times-l pull-right"></i> Close Menu
      </div>
      <ul id="MobileNav" className="mobile-nav">
        <li className="lvl1 parent megamenu">
          <a href="/">Home</a>
        </li>
        <li className="lvl1 parent megamenu">
          <a href="/shop">Shop</a>
        </li>
        <li className="lvl1 parent megamenu">
          <a href="/product">Product</a>
        </li>
        <li className="lvl1 parent megamenu">
          <a href="/contact">Contact Us</a>
        </li>
        <li className="lvl1 parent megamenu">
          <a href="/blog">Blog</a>
        </li>
        <li className="lvl1">
          <a href="/buy">
            <b>Buy Now!</b>
          </a>
        </li>
      </ul>
    </div>
  );
}
