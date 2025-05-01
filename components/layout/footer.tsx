import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Shop */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/men" className="text-muted-foreground hover:text-foreground">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/categories/women" className="text-muted-foreground hover:text-foreground">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/categories/kids" className="text-muted-foreground hover:text-foreground">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/categories/accessories" className="text-muted-foreground hover:text-foreground">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/categories/sale" className="text-muted-foreground hover:text-foreground">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-muted-foreground hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/customer-service" className="text-muted-foreground hover:text-foreground">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-muted-foreground hover:text-foreground">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-foreground">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-foreground">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Stay Updated</h3>
            <p className="mb-4 text-muted-foreground">
              Subscribe to our newsletter to receive updates on new arrivals, special offers and other discount
              information.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email address" className="bg-background" />
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>

          <div className="text-center text-sm text-muted-foreground md:text-right">
            <p>&copy; {new Date().getFullYear()} NextCommerce. All rights reserved.</p>
            <div className="mt-1 flex gap-4 md:justify-end">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
