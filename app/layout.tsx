'use client'; // Marking this file as a Client Component

import Script from 'next/script'; // Import next/script for optimized script loading
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/components/cart/cart-context";
import Footer from "@/components/layout/footer";
import "./globals.css";
import TopHeader from "@/components/layout/top-header";
import $ from 'jquery';
import "jquery.cookie"; // Import the jQuery Cookie plugin
import MainHeader from "@/components/layout/main-header";
import MobileHeader from "@/components/layout/mobile-header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize jQuery code here after the component is mounted
    $(document).ready(function () {
      $(".closepopup").on("click", function () {
        $("#popup-container").fadeOut();
        $("#modalOverly").fadeOut();
      });

      let visits = $.cookie("visits") || 0;
      visits++;
      $.cookie("visits", visits, { expires: 1, path: "/" });

      if ($.cookie("visits") > 1) {
        $("#modalOverly").hide();
        $("#popup-container").hide();
      } else {
        let pageHeight = $(document).height();
        $("<div id='modalOverly'></div>").insertBefore("body");
        $("#modalOverly").css("height", pageHeight);
        $("#popup-container").show();
      }

      if ($.cookie("noShowWelcome")) {
        $("#popup-container").hide();
        $("#active-popup").hide();
      }
    });

    // Cleanup on unmount
    return () => {
      $(document).off("click", ".closepopup");
    };
  }, []);

  return (
    <>
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
          {/* Load jQuery before interactive */}
          <Script
            src="/js/vendor/jquery-3.3.1.min.js"
            strategy="beforeInteractive"
          />
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
          />

          {/* For Newsletter Popup (Custom JS) */}
          <Script strategy="afterInteractive">
            {`
              jQuery(document).ready(function(){  
                jQuery('.closepopup').on('click', function () {
                  jQuery('#popup-container').fadeOut();
                  jQuery('#modalOverly').fadeOut();
                });

                var visits = jQuery.cookie('visits') || 0;
                visits++;
                jQuery.cookie('visits', visits, { expires: 1, path: '/' });
                console.debug(jQuery.cookie('visits')); 
                if ( jQuery.cookie('visits') > 1 ) {
                  jQuery('#modalOverly').hide();
                  jQuery('#popup-container').hide();
                } else {
                  var pageHeight = jQuery(document).height();
                  jQuery('<div id="modalOverly"></div>').insertBefore('body');
                  jQuery('#modalOverly').css("height", pageHeight);
                  jQuery('#popup-container').show();
                }
                if (jQuery.cookie('noShowWelcome')) { jQuery('#popup-container').hide(); jQuery('#active-popup').hide(); }
              });

              jQuery(document).mouseup(function(e){
                var container = jQuery('#popup-container');
                if( !container.is(e.target)&& container.has(e.target).length === 0)
                {
                  container.fadeOut();
                  jQuery('#modalOverly').fadeIn(200);
                  jQuery('#modalOverly').hide();
                }
              });
            `}
          </Script>
        </head>
        <body className="template-index belle template-index-belle">
          <div id="pre-loader">
            <img src="/images/loader.gif" alt="Loading..." />
          </div>
          <div className="pageWrapper">
            <TopHeader />
            <MainHeader />
            <MobileHeader />
            <CartProvider>
              <div id="page-content" className="flex min-h-screen flex-col">
                <div className="mt-20">
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
              </div>
              <Toaster />
            </CartProvider>
          </div>

        </body>
      </html>
    </>
  );
}
