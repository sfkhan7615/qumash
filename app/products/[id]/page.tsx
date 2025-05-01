"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { getProductById } from "@/lib/products"
import ProductImageGallery from "@/components/products/product-image-gallery"
import RelatedProducts from "@/components/products/related-products"

export default function ProductPage() {
  const params = useParams()
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("m")
  const [selectedColor, setSelectedColor] = useState("black")

  // In a real app, this would fetch from an API
  const product = getProductById(params.id as string)

  if (!product) {
    return <div className="container mx-auto px-4 py-20 text-center">Product not found</div>
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedOptions: {
        size: selectedSize,
        color: selectedColor,
      },
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
        {/* Product Images */}
        <ProductImageGallery images={product.images} />

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < product.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

          <div className="space-y-4">
            {/* Color Selection */}
            <div>
              <h3 className="mb-2 font-medium">Color</h3>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex gap-2">
                {["black", "white", "blue", "red"].map((color) => (
                  <div key={color} className="flex items-center gap-2">
                    <RadioGroupItem id={`color-${color}`} value={color} className="peer sr-only" />
                    <Label
                      htmlFor={`color-${color}`}
                      className="flex cursor-pointer items-center gap-2 rounded-md border border-input px-3 py-2 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                    >
                      <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: color }} />
                      <span className="capitalize">{color}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="mb-2 font-medium">Size</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                {["xs", "s", "m", "l", "xl"].map((size) => (
                  <div key={size} className="flex items-center gap-2">
                    <RadioGroupItem id={`size-${size}`} value={size} className="peer sr-only" />
                    <Label
                      htmlFor={`size-${size}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-input peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:font-medium"
                    >
                      <span className="uppercase">{size}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="mb-2 font-medium">Quantity</h3>
              <div className="flex h-10 w-32 items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-full rounded-r-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <div className="flex h-full flex-1 items-center justify-center border-y">{quantity}</div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-full rounded-l-none"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button size="lg" className="mt-2" onClick={handleAddToCart}>
            Add to Cart
          </Button>

          {/* Shipping & Returns */}
          <div className="mt-4 grid grid-cols-2 gap-4 rounded-lg border p-4">
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Secure Payment</h4>
                <p className="text-sm text-muted-foreground">Encrypted transactions</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RotateCcw className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Easy Returns</h4>
                <p className="text-sm text-muted-foreground">30 day return policy</p>
              </div>
            </div>
          </div>

          {/* Product Description Tabs */}
          <Tabs defaultValue="description" className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <div className="prose max-w-none">
                <p>{product.description}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 border-b pb-2">
                  <span className="font-medium">Material</span>
                  <span>100% Cotton</span>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b pb-2">
                  <span className="font-medium">Care</span>
                  <span>Machine wash cold</span>
                </div>
                <div className="grid grid-cols-2 gap-2 border-b pb-2">
                  <span className="font-medium">Origin</span>
                  <span>Imported</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-lg font-medium">4.8 out of 5</span>
                </div>
                <p>Based on {product.reviewCount} reviews</p>

                {/* Sample Reviews */}
                <div className="mt-6 space-y-6">
                  <div className="space-y-2 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">John D.</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Verified Purchase</p>
                    <p>Great product! Exactly as described and very comfortable.</p>
                  </div>

                  <div className="space-y-2 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Sarah M.</h4>
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                        <Star className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Verified Purchase</p>
                    <p>Good quality for the price. Shipping was fast too!</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">You May Also Like</h2>
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  )
}
