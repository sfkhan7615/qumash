"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCart } from "@/components/cart/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { CreditCard, ShoppingBag } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { cart, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()

    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Clear cart and redirect to success page
    clearCart()

    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase.",
    })

    router.push("/checkout/success")
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
        <h1 className="mb-2 text-2xl font-bold">Your cart is empty</h1>
        <p className="mb-8 text-muted-foreground">You need to add items to your cart before checking out.</p>
        <Button asChild>
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmitOrder}>
            {/* Contact Information */}
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" required />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mt-8 rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Shipping Address</h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                  <Input id="apartment" />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State / Province</Label>
                    <Input id="state" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="postal-code">Postal Code</Label>
                    <Input id="postal-code" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="United States" required />
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="mt-8 rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Shipping Method</h2>
              <RadioGroup defaultValue="standard">
                <div className="flex items-start space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="standard" id="standard" className="mt-1" />
                  <div className="grid gap-1">
                    <Label htmlFor="standard" className="font-medium">
                      Standard Shipping
                    </Label>
                    <p className="text-sm text-muted-foreground">Delivery in 3-5 business days</p>
                    <p className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</p>
                  </div>
                </div>
                <div className="mt-2 flex items-start space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="express" id="express" className="mt-1" />
                  <div className="grid gap-1">
                    <Label htmlFor="express" className="font-medium">
                      Express Shipping
                    </Label>
                    <p className="text-sm text-muted-foreground">Delivery in 1-2 business days</p>
                    <p className="font-medium">$19.99</p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Payment */}
            <div className="mt-8 rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Payment</h2>
              <Tabs defaultValue="credit-card">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                  <TabsTrigger value="paypal">PayPal</TabsTrigger>
                </TabsList>
                <TabsContent value="credit-card" className="mt-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="name-on-card">Name on Card</Label>
                      <Input id="name-on-card" required />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="paypal" className="mt-4">
                  <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8">
                    <p className="mb-4 text-center text-muted-foreground">
                      You will be redirected to PayPal to complete your purchase securely.
                    </p>
                    <Button type="button" variant="outline" className="w-full max-w-sm">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Continue with PayPal
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mt-8 flex justify-between">
              <Button asChild variant="outline">
                <Link href="/cart">Return to Cart</Link>
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Place Order"}
              </Button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="sticky top-20 rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-bold">Order Summary</h2>

            <div className="max-h-[300px] overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.selectedOptions?.color}-${item.selectedOptions?.size}`}
                  className="mb-4 flex gap-4"
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                      {item.quantity}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h4 className="font-medium">{item.name}</h4>
                    {item.selectedOptions && (
                      <p className="text-sm text-muted-foreground">
                        {item.selectedOptions.color && <span className="capitalize">{item.selectedOptions.color}</span>}
                        {item.selectedOptions.color && item.selectedOptions.size && <span> / </span>}
                        {item.selectedOptions.size && <span className="uppercase">{item.selectedOptions.size}</span>}
                      </p>
                    )}
                    <div className="mt-auto flex justify-between">
                      <span className="text-sm">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </span>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

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
          </div>
        </div>
      </div>
    </div>
  )
}
