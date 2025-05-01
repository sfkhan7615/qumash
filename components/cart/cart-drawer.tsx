"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { useCart } from "./cart-context"

export default function CartDrawer({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { cart, updateQuantity, removeFromCart } = useCart()

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Cart ({cart.reduce((count, item) => count + item.quantity, 0)} items)
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center">
            <ShoppingCart className="mb-4 h-16 w-16 text-muted-foreground" />
            <h3 className="mb-1 text-lg font-medium">Your cart is empty</h3>
            <p className="mb-4 text-center text-sm text-muted-foreground">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild onClick={() => onOpenChange(false)}>
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedOptions?.color}-${item.selectedOptions?.size}`} className="mb-4">
                  <div className="flex gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                      <Image src={item.images[0] || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <Link
                          href={`/products/${item.id}`}
                          className="font-medium hover:underline"
                          onClick={() => onOpenChange(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </button>
                      </div>

                      {item.selectedOptions && (
                        <div className="mt-1 text-sm text-muted-foreground">
                          {item.selectedOptions.color && (
                            <span className="capitalize">{item.selectedOptions.color}</span>
                          )}
                          {item.selectedOptions.color && item.selectedOptions.size && <span> / </span>}
                          {item.selectedOptions.size && <span className="uppercase">{item.selectedOptions.size}</span>}
                        </div>
                      )}

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQuantity(item, Math.max(1, item.quantity - 1))}
                            className="flex h-6 w-6 items-center justify-center rounded-full border hover:bg-muted"
                          >
                            -
                          </button>
                          <span className="w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item, item.quantity + 1)}
                            className="flex h-6 w-6 items-center justify-center rounded-full border hover:bg-muted"
                          >
                            +
                          </button>
                        </div>

                        <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                </div>
              ))}
            </div>

            <SheetFooter className="flex-col gap-4 sm:flex-col">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">Subtotal</span>
                <span className="text-lg font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-muted-foreground">Shipping and taxes calculated at checkout</p>
              <div className="grid w-full gap-2">
                <Button asChild onClick={() => onOpenChange(false)}>
                  <Link href="/cart">View Cart</Link>
                </Button>
                <Button asChild variant="default" onClick={() => onOpenChange(false)}>
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
