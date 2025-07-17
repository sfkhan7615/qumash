"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteCart from "./site-cart";
import { useMobileDetection } from "@/hooks/use-mobile-detection";

export default function MainHeader() {
  const pathname = usePathname();

  // Clean up mobile menu state when route changes
  useEffect(() => {
    const cleanup = () => {
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

    // Clean up on mount and route changes
    cleanup();
    
    return () => cleanup();
  }, [pathname]);

  return (
    <div className="header-wrap classicHeader animated d-flex" suppressHydrationWarning>
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Desktop Logo */}
          <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
            <Link href="/" title="Qumash - Wear The Vibe">
              <img
                src="/images/b-removebg-preview-size.png"
                alt="Qumash - Wear The Vibe"
              />
            </Link>
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
                  <Link href="/">Home <i className="anm anm-angle-down-l"></i></Link>
                </li>
                <li className="lvl1 parent megamenu">
                  <Link href="/products">Products <i className="anm anm-angle-down-l"></i></Link>
                </li>
                <li className="lvl1 parent dropdown">
                  <Link href="/contact">Contact Us <i className="anm anm-angle-down-l"></i></Link>
                </li>
                <li className="lvl1 parent dropdown">
                  <Link href="/blogs">Blog <i className="anm anm-angle-down-l"></i></Link>
                </li>
                {/* <li className="lvl1">
                  <Link href="/buy">
                    <b>Buy Now!</b> <i className="anm anm-angle-down-l"></i>
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>

          {/* Mobile Logo */}
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
            <div className="logo">
              <Link href="/" title="Qumash - Wear The Vibe">
                <img
                  src="/images/b-removebg-preview-size.png"
                  alt="Qumash - Wear The Vibe"
                />
              </Link>
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
