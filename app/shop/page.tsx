"use client"

export default function ShopPage() {





  return (
    <>
      <div className="collection-header">
        <div className="collection-hero">
          <div className="collection-hero__image"><img className="blur-up lazyload"
            data-src="images/cat-women2.jpg" src="images/cat-women2.jpg" alt="Women"
            title="Women" /></div>
          <div className="collection-hero__title-wrapper">
            <h1 className="collection-hero__title page-width">Shop</h1>
          </div>
        </div>
      </div>




      <div className="container-fluid">
        <div className="row">

          <div className="col-12 col-sm-12 col-md-3 col-lg-2 sidebar filterbar">
            <div className="closeFilter d-block d-md-none d-lg-none"><i className="icon icon anm anm-times-l"></i>
            </div>
            <div className="sidebar_tags">

              <div className="sidebar_widget categories filter-widget">
                <div className="widget-title">
                  <h2>Categories</h2>
                </div>
                <div className="widget-content">
                  <ul className="sidebar_categories">
                    <li className="level1 sub-level"><a href="#;" className="site-nav">Clothing</a>
                      <ul className="sublinks">
                        <li className="level2"><a href="#;" className="site-nav">Men</a></li>
                        <li className="level2"><a href="#;" className="site-nav">Women</a></li>
                        <li className="level2"><a href="#;" className="site-nav">Child</a></li>
                        <li className="level2"><a href="#;" className="site-nav">View All Clothing</a>
                        </li>
                      </ul>
                    </li>
                    <li className="level1 sub-level"><a href="#;" className="site-nav">Jewellery</a>
                      <ul className="sublinks">
                        <li className="level2"><a href="#;" className="site-nav">Ring</a></li>
                        <li className="level2"><a href="#;" className="site-nav">Neckalses</a></li>
                        <li className="level2"><a href="#;" className="site-nav">Eaarings</a></li>
                        <li className="level2"><a href="#;" className="site-nav">View All Jewellery</a>
                        </li>
                      </ul>
                    </li>
                    <li className="lvl-1"><a href="#;" className="site-nav">Shoes</a></li>
                    <li className="lvl-1"><a href="#;" className="site-nav">Accessories</a></li>
                    <li className="lvl-1"><a href="#;" className="site-nav">Collections</a></li>
                    <li className="lvl-1"><a href="#;" className="site-nav">Sale</a></li>
                    <li className="lvl-1"><a href="#;" className="site-nav">Page</a></li>
                  </ul>
                </div>
              </div>


              <div className="sidebar_widget filterBox filter-widget">
                <div className="widget-title">
                  <h2>Price</h2>
                </div>
                <form action="#" method="post" className="price-filter">
                  <div id="slider-range"
                    className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                    <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                    <span className="ui-slider-handle ui-state-default ui-corner-all"
                      tabIndex={0}></span>
                    <span className="ui-slider-handle ui-state-default ui-corner-all"
                      tabIndex={0}></span>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="no-margin"><input id="amount" type="text" /></p>
                    </div>
                    <div className="col-6 text-right margin-25px-top">
                      <button className="btn btn-secondary btn--small">filter</button>
                    </div>
                  </div>
                </form>
              </div>


              <div className="sidebar_widget filterBox filter-widget size-swacthes">
                <div className="widget-title">
                  <h2>Size</h2>
                </div>
                <div className="filter-color swacth-list">
                  <ul>
                    <li><span className="swacth-btn checked">X</span></li>
                    <li><span className="swacth-btn">XL</span></li>
                    <li><span className="swacth-btn">XLL</span></li>
                    <li><span className="swacth-btn">M</span></li>
                    <li><span className="swacth-btn">L</span></li>
                    <li><span className="swacth-btn">S</span></li>
                    <li><span className="swacth-btn">XXXL</span></li>
                    <li><span className="swacth-btn">XXL</span></li>
                    <li><span className="swacth-btn">XS</span></li>
                  </ul>
                </div>
              </div>


              <div className="sidebar_widget filterBox filter-widget">
                <div className="widget-title">
                  <h2>Color</h2>
                </div>
                <div className="filter-color swacth-list clearfix">
                  <span className="swacth-btn black"></span>
                  <span className="swacth-btn white checked"></span>
                  <span className="swacth-btn red"></span>
                  <span className="swacth-btn blue"></span>
                  <span className="swacth-btn pink"></span>
                  <span className="swacth-btn gray"></span>
                  <span className="swacth-btn green"></span>
                  <span className="swacth-btn orange"></span>
                  <span className="swacth-btn yellow"></span>
                  <span className="swacth-btn blueviolet"></span>
                  <span className="swacth-btn brown"></span>
                  <span className="swacth-btn darkGoldenRod"></span>
                  <span className="swacth-btn darkGreen"></span>
                  <span className="swacth-btn darkRed"></span>
                  <span className="swacth-btn dimGrey"></span>
                  <span className="swacth-btn khaki"></span>
                </div>
              </div>


              <div className="sidebar_widget filterBox filter-widget">
                <div className="widget-title">
                  <h2>Brands</h2>
                </div>
                <ul>
                  <li>
                    <input type="checkbox" value="allen-vela" id="check1" />
                    <label htmlFor="check1"><span><span></span></span>Allen Vela</label>
                  </li>
                  <li>
                    <input type="checkbox" value="oxymat" id="check3" />
                    <label htmlFor="check3"><span><span></span></span>Oxymat</label>
                  </li>
                  <li>
                    <input type="checkbox" value="vanelas" id="check4" />
                    <label htmlFor="check4"><span><span></span></span>Vanelas</label>
                  </li>
                  <li>
                    <input type="checkbox" value="pagini" id="check5" />
                    <label htmlFor="check5"><span><span></span></span>Pagini</label>
                  </li>
                  <li>
                    <input type="checkbox" value="monark" id="check6" />
                    <label htmlFor="check6"><span><span></span></span>Monark</label>
                  </li>
                </ul>
              </div>


              <div className="sidebar_widget">
                <div className="widget-title">
                  <h2>Popular Products</h2>
                </div>
                <div className="widget-content">
                  <div className="list list-sidebar-products">
                    <div className="grid">
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image">
                            <a className="grid-view-item__link" href="#">
                              <img className="grid-view-item__image"
                                src="images/product-images/mini-product-img.jpg"
                                alt="" />
                            </a>
                          </div>
                          <div className="details"> <a className="grid-view-item__title" href="#">Cena
                            Skirt</a>
                            <div className="grid-view-item__meta"><span
                              className="product-price__price"><span
                                className="money">$173.60</span></span></div>
                          </div>
                        </div>
                      </div>
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image"> <a className="grid-view-item__link"
                            href="#"><img className="grid-view-item__image"
                              src="images/product-images/mini-product-img1.jpg"
                              alt="" /></a> </div>
                          <div className="details"> <a className="grid-view-item__title"
                            href="#">Block Button Up</a>
                            <div className="grid-view-item__meta"><span
                              className="product-price__price"><span
                                className="money">$378.00</span></span></div>
                          </div>
                        </div>
                      </div>
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image"> <a className="grid-view-item__link"
                            href="#"><img className="grid-view-item__image"
                              src="images/product-images/mini-product-img2.jpg"
                              alt="" /></a> </div>
                          <div className="details"> <a className="grid-view-item__title"
                            href="#">Balda Button Pant</a>
                            <div className="grid-view-item__meta"><span
                              className="product-price__price"><span
                                className="money">$278.60</span></span></div>
                          </div>
                        </div>
                      </div>
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image"> <a className="grid-view-item__link"
                            href="#"><img className="grid-view-item__image"
                              src="images/product-images/mini-product-img3.jpg"
                              alt="" /></a> </div>
                          <div className="details"> <a className="grid-view-item__title"
                            href="#">Border Dress in Black/Silver</a>
                            <div className="grid-view-item__meta"><span
                              className="product-price__price"><span
                                className="money">$228.00</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="sidebar_widget static-banner">
                <img src="images/side-banner-2.jpg" alt="" />
              </div>


              <div className="sidebar_widget">
                <div className="widget-title">
                  <h2>Information</h2>
                </div>
                <div className="widget-content">
                  <p>Use this text to share information about your brand with your customers. Describe
                    a product, share announcements, or welcome customers to your store.</p>
                </div>
              </div>


              <div className="sidebar_widget">
                <div className="widget-title">
                  <h2>Product Tags</h2>
                </div>
                <div className="widget-content">
                  <ul className="product-tags">
                    <li><a href="#" title="Show products matching tag $100 - $400">$100 - $400</a>
                    </li>
                    <li><a href="#" title="Show products matching tag $400 - $600">$400 - $600</a>
                    </li>
                    <li><a href="#" title="Show products matching tag $600 - $800">$600 - $800</a>
                    </li>
                    <li><a href="#" title="Show products matching tag Above $800">Above $800</a>
                    </li>
                    <li><a href="#" title="Show products matching tag Allen Vela">Allen Vela</a>
                    </li>
                    <li><a href="#" title="Show products matching tag Black">Black</a></li>
                    <li><a href="#" title="Show products matching tag Blue">Blue</a></li>
                    <li><a href="#" title="Show products matching tag Cantitate">Cantitate</a></li>
                    <li><a href="#" title="Show products matching tag Famiza">Famiza</a></li>
                    <li><a href="#" title="Show products matching tag Gray">Gray</a></li>
                    <li><a href="#" title="Show products matching tag Green">Green</a></li>
                    <li><a href="#" title="Show products matching tag Hot">Hot</a></li>
                    <li><a href="#" title="Show products matching tag jean shop">jean shop</a></li>
                    <li><a href="#" title="Show products matching tag jesse kamm">jesse kamm</a>
                    </li>
                    <li><a href="#" title="Show products matching tag L">L</a></li>
                    <li><a href="#" title="Show products matching tag Lardini">Lardini</a></li>
                    <li><a href="#" title="Show products matching tag lareida">lareida</a></li>
                    <li><a href="#" title="Show products matching tag Lirisla">Lirisla</a></li>
                    <li><a href="#" title="Show products matching tag M">M</a></li>
                    <li><a href="#" title="Show products matching tag mini-dress">mini-dress</a>
                    </li>
                    <li><a href="#" title="Show products matching tag Monark">Monark</a></li>
                    <li><a href="#" title="Show products matching tag Navy">Navy</a></li>
                    <li><a href="#" title="Show products matching tag new">new</a></li>
                    <li><a href="#" title="Show products matching tag new arrivals">new arrivals</a>
                    </li>
                    <li><a href="#" title="Show products matching tag Orange">Orange</a></li>
                    <li><a href="#" title="Show products matching tag oxford">oxford</a></li>
                    <li><a href="#" title="Show products matching tag Oxymat">Oxymat</a></li>
                  </ul>
                  <span className="btn btn--small btnview">View all</span>
                </div>
              </div>

            </div>
          </div>


          <div className="col-12 col-sm-12 col-md-9 col-lg-10 main-col">
            <div className="productList">

              <button type="button" className="btn btn-filter d-block d-md-none d-lg-none"> Product
                Filters</button>
              <div className="toolbar">
                <div className="filters-toolbar-wrapper">
                  <div className="row">
                    <div
                      className="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
                      <a href="shop-left-sidebar.html" title="Grid View"
                        className="change-view change-view--active">
                        <img src="images/grid.jpg" alt="Grid" />
                      </a>
                      <a href="shop-listview.html" title="List View" className="change-view">
                        <img src="images/list.jpg" alt="List" />
                      </a>
                    </div>
                    <div
                      className="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                      <span className="filters-toolbar__product-count">Showing: 22</span>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4 text-right">
                      <div className="filters-toolbar__item">
                        <label htmlFor="SortBy" className="hidden">Sort</label>
                        <select name="SortBy" id="SortBy"
                          className="filters-toolbar__input filters-toolbar__input--sort">
                          <option value="title-ascending" selected>Sort</option>
                          <option>Best Selling</option>
                          <option>Alphabetically, A-Z</option>
                          <option>Alphabetically, Z-A</option>
                          <option>Price, low to high</option>
                          <option>Price, high to low</option>
                          <option>Date, new to old</option>
                          <option>Date, old to new</option>
                        </select>
                        <input className="collection-header__default-sort" type="hidden"
                          value="manual" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="grid-products grid--view-items">
                <div className="row">
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image1.jpg"
                          src="images/product-images/product-image1.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image1-1.jpg"
                          src="images/product-images/product-image1-1.jpg" alt="image"
                          title="product" />


                        <div className="product-labels rectangular"><span
                          className="lbl on-sale">-16%</span> <span
                            className="lbl pr-label1">new</span></div>

                      </a>



                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Edna Dress</a>
                        </div>


                        <div className="product-price">
                          <span className="old-price">$500.00</span>
                          <span className="price">$600.00</span>
                        </div>

                        <div className="product-review">
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="#content_quickview" title="Quick View"
                            className="quick-view-popup quick-view" tabIndex={0}>
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image2.jpg"
                          src="images/product-images/product-image2.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image2-1.jpg"
                          src="images/product-images/product-image2-1.jpg" alt="image"
                          title="product" />

                      </a>

                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Elastic Waist Dress</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$748.00</span>
                        </div>

                        <div className="product-review">
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image3.jpg"
                          src="images/product-images/product-image3.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image3-1.jpg"
                          src="images/product-images/product-image3-1.jpg" alt="image"
                          title="product" />


                        <div className="product-labels rectangular"><span
                          className="lbl pr-label2">Hot</span></div>

                      </a>



                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">3/4 Sleeve Kimono Dress</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$550.00</span>
                        </div>


                        <div className="product-review">
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="#content_quickview" title="Quick View"
                            className="quick-view-popup quick-view" tabIndex={0}>
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image4.jpg"
                          src="images/product-images/product-image4.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image4-1.jpg"
                          src="images/product-images/product-image4-1.jpg" alt="image"
                          title="product" />


                        <div className="product-labels"><span className="lbl on-sale">Sale</span></div>

                      </a>



                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Cape Dress</a>
                        </div>


                        <div className="product-price">
                          <span className="old-price">$900.00</span>
                          <span className="price">$788.00</span>
                        </div>


                        <div className="product-review">
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image5.jpg"
                          src="images/product-images/product-image5.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image5-1.jpg"
                          src="images/product-images/product-image5-1.jpg" alt="image"
                          title="product" />


                        <div className="product-labels"><span className="lbl on-sale">Sale</span></div>

                      </a>



                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Paper Dress</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$550.00</span>
                        </div>


                        <div className="product-review">
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image17.jpg"
                          src="images/product-images/product-image17.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image17-1.jpg"
                          src="images/product-images/product-image17-1.jpg" alt="image"
                          title="product" />


                        <div className="product-labels"><span className="lbl on-sale">Sale</span></div>

                      </a>



                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Buttercup Dress</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$420.00</span>
                        </div>


                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image18.jpg"
                          src="images/product-images/product-image18.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image18-1.jpg"
                          src="images/product-images/product-image18-1.jpg" alt="image"
                          title="product" />

                      </a>


                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Lima Shirt</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$698.00</span>
                        </div>

                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image19.jpg"
                          src="images/product-images/product-image19.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image19-1.jpg"
                          src="images/product-images/product-image19-1.jpg" alt="image"
                          title="product" />

                      </a>


                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Romary Dress</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$348.60</span>
                        </div>


                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image20.jpg"
                          src="images/product-images/product-image20.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image20-1.jpg"
                          src="images/product-images/product-image20-1.jpg" alt="image"
                          title="product" />


                        <div className="product-labels"><span className="lbl pr-label3">Popular</span>
                        </div>

                      </a>


                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Floral Sleeveless Dress</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$380.00</span>
                        </div>


                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image21.jpg"
                          src="images/product-images/product-image21.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image21-1.jpg"
                          src="images/product-images/product-image21-1.jpg" alt="image"
                          title="product" />

                      </a>


                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Button Up Dress</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$400.00</span>
                        </div>


                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image22.jpg"
                          src="images/product-images/product-image22.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image22-1.jpg"
                          src="images/product-images/product-image22-1.jpg" alt="image"
                          title="product" />

                      </a>



                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Lexie Shirt</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$200.00</span>
                        </div>

                        <div className="product-review">
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image23.jpg"
                          src="images/product-images/product-image23.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image23-1.jpg"
                          src="images/product-images/product-image23-1.jpg" alt="image"
                          title="product" />

                      </a>



                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">One Shoulder Dress in Navy</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$1,048.60</span>
                        </div>

                        <div className="product-review">
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                          <i className="font-13 fa fa-star"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image24.jpg"
                          src="images/product-images/product-image24.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image24-1.jpg"
                          src="images/product-images/product-image24-1.jpg" alt="image"
                          title="product" />

                      </a>


                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Triangle Sleeveless Dress in Multi</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$684.60</span>
                        </div>

                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">
                      <a href="product-accordion.html" className="grid-view-item__link">
                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image25.jpg"
                          src="images/product-images/product-image25.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image25-1.jpg"
                          src="images/product-images/product-image25-1.jpg" alt="image"
                          title="product" />

                      </a>


                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">ACB Top</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$280.00</span>
                        </div>

                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image26.jpg"
                          src="images/product-images/product-image26.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image26-1.jpg"
                          src="images/product-images/product-image26-1.jpg" alt="image"
                          title="product" />

                      </a>


                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">A-Line Jacket</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$698.60</span>
                        </div>

                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-6 col-md-4 col-lg-3 item grid-view-item style2 grid-view-item--sold-out">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image27.jpg"
                          src="images/product-images/product-image27.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image27-1.jpg"
                          src="images/product-images/product-image27-1.jpg" alt="image"
                          title="product" />

                        <span className="sold-out"><span>Sold out</span></span>
                      </a>



                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Camelia Reversible Jacket in Navy/Blue</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$488.00</span>
                        </div>


                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image28.jpg"
                          src="images/product-images/product-image28.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image28-1.jpg"
                          src="images/product-images/product-image28-1.jpg" alt="image"
                          title="product" />

                      </a>


                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Wrinkled Tux Shirt in Navy</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$158.00</span>
                        </div>

                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image29.jpg"
                          src="images/product-images/product-image29.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image29-1.jpg"
                          src="images/product-images/product-image29-1.jpg" alt="image"
                          title="product" />

                      </a>



                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">A-Line Mini Dress in Blue</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$348.00</span>
                        </div>


                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image30.jpg"
                          src="images/product-images/product-image30.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image30-1.jpg"
                          src="images/product-images/product-image30-1.jpg" alt="image"
                          title="product" />

                      </a>


                      <div className="product-details hoverDetails text-center mobile">

                        <div className="product-name">
                          <a href="#">Asymmetric Dress in Black</a>
                        </div>


                        <div className="product-price">
                          <span className="price">$578.00</span>
                        </div>


                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>

                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>

                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                    <div className="grid-view_image">

                      <a href="product-accordion.html" className="grid-view-item__link">

                        <img className="grid-view-item__image primary blur-up lazyload"
                          data-src="images/product-images/product-image31.jpg"
                          src="images/product-images/product-image31.jpg" alt="image"
                          title="product" />


                        <img className="grid-view-item__image hover blur-up lazyload"
                          data-src="images/product-images/product-image31-1.jpg"
                          src="images/product-images/product-image31-1.jpg" alt="image"
                          title="product" />

                      </a>
                      <div className="product-details hoverDetails text-center mobile">
                        <div className="product-name">
                          <a href="#">Babydoll Bow Dress</a>
                        </div>
                        <div className="product-price">
                          <span className="price">$313.60</span>
                        </div>
                        <div className="product-review">
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </div>
                        <div className="button-set">
                          <a href="javascript:void(0)" title="Quick View"
                            className="quick-view-popup quick-view" data-toggle="modal"
                            data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>
                          <form action="#" method="post">
                            <button className="btn btn--secondary cartIcon btn-addto-cart"
                              type="button"><i className="icon anm anm-bag-l"></i></button>
                          </form>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#"
                              title="Add to Wishlist">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html"
                              title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
