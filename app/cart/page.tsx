"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"

export default function CartPage() {
  const router = useRouter()
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState("")

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  const handleCheckout = () => {
    // In a real app, this would navigate to a checkout page
    // or initiate a checkout flow
    router.push("/checkout")
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
        <h1 className="mb-2 text-2xl font-bold">Your cart is empty</h1>
        <p className="mb-8 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Cart Items */}
          <div className="rounded-lg border">
            <div className="grid grid-cols-12 gap-4 p-4 font-medium text-muted-foreground">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <Separator />

            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedOptions?.color}-${item.selectedOptions?.size}`}>
                <div className="grid grid-cols-12 items-center gap-4 p-4">
                  <div className="col-span-6">
                    <div className="flex items-center gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                        <Image
                          src={item.images[0] || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">
                          <Link href={`/products/${item.id}`} className="hover:underline">
                            {item.name}
                          </Link>
                        </h3>
                        {item.selectedOptions && (
                          <div className="mt-1 text-sm text-muted-foreground">
                            {item.selectedOptions.color && (
                              <span className="capitalize">{item.selectedOptions.color}</span>
                            )}
                            {item.selectedOptions.color && item.selectedOptions.size && <span> / </span>}
                            {item.selectedOptions.size && (
                              <span className="uppercase">{item.selectedOptions.size}</span>
                            )}
                          </div>
                        )}
                        <button
                          onClick={() => removeFromCart(item)}
                          className="mt-1 flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-3 w-3" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 text-center">${item.price.toFixed(2)}</div>

                  <div className="col-span-2">
                    <div className="mx-auto flex h-9 w-24 items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-full rounded-r-none"
                        onClick={() => updateQuantity(item, Math.max(1, item.quantity - 1))}
                      >
                        -
                      </Button>
                      <div className="flex h-full flex-1 items-center justify-center border-y">{item.quantity}</div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-full rounded-l-none"
                        onClick={() => updateQuantity(item, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="col-span-2 text-right font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <Separator />
              </div>
            ))}

            <div className="flex justify-between p-4">
              <Button variant="outline" onClick={() => clearCart()}>
                Clear Cart
              </Button>
              <Button asChild variant="outline">
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-bold">Order Summary</h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <Separator />

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mt-6">
              <label htmlFor="promo-code" className="mb-2 block text-sm font-medium">
                Promo Code
              </label>
              <div className="flex gap-2">
                <Input
                  id="promo-code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter code"
                />
                <Button variant="outline">Apply</Button>
              </div>
            </div>

            {/* Checkout Button */}
            <Button className="mt-6 w-full" size="lg" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>

            {/* Payment Methods */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p className="mb-2">We accept the following payment methods:</p>
              <div className="flex justify-center gap-2">
                <div className="h-6 w-10 rounded bg-muted"></div>
                <div className="h-6 w-10 rounded bg-muted"></div>
                <div className="h-6 w-10 rounded bg-muted"></div>
                <div className="h-6 w-10 rounded bg-muted"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
