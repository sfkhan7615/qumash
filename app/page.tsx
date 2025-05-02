import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import FeaturedProducts from "@/components/products/featured-products"
import CategoryGrid from "@/components/categories/category-grid"
import HomeSlider from "@/components/home/home-slider"
import PromoSection from "@/components/home/promo-section"
import SliderProduct from "@/components/products/slider-product"
import LatestBlog from "@/components/blog/latest-blog"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section with Carousel */}
      <HomeSlider />
      <SliderProduct />

      {/* Categories Grid */}
      <div className="container mx-auto px-md-1">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Shop by Category</h2>
        <CategoryGrid />
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-md-1">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Featured Products</h2>
        <FeaturedProducts />
      </div>
      <LatestBlog />
    </div>
  )
}
