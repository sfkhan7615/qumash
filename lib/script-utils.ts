// Utility to handle JavaScript re-initialization
declare const $: any;
declare const jQuery: any;

export const initializeSliders = () => {
  if (typeof $ === 'undefined') return;

  try {
    // Destroy existing sliders before re-initializing
    $('.home-slideshow').filter('.slick-initialized').slick('unslick');
    $('.productSlider').filter('.slick-initialized').slick('unslick');
    $('.collection-grid').filter('.slick-initialized').slick('unslick');

    // Re-initialize sliders
    setTimeout(() => {
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
          lazyLoad: 'ondemand'
        });
      }

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
    }, 100);
  } catch (error) {
    console.error('Error initializing sliders:', error);
  }
};

export const initializeProductFunctionality = () => {
  if (typeof $ === 'undefined') return;

  try {
    // Quantity controls
    $(".qtyBtn").off('click').on("click", function(this: any) {
      var qtyField = $(this).parent(".qtyField"),
         oldValue = $(qtyField).find(".qty").val(),
          newVal = 1;

      if ($(this).is(".plus")) {
        newVal = parseInt(oldValue) + 1;
      } else if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
      }
      $(qtyField).find(".qty").val(newVal);
    });

    // Product tabs
    $(".tab-content").hide();
    $(".tab-content:first").show();

    $("ul.tabs li").off('click').on('click', function(this: any) {
      $(".tab-content").hide();
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn();

      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

      $('.productSlider').slick('refresh');
    });

    // Color swatches
    $.each($(".swacth-list"), function(this: any) {
      var n = $(".swacth-btn");
      n.off('click').on("click", function(this: any) {
        $(this).parent().find(n).removeClass("checked");
        $(this).addClass("checked")
      })
    });
  } catch (error) {
    console.error('Error initializing product functionality:', error);
  }
};

export const waitForJQuery = (callback: () => void, maxAttempts = 50) => {
  let attempts = 0;
  const checkJQuery = () => {
    if (typeof $ !== 'undefined' && typeof jQuery !== 'undefined') {
      callback();
    } else if (attempts < maxAttempts) {
      attempts++;
      setTimeout(checkJQuery, 100);
    } else {
      console.warn('jQuery not loaded after maximum attempts');
    }
  };
  checkJQuery();
}; 