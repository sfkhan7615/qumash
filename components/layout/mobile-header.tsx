"use client";

export default function MobileHeader() {
  return (
    <div className="mobile-nav-wrapper" role="navigation">
      <div className="closemobileMenu">
        <i className="icon anm anm-times-l pull-right"></i> <strong>QUMASH</strong>
      </div>
      <ul id="MobileNav" className="mobile-nav">
        <li className="lvl1 parent megamenu">
          <a href="/">Home</a>
        </li>
        <li className="lvl1 parent megamenu">
          <a href="/products">Products</a>
        </li>
        <li className="lvl1 parent megamenu">
          <a href="/contact">Contact Us</a>
        </li>
        <li className="lvl1 parent megamenu">
          <a href="/blog">Blog</a>
        </li>
        <li className="lvl1">
          <a href="/buy">
            <strong>Buy Now!</strong>
          </a>
        </li>
      </ul>
    </div>
  );
}
