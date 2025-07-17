"use client";

import Script from 'next/script';
import React, { useEffect, useRef } from "react";
import { usePathname } from 'next/navigation';
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/components/cart/cart-context";
import Footer from "@/components/layout/footer";
import TopHeader from "@/components/layout/top-header";
import MainHeader from "@/components/layout/main-header";
import MobileHeader from "@/components/layout/mobile-header";
import "./globals.css";

// Declare jQuery for TypeScript
declare const $: any;
declare const jQuery: any;
declare const WOW: any;
declare const Cookies: any;

// Add type for event handlers
type EventHandler = (this: HTMLElement, event?: Event) => void;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scriptsLoadedRef = useRef(false);

  // Effect to clean up mobile menu state
  useEffect(() => {
    const cleanup = () => {
      // Remove any lingering mobile menu classes
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
  }, [pathname]); // Run cleanup when route changes

  // Function to initialize all JavaScript functionality
  const initializeJavaScript = () => {
    if (typeof $ === 'undefined' || typeof jQuery === 'undefined') {
      console.warn('jQuery not loaded yet, retrying...');
      setTimeout(initializeJavaScript, 100);
      return;
    }

    console.log('Initializing JavaScript for path:', pathname);

    try {
      // Clear existing timers and unbind events to prevent conflicts
      $('.site-header__cart').off('click');
      $('.search-trigger').off('click');
      $('.js-mobile-nav-toggle').off('click');
      $('.closemobileMenu').off('click');
      
      // Destroy existing slick sliders if they exist
      $('.home-slideshow').filter('.slick-initialized').slick('unslick');
      $('.productSlider').filter('.slick-initialized').slick('unslick');
      $('.productSlider-style1').filter('.slick-initialized').slick('unslick');
      $('.productSlider-style2').filter('.slick-initialized').slick('unslick');
      $('.productSlider-fullwidth').filter('.slick-initialized').slick('unslick');
      $('.productPageSlider').filter('.slick-initialized').slick('unslick');
      $('.collection-grid').filter('.slick-initialized').slick('unslick');
      $('.collection-grid-4item').filter('.slick-initialized').slick('unslick');
      $('.logo-bar').filter('.slick-initialized').slick('unslick');
      $('.quotes-slider').filter('.slick-initialized').slick('unslick');
      $('.product-dec-slider-2').filter('.slick-initialized').slick('unslick');
      $('.product-dec-slider-1').filter('.slick-initialized').slick('unslick');
      $('.related-product .productSlider').filter('.slick-initialized').slick('unslick');

      // Re-initialize all functionality from main.js
      
      // 1. Preloader
      $("#load").fadeOut();
      $('#pre-loader').delay(0).fadeOut('slow');

      // 2. Promotional Bar Header
      $(".closeHeader").off('click').on('click', function(this: HTMLElement) {
        $(".promotion-header").slideUp();
        if (typeof Cookies !== 'undefined') {
          Cookies.set('promotion', 'true', { expires: 1});
        }
        return false;
      });

      // 3. Currency dropdown
      $(".selected-currency").off('click').on("click", function(this: HTMLElement) {
        $("#currencies").slideToggle();
      });
      $("#currencies li").off('click').on("click", function(this: HTMLElement) {
        $(this).parent().slideUp();
      });

      // 4. Language dropdown
      $(".language-dd").off('click').on("click", function(this: HTMLElement) {
        $("#language").slideToggle();
      });
      $("#language li").off('click').on("click", function(this: HTMLElement) {
        $(this).parent().slideUp();
      });

      // 5. Top Links dropdown
      $('.top-header .user-menu').off('click').on("click", function(this: HTMLElement) {
        if ($(window).width() < 990) {
          $(this).next().slideToggle(300);
          $(this).parent().toggleClass("active");
        }
      });

      // 6. Minicart Dropdown
      $(".site-header__cart").on("click", function(e: Event) {
        e.preventDefault();
        $("#header-cart").slideToggle();
      });
      
      $("body").off("click.minicart").on("click.minicart", function(event: Event) {
        const $target = $(event.target);
        if (!$target.parents().is(".site-cart") && !$target.is(".site-cart")) {
          $("body").find("#header-cart").slideUp();
        }
      });

      // 8. Search Trigger
      $('.search-trigger').on('click', function() {
        const search = $('.search');
        if (search.is('.search--opened')) {
          search.removeClass('search--opened');
        } else {
          search.addClass('search--opened');
          $('.search__input')[0]?.focus();
        }
      });

      $(document).off('click.search').on('click.search', function(event: Event) {
        if (!$(event.target).closest('.search, .search-trigger').length) {
          $('.search').removeClass('search--opened');
        }
      });

      // 9. Mobile Menu
      const selectors = {
        body: 'body',
        sitenav: '#siteNav',
        navLinks: '#siteNav .lvl1 > a',
        menuToggle: '.js-mobile-nav-toggle',
        mobilenav: '.mobile-nav-wrapper',
        menuLinks: '#MobileNav .anm',
        closemenu: '.closemobileMenu'
      };

      $(selectors.navLinks).each(function(this: HTMLElement) {
        if ($(this).attr('href') === window.location.pathname) $(this).addClass('active');
      });

      $(selectors.menuToggle).on("click", function(this: HTMLElement) {
        $(selectors.mobilenav).toggleClass("active");
        $(selectors.body).toggleClass("menuOn");
        $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
      });

      $(selectors.closemenu).on("click", function(this: HTMLElement) {
        $(selectors.mobilenav).toggleClass("active");
        $(selectors.body).toggleClass("menuOn");
        $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
      });

      $("body").off('click.mobilemenu').on('click.mobilemenu', function(event: Event) {
        const $target = $(event.target);
        if (!$target.parents().is(selectors.mobilenav) && !$target.parents().is(selectors.menuToggle) && !$target.is(selectors.menuToggle)) {
          $(selectors.mobilenav).removeClass("active");
          $(selectors.body).removeClass("menuOn");
          $(selectors.menuToggle).removeClass('mobile-nav--close').addClass('mobile-nav--open');
        }
      });

      $(selectors.menuLinks).off('click').on('click', function(e: Event) {
        e.preventDefault();
        $(this).toggleClass('anm-plus-l anm-minus-l');
        $(this).parent().next().slideToggle();
      });

      // 10. Initialize Sliders with error handling
      setTimeout(() => {
        try {
          // Homepage Slideshow
          if ($('.home-slideshow').length && !$('.home-slideshow').hasClass('slick-initialized')) {
            $('.home-slideshow').slick({
              dots: false,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
              arrows: true,
              autoplay: true,
              autoplaySpeed: 4000,
              lazyLoad: 'ondemand',
              adaptiveHeight: false // Disable adaptive height
            });

            // Handle banner size on window resize
            $(window).on('resize', function() {
              const minHeight = 400; // Minimum height for mobile
              const windowWidth = $(window).width();
              const slideHeight = windowWidth <= 767 ? minHeight : 'auto';
              
              $('.slideshow .slide, .slideshow .bg-size, .slideshow .bg-img').css({
                'min-height': slideHeight
              });
            }).trigger('resize'); // Trigger resize on load
          }

          // Product Sliders
          if ($('.productSlider').length && !$('.productSlider').hasClass('slick-initialized')) {
            $('.productSlider').slick({
              dots: false,
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: true,
              responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
              ]
            });
          }

          // Collection Grid
          if ($('.collection-grid').length && !$('.collection-grid').hasClass('slick-initialized')) {
            $('.collection-grid').slick({
              dots: false,
              infinite: true,
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows: true,
              responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
                { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }
              ]
            });
          }

        } catch (error) {
          console.error('Error initializing sliders:', error);
        }
      }, 100);

      // Quantity Plus Minus
      $(".qtyBtn").off('click').on("click", function(this: HTMLElement) {
        const qtyField = $(this).parent(".qtyField");
        const oldValue = $(qtyField).find(".qty").val();
        let newVal = 1;

        if ($(this).is(".plus")) {
          newVal = parseInt(oldValue as string) + 1;
        } else if (oldValue > 1) {
          newVal = parseInt(oldValue as string) - 1;
        }
        $(qtyField).find(".qty").val(newVal);
      });

      // Tabs functionality
      $(".tab_content").hide();
      $(".tab_content:first").show();

      $("ul.tabs li").off('click').on('click', function(this: HTMLElement) {
        $(".tab_content").hide();
        const activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

        $('.productSlider').slick('refresh');
      });

      // Filter functionality
      $('.btn-filter').off('click').on("click", function() {
        $(".filterbar").toggleClass("active");
      });

      $('.closeFilter').off('click').on("click", function() {
        $(".filterbar").removeClass("active");
      });

    } catch (error) {
      console.error('Error initializing JavaScript:', error);
    }
  };

  // Effect for handling route changes and script initialization
  useEffect(() => {
    if (scriptsLoadedRef.current) {
      setTimeout(initializeJavaScript, 100);
    }
  }, [pathname]);

  // Effect for initial script loading
  useEffect(() => {
    const checkScriptsLoaded = () => {
      if (typeof $ !== 'undefined' && typeof jQuery !== 'undefined') {
        scriptsLoadedRef.current = true;
        initializeJavaScript();
      } else {
        setTimeout(checkScriptsLoaded, 100);
      }
    };

    checkScriptsLoaded();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Qumash | Wear The Vibe</title>
        <meta name="description" content="Coming soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        
        {/* Load scripts in the correct order */}
        <Script
          src="/js/vendor/jquery-3.3.1.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="template-index belle template-index-belle">
        <div id="pre-loader">
          <img src="/images/loader.gif" alt="Loading..." />
        </div>

        <div className="pageWrapper bg-white">
          <TopHeader />
          <MainHeader />
          <MobileHeader />
          <CartProvider>
            <div id="page-content" className="flex min-h-screen flex-col">
              <div className="mt-5">
                <main className="flex-1 mt-1">{children}</main>
                <Footer />
              </div>
            </div>
            <Toaster />
          </CartProvider>
        </div>

        {/* Load remaining scripts after interactive */}
        <Script
          src="/js/vendor/jquery.cookie.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/vendor/wow.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/bootstrap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/plugins.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/popper.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/lazysizes.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/main.js"
          strategy="afterInteractive"
          onLoad={() => {
            scriptsLoadedRef.current = true;
            setTimeout(initializeJavaScript, 100);
          }}
        />
      </body>
    </html>
  );
}
