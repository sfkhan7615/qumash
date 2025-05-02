"use client"

const slides = [
  {
    id: 1,
    image: "/images/slideshow-banners/belle-banner1.jpg",
    alt: "Shop Our New Collection",
    title: "Shop Our New Collection",
    subtitle: "From High to Low, classic or modern. We have you covered",
    cta: "Shop now",
    link: "/shop"
  },
  {
    id: 2,
    image: "/images/slideshow-banners/belle-banner2.jpg",
    alt: "Summer Bikini Collection",
    title: "Summer Bikini Collection",
    subtitle: "Save up to 50% off this weekend only",
    cta: "Shop now",
    link: "/summer-bikini"
  },
  // Add more slides here as needed
]

export default function HeroCarousel() {
  return (
    <div className="slideshow slideshow-wrapper pb-section sliderFull">
      <div className="home-slideshow">
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="blur-up lazyload bg-size">
              <img
                className="blur-up lazyload bg-img"
                data-src={slide.image}
                src={slide.image}
                alt={slide.alt}
                title={slide.title}
              />
              <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                <div className="slideshow__text-content bottom">
                  <div className="wrap-caption center">
                    <h2 className="h1 mega-title slideshow__title">{slide.title}</h2>
                    <span className="mega-subtitle slideshow__subtitle">{slide.subtitle}</span>
                    <a href={slide.link} className="btn">{slide.cta}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
