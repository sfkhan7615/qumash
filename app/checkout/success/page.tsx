import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function OrderSuccessPage() {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0")}`

  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
        <CheckCircle className="h-12 w-12 text-primary" />
      </div>

      <h1 className="mb-2 text-3xl font-bold">Order Confirmed!</h1>
      <p className="mb-2 text-xl">Thank you for your purchase</p>
      <p className="mb-8 text-muted-foreground">Your order #{orderNumber} has been placed and is being processed.</p>

      <div className="mb-8 w-full max-w-md rounded-lg border p-6">
        <h2 className="mb-4 text-xl font-semibold">Order Details</h2>
        <div className="grid gap-2 text-left">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Order Number:</span>
            <span className="font-medium">{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Date:</span>
            <span className="font-medium">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Email:</span>
            <span className="font-medium">customer@example.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Payment Method:</span>
            <span className="font-medium">Credit Card</span>
          </div>
        </div>
      </div>

      <p className="mb-6 text-muted-foreground">
        We've sent a confirmation email with the order details and tracking information.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/orders">View My Orders</Link>
        </Button>
      </div>
    </div>
  )
}
