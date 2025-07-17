"use client"

import Link from "next/link";

export default function ShopPage() {
  const categories = [
    { name: 'Clothing', subCategories: ['Men', 'Women', 'Child', 'View All Clothing'] },
    { name: 'Jewellery', subCategories: ['Ring', 'Necklaces', 'Earrings', 'View All Jewellery'] },
    { name: 'Shoes', subCategories: [] },
    { name: 'Accessories', subCategories: [] },
    { name: 'Collections', subCategories: [] },
    { name: 'Sale', subCategories: [] },
    { name: 'Page', subCategories: [] }
  ];

  const sizes = ['X', 'XL', 'XLL', 'M', 'L', 'S', 'XXXL', 'XXL', 'XS'];

  const popularProducts = [
    { title: 'Cena Skirt', price: '$173.60', oldPrice: null, image: 'images/product-images/mini-product-img.jpg', id: 1 },
    { title: 'Block Button Up', price: '$378.00', oldPrice: null, image: 'images/product-images/mini-product-img1.jpg', id: 2 },
    { title: 'Balda Button Pant', price: '$278.60', oldPrice: null, image: 'images/product-images/mini-product-img2.jpg', id: 3 },
    { title: 'Border Dress in Black/Silver', price: '$228.00', oldPrice: null, image: 'images/product-images/mini-product-img3.jpg', id: 4 },
  ];

  const products = [
    { title: 'Edna Dress', price: '$600.00', oldPrice: '$500.00', image: 'images/product-images/product-image1.jpg', rating: 3, id: 1 },
    { title: 'Elastic Waist Dress', price: '$748.00', oldPrice: null, image: 'images/product-images/product-image2.jpg', rating: 5, id: 2 },
    { title: '3/4 Sleeve Kimono Dress', price: '$550.00', oldPrice: null, image: 'images/product-images/product-image3.jpg', rating: 4, id: 3 },
    { title: 'Cape Dress', price: '$788.00', oldPrice: '$900.00', image: 'images/product-images/product-image4.jpg', rating: 2, id: 4 },
    // Add more products as necessary
  ];

  return (
    <>
      <div className="collection-header">
        <div className="collection-hero">
          <div className="collection-hero__image">
            <img className="blur-up lazyload" data-src="images/cat-women2.jpg" src="images/cat-women2.jpg" alt="Women" title="Women" />
          </div>
          <div className="collection-hero__title-wrapper">
            <h1 className="collection-hero__title page-width">Products</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-2 sidebar filterbar">
            <div className="closeFilter d-block d-md-none d-lg-none"><i className="icon icon anm anm-times-l"></i></div>
            <div className="sidebar_tags">
              <div className="sidebar_widget categories filter-widget">
                <div className="widget-title"><h2>Categories</h2></div>
                <div className="widget-content">
                  <ul className="sidebar_categories">
                    {categories.map((category, idx) => (
                      <li key={idx} className="level1 sub-level">
                        <a href="#;" className="site-nav">{category.name}</a>
                        {category.subCategories.length > 0 && (
                          <ul className="sublinks">
                            {category.subCategories.map((subCategory, subIdx) => (
                              <li key={subIdx} className="level2"><a href="#;" className="site-nav">{subCategory}</a></li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="sidebar_widget filterBox filter-widget">
                <div className="widget-title"><h2>Price</h2></div>
                <form action="#" method="post" className="price-filter">
                  <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                    <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0}></span>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0}></span>
                  </div>
                  <div className="row">
                    <div className="col-6"><p className="no-margin"><input id="amount" type="text" /></p></div>
                    <div className="col-6 text-right margin-25px-top">
                      <button className="btn btn-secondary btn--small">filter</button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="sidebar_widget filterBox filter-widget size-swacthes">
                <div className="widget-title"><h2>Size</h2></div>
                <div className="filter-color swacth-list">
                  <ul>
                    {sizes.map((size, idx) => (
                      <li key={idx}><span className="swacth-btn">{size}</span></li>
                    ))}
                  </ul>
                </div>
              </div>


              <div className="sidebar_widget">
                <div className="widget-title"><h2>Popular Products</h2></div>
                <div className="widget-content">
                  <div className="list list-sidebar-products">
                    <div className="grid">
                      {popularProducts.map((product, idx) => (
                        <div key={idx} className="grid__item">
                          <div className="mini-list-item">
                            <div className="mini-view_image">
                              <Link className="grid-view-item__link" href={`/product/${product.id}`}>
                                <img className="grid-view-item__image" src={product.image} alt="" />
                              </Link>
                            </div>
                            <div className="details">
                              <Link className="grid-view-item__title" href={`/product/${product.id}`}>{product.title}</Link>
                              <div className="grid-view-item__meta">
                                <span className="product-price__price"><span className="money">{product.price}</span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Rest of your sidebar widgets */}
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-sm-12 col-md-9 col-lg-10 main-col">
            <div className="productList">
              <button type="button" className="btn btn-filter d-block d-md-none d-lg-none"> Product Filters</button>
              <div className="toolbar">
                <div className="filters-toolbar-wrapper">
                  <div className="row">
                    <div className="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
                      <a href="shop-left-sidebar.html" title="Grid View" className="change-view change-view--active">
                        <img src="images/grid.jpg" alt="Grid" />
                      </a>
                      <a href="shop-listview.html" title="List View" className="change-view">
                        <img src="images/list.jpg" alt="List" />
                      </a>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                      <span className="filters-toolbar__product-count">Showing: 22</span>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4 text-right">
                      <div className="filters-toolbar__item">
                        <label htmlFor="SortBy" className="hidden">Sort</label>
                        <select name="SortBy" id="SortBy" className="filters-toolbar__input filters-toolbar__input--sort" defaultValue="title-ascending">
                          <option value="title-ascending">Sort</option>
                          <option value="best-selling">Best Selling</option>
                          <option value="az">Alphabetically, A-Z</option>
                          <option value="za">Alphabetically, Z-A</option>
                          <option value="price-low-high">Price, low to high</option>
                          <option value="price-high-low">Price, high to low</option>
                          <option value="new-old">Date, new to old</option>
                          <option value="old-new">Date, old to new</option>
                        </select>
                        <input className="collection-header__default-sort" type="hidden" value="manual" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-products grid--view-items">
                <div className="row">
                  {products.map((product, idx) => (
                    <div key={idx} className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">
                      <div className="grid-view_image">
                        <Link href={`/product/${product.id}`} className="grid-view-item__link">
                          <img className="grid-view-item__image primary blur-up lazyload" data-src={product.image} src={product.image} alt="image" title="product" />
                          <img className="grid-view-item__image hover blur-up lazyload" data-src={product.image} src={product.image} alt="image" title="product" />
                          <div className="product-labels rectangular">
                            {product.oldPrice && <span className="lbl on-sale">-16%</span>}
                            <span className="lbl pr-label1">new</span>
                          </div>
                        </Link>

                        <div className="product-details hoverDetails text-center mobile">
                          <div className="product-name">
                            <a href="#">{product.title}</a>
                          </div>
                          <div className="product-price">
                            {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                            <span className="price">{product.price}</span>
                          </div>

                          <div className="product-review">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className={`font-13 fa fa-star${i < product.rating ? '' : '-o'}`}></i>
                            ))}
                          </div>

                          <div className="button-set">
                            <a href="#content_quickview" title="Quick View" className="quick-view-popup quick-view" tabIndex={0}>
                              <i className="icon anm anm-search-plus-r"></i>
                            </a>
                            <form action="#" method="post">
                              <button className="btn btn--secondary cartIcon btn-addto-cart" type="button">
                                <i className="icon anm anm-bag-l"></i>
                              </button>
                            </form>
                            <div className="wishlist-btn">
                              <a className="wishlist add-to-wishlist" href="#" title="Add to Wishlist">
                                <i className="icon anm anm-heart-l"></i>
                              </a>
                            </div>
                            <div className="compare-btn">
                              <a className="compare add-to-compare" href="compare.html" title="Add to Compare">
                                <i className="icon anm anm-random-r"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
