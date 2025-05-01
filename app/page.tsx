import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import FeaturedProducts from "@/components/products/featured-products"
import CategoryGrid from "@/components/categories/category-grid"
import HeroCarousel from "@/components/home/hero-carousel"
import PromoSection from "@/components/home/promo-section"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section with Carousel */}
      <HeroCarousel />

      {/* Search Bar */}
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-3xl">
          <div className="flex items-center rounded-lg border bg-background shadow-sm">
            <Input
              type="search"
              placeholder="Search for products..."
              className="border-0 shadow-none focus-visible:ring-0"
            />
            <Button size="sm" className="absolute right-1">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Shop by Category</h2>
        <CategoryGrid />
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Featured Products</h2>
        <FeaturedProducts />
      </div>

      {/* Promotions */}
      <PromoSection />
    </div>
  )
}
