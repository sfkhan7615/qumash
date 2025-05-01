import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PromoSection() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {/* First Promo */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30" />
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Summer Sale"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8">
              <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">Summer Sale</h3>
              <p className="mb-4 max-w-xs text-white/90">Up to 50% off on summer essentials. Limited time offer.</p>
              <Button asChild variant="secondary">
                <Link href="/categories/sale">Shop Now</Link>
              </Button>
            </div>
          </div>

          {/* Second Promo */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30" />
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="New Collection"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8">
              <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">New Collection</h3>
              <p className="mb-4 max-w-xs text-white/90">Discover our latest arrivals for the upcoming season.</p>
              <Button asChild variant="secondary">
                <Link href="/new-arrivals">Explore</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Full Width Promo */}
        <div className="group relative mt-8 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Free Shipping"
            width={1200}
            height={300}
            className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[300px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-white md:text-4xl">Free Shipping on Orders Over $100</h3>
            <p className="mb-4 max-w-lg text-white/90 md:text-lg">
              Shop now and enjoy free shipping on all domestic orders over $100.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/products">Shop All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
