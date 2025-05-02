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
    link: "/short-description.html"
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
    link: "/short-description.html"
  },
  {
    id: 3,
    name: "3/4 Sleeve Kimono Dress",
    price: "$550.00",
    image: "/images/product-images/product-image3.jpg",
    hoverImage: "/images/product-images/product-image3-1.jpg",
    rating: 4,
    variants: ["/images/product-images/variant3-1.jpg", "/images/product-images/variant2.jpg"],
    link: "/short-description.html"
  },
  {
    id: 4,
    name: "3/4 Sleeve Kimono Dress",
    price: "$550.00",
    image: "/images/product-images/product-image4.jpg",
    hoverImage: "/images/product-images/product-image4-1.jpg",
    rating: 4,
    variants: ["/images/product-images/variant4-1.jpg", "/images/product-images/variant2-2.jpg"],
    link: "/short-description.html"
  },
  {
    id: 5,
    name: "3/4 Sleeve Kimono Dress",
    price: "$550.00",
    image: "/images/product-images/product-image5.jpg",
    hoverImage: "/images/product-images/product-image5-1.jpg",
    rating: 4,
    variants: ["/images/product-images/variant5-1.jpg", "/images/product-images/variant2.jpg"],
    link: "/short-description.html"
  },
]

export default function SliderProduct() {
  const [activeTab, setActiveTab] = useState("women") // State for active tab

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
                          <a href={product.link}>
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
                          <a href="javascript:void(0)" title="Quick View" className="quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
                            <i className="icon anm anm-search-plus-r"></i>
                          </a>
                          <div className="wishlist-btn">
                            <a className="wishlist add-to-wishlist" href="wishlist.html">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
