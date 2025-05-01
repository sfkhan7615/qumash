import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { getRelatedProducts } from "@/lib/products"

export default function RelatedProducts({ currentProductId }: { currentProductId: string }) {
  const products = getRelatedProducts(currentProductId)

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
              <span className="font-medium">${product.price.toFixed(2)}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
