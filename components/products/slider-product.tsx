"use client"

import Image from "next/image"
import { useState } from "react"

// Sample products for each category
const products = [
  {
    id: 1,
    name: "Edna Dress",
    oldPrice: "$500.00",
    price: "$600.00",
    image: "/images/product-images/product-image1.jpg",
    hoverImage: "/images/product-images/product-image1-1.jpg",
    discount: 16,
    rating: 3,
    variants: ["/images/product-images/variant1.jpg", "/images/product-images/variant2.jpg"],
    link: "/products/"
  },
  {
    id: 2,
    name: "Elastic Waist Dress",
    price: "$748.00",
    image: "/images/product-images/product-image2.jpg",
    hoverImage: "/images/product-images/product-image2-1.jpg",
    rating: 5,
    discount: 16,
    variants: ["/images/product-images/variant2-1.jpg", "/images/product-images/variant2-2.jpg"],
    link: "/products/"
  },
  {
    id: 3,
    name: "3/4 Sleeve Kimono Dress",
    price: "$550.00",
    image: "/images/product-images/product-image3.jpg",
    hoverImage: "/images/product-images/product-image3-1.jpg",
    rating: 4,
    variants: ["/images/product-images/variant3-1.jpg", "/images/product-images/variant2.jpg"],
    link: "/products/"
  },
  {
    id: 4,
    name: "3/4 Sleeve Kimono Dress",
    price: "$550.00",
    image: "/images/product-images/product-image4.jpg",
    hoverImage: "/images/product-images/product-image4-1.jpg",
    rating: 4,
    variants: ["/images/product-images/variant4-1.jpg", "/images/product-images/variant2-2.jpg"],
    link: "/products/"
  },
  {
    id: 5,
    name: "3/4 Sleeve Kimono Dress",
    price: "$550.00",
    image: "/images/product-images/product-image5.jpg",
    hoverImage: "/images/product-images/product-image5-1.jpg",
    rating: 4,
    variants: ["/images/product-images/variant5-1.jpg", "/images/product-images/variant2.jpg"],
    link: "/products/"
  },
]

export default function SliderProduct() {
  const [activeTab, setActiveTab] = useState("women")
  const [color, setColor] = useState('Red');
  const [size, setSize] = useState('XS');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 1 : value);
  };

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleSubmit = () => {
    const payload = {
      color,
      size,
      quantity,
    };
    console.log('Form Submitted:', payload);
    // TODO: Post this data to server
  };// State for active tab

  // Function to switch tabs
  const switchTab = (tab: string) => {
    console.log(tab)
    setActiveTab(tab)
  }

  return (
    <div className="tab-slider-product section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="h2">New Arrivals</h2>
              <p>Browse the huge variety of our products</p>
            </div>
            <div className="tabs-listing">
              {/* <ul className="tabs clearfix">
                <li className={activeTab === "women" ? "active" : ""} onClick={() => switchTab("women")}>
                  Women
                </li>
                <li className={activeTab === "men" ? "active" : ""} onClick={() => switchTab("men")}>
                  Men
                </li>
                <li className={activeTab === "sale" ? "active" : ""} onClick={() => switchTab("sale")}>
                  Sale
                </li>
              </ul> */}
              <div className="tab_container">
                {/* Women Tab */}
                <div id="tab1" className={`tab_content grid-products`}>
                  <div className="productSlider">
                    {products.map((product) => (
                      <div key={product.id} className="col-12 item">
                        <div className="product-image">
                          <a href={product.link+product.id}>
                            <Image className="primary blur-up lazyload" data-src={product.image} src={product.image} width={500} height={500} alt={product.name} title={product.name} />
                            <Image className="hover blur-up lazyload" data-src={product.hoverImage} src={product.hoverImage} width={500} height={500} alt={product.name} title={product.name} />
                          </a>
                          <div className="product-labels rectangular">
                            <span className="lbl on-sale">{product.discount}% OFF</span>
                          </div>
                        </div>
                        <form className="variants add" action="#" method="post">
                          <button className="btn btn-addto-cart" type="button" tabIndex={0}>Add To Cart</button>
                        </form>
                        <div className="button-set">
                          <a href="#" title="Quick View" className="quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="#">
                              <i className="icon anm anm-heart-l"></i>
                            </a>
                          </div>
                          <div className="compare-btn">
                            <a className="compare add-to-compare" href="compare.html" title="Add to Compare">
                              <i className="icon anm anm-random-r"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-details text-center">
                          <div className="product-name">
                            <a href={product.link}>{product.name}</a>
                          </div>
                          <div className="product-price">
                            {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                            <span className="price">{product.price}</span>
                          </div>
                          <div className="product-review">
                            {[...Array(5)].map((_, index) => (
                              <i key={index} className={`font-13 fa fa-star${index < product.rating ? '' : '-o'}`}></i>
                            ))}
                          </div>
                          <ul className="swatches">
                            {product.variants.map((variant, index) => (
                              <li key={index} className="swatch medium rounded">
                                <img src={variant} alt="variant" />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              <div className="modal fade quick-view-popup" id="content_quickview">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div id="ProductSection-product-template" className="product-template__container prstyle1">
                        <div className="product-single">
                          <a href="javascript:void()" data-dismiss="modal" className="model-close-btn pull-right"
                            title="close"><span className="icon icon anm anm-times-l"></span></a>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                              <div className="product-details-img">
                                <div className="pl-20">
                                  <img src="images/product-detail-page/camelia-reversible-big1.jpg"
                                    alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                              <div className="product-single__meta">
                                <h2 className="product-single__title">Product Quick View Popup</h2>
                                <div className="prInfoRow">
                                  <div className="product-stock"> <span className="instock ">In Stock</span> <span
                                    className="outstock hide">Unavailable</span> </div>
                                  <div className="product-sku">SKU: <span
                                    className="variant-sku">19115-rdxs</span></div>
                                </div>
                                <p className="product-single__price product-single__price-product-template">
                                  <span className="visually-hidden">Regular price</span>
                                  <s id="ComparePrice-product-template"><span
                                    className="money">$600.00</span></s>
                                  <span
                                    className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                                    <span id="ProductPrice-product-template"><span
                                      className="money">$500.00</span></span>
                                  </span>
                                </p>
                                <div className="product-single__description rte">
                                  Belle Multipurpose Bootstrap 4 Html Template that will give you and your
                                  customers a smooth shopping experience which can be used for various
                                  kinds of stores such as fashion,...
                                </div>

                                <form
                                  method="post"
                                  action="http://annimexweb.com/cart/add"
                                  id="product_form_10508262282"
                                  className="product-form product-form-product-template hidedropdown"
                                  encType="multipart/form-data"
                                  acceptCharset="UTF-8"
                                >
                                  <div className="swatch clearfix swatch-0 option1" data-option-index="0">
                                    <div className="product-form__item">
                                      <label className="header">
                                        Color: <span className="slVariant">{color}</span>
                                      </label>

                                      {['Red', 'Blue', 'Green', 'Gray'].map((col, i) => (
                                        <div key={col} data-value={col} className={`swatch-element color ${col.toLowerCase()} available`}>
                                          <input
                                            className="swatchInput"
                                            id={`swatch-0-${col.toLowerCase()}`}
                                            type="radio"
                                            name="option-0"
                                            value={col}
                                            checked={color === col}
                                            onChange={() => setColor(col)}
                                          />
                                          <label
                                            className="swatchLbl color medium rectangle"
                                            htmlFor={`swatch-0-${col.toLowerCase()}`}
                                            style={{
                                              backgroundImage: `url(images/product-detail-page/variant1-${i + 1}.jpg)`,
                                            }}
                                            title={col}
                                          ></label>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="swatch clearfix swatch-1 option2" data-option-index="1">
                                    <div className="product-form__item">
                                      <label className="header">
                                        Size: <span className="slVariant">{size}</span>
                                      </label>

                                      {['XS', 'S', 'M', 'L'].map((s) => (
                                        <div key={s} data-value={s} className={`swatch-element ${s.toLowerCase()} available`}>
                                          <input
                                            className="swatchInput"
                                            id={`swatch-1-${s.toLowerCase()}`}
                                            type="radio"
                                            name="option-1"
                                            value={s}
                                            checked={size === s}
                                            onChange={() => setSize(s)}
                                          />
                                          <label
                                            className="swatchLbl medium rectangle"
                                            htmlFor={`swatch-1-${s.toLowerCase()}`}
                                            title={s}
                                          >
                                            {s}
                                          </label>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="product-action clearfix">
                                    <div className="product-form__item--quantity">
                                      <div className="wrapQtyBtn">
                                        <div className="qtyField">
                                          <a className="qtyBtn minus" onClick={decreaseQty} role="button">
                                            <i className="fa anm anm-minus-r" aria-hidden="true"></i>
                                          </a>
                                          <input
                                            type="text"
                                            id="Quantity"
                                            name="quantity"
                                            className="product-form__input qty"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                          />
                                          <a className="qtyBtn plus" onClick={increaseQty} role="button">
                                            <i className="fa anm anm-plus-r" aria-hidden="true"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="product-form__item--submit">
                                      <button
                                        type="button"
                                        name="add"
                                        className="btn product-form__cart-submit"
                                        onClick={handleSubmit}
                                      >
                                        <span>Add to cart</span>
                                      </button>
                                    </div>
                                  </div>
                                </form>
                                <div className="display-table shareRow">
                                  <div className="display-table-cell">
                                    <div className="wishlist-btn">
                                      <a className="wishlist add-to-wishlist" href="#"
                                        title="Add to Wishlist"><i className="icon anm anm-heart-l"
                                          aria-hidden="true"></i> <span>Add to Wishlist</span></a>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
