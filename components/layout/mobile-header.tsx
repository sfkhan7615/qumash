"use client"

export default function MobileHeader() {
  return (
    <div className="mobile-nav-wrapper" role="navigation">
      <div className="closemobileMenu"><i className="icon anm anm-times-l pull-right"></i> Close Menu</div>
      <ul id="MobileNav" className="mobile-nav">
        <li className="lvl1 parent megamenu"><a href="index.html">Home</a>
        </li>
        <li className="lvl1 parent megamenu"><a href="#">Shop</a>
        </li>
        <li className="lvl1 parent megamenu"><a href="product-layout-1.html">Product</a>
        </li>
        <li className="lvl1 parent megamenu"><a href="product-layout-1.html">Contact Us</a>
        </li>
        <li className="lvl1 parent megamenu"><a href="blog-left-sidebar.html">Blog</a>
        </li>
        <li className="lvl1"><a href="#"><b>Buy Now!</b></a>
        </li>
      </ul>
    </div>
  )
}
