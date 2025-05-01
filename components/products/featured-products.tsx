import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getFeaturedProducts } from "@/lib/products"

export default function FeaturedProducts() {
  const products = getFeaturedProducts()

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group relative flex flex-col overflow-hidden rounded-lg border bg-background transition-colors hover:bg-muted/40"
        >
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {product.isNew && <Badge className="absolute left-2 top-2">New</Badge>}
            {product.discount > 0 && (
              <Badge variant="destructive" className="absolute right-2 top-2">
                {product.discount}% OFF
              </Badge>
            )}
          </div>

          <div className="flex flex-1 flex-col p-4">
            <h3 className="font-medium group-hover:underline">{product.name}</h3>

            <div className="mt-1 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${i < product.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
            </div>

            <div className="mt-auto pt-3">
              {product.discount > 0 ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="font-medium text-destructive">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="font-medium">${product.price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
