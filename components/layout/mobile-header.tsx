"use client";

import Link from "next/link";

export default function MobileHeader() {
  return (
    <div className="mobile-nav-wrapper" role="navigation">
      <div className="closemobileMenu">
        <i className="icon anm anm-times-l pull-right"></i> <strong>QUMASH</strong>
      </div>
      <ul id="MobileNav" className="mobile-nav">
        <li className="lvl1 parent megamenu">
          <Link href="/">Home</Link>
        </li>
        <li className="lvl1 parent megamenu">
          <Link href="/products">Products</Link>
        </li>
        <li className="lvl1 parent megamenu">
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className="lvl1 parent megamenu">
          <Link href="/blogs">Blog</Link>
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
