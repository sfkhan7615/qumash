"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Search, Menu, X, Heart, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart/cart-context"
import CartDrawer from "@/components/cart/cart-drawer"

const categories = [
  { name: "Men", href: "/categories/men" },
  { name: "Women", href: "/categories/women" },
  { name: "Kids", href: "/categories/kids" },
  { name: "Accessories", href: "/categories/accessories" },
  { name: "Sale", href: "/categories/sale" },
]

export default function Header() {
  const pathname = usePathname()
  const { cart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartItemsCount = cart.reduce((count, item) => count + item.quantity, 0)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        isScrolled ? "bg-background/80 shadow-sm backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar - Mobile Search */}
        {isMobileSearchOpen && (
          <div className="flex items-center gap-2 py-2 lg:hidden">
            <Input type="search" placeholder="Search for products..." className="flex-1" />
            <Button size="icon" variant="ghost" onClick={() => setIsMobileSearchOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        )}

        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="text-xl font-bold"
                    onClick={() => document.body.classList.remove("overflow-hidden")}
                  >
                    NextCommerce
                  </Link>

                  <div className="mt-4 space-y-3">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className={`block rounded-md px-3 py-2 text-sm font-medium ${
                          pathname === category.href ? "bg-primary/10 text-primary" : "hover:bg-muted"
                        }`}
                        onClick={() => document.body.classList.remove("overflow-hidden")}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3">
                    <Link
                      href="/account"
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                      onClick={() => document.body.classList.remove("overflow-hidden")}
                    >
                      <User className="h-4 w-4" />
                      My Account
                    </Link>
                    <Link
                      href="/orders"
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                      onClick={() => document.body.classList.remove("overflow-hidden")}
                    >
                      <Package className="h-4 w-4" />
                      Orders
                    </Link>
                    <Link
                      href="/wishlist"
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                      onClick={() => document.body.classList.remove("overflow-hidden")}
                    >
                      <Heart className="h-4 w-4" />
                      Wishlist
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/" className="text-xl font-bold lg:text-2xl">
            NextCommerce
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`text-sm font-medium ${
                  pathname === category.href ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search - Desktop */}
            <div className="hidden lg:block">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>

            {/* Search - Mobile */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge
                  className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs"
                  variant="destructive"
                >
                  {cartItemsCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  )
}
