"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type CartItem = {
  id: string
  name: string
  price: number
  images: string[]
  quantity: number
  selectedOptions?: {
    color?: string
    size?: string
    [key: string]: string | undefined
  }
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  updateQuantity: (item: CartItem, quantity: number) => void
  removeFromCart: (item: CartItem) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      // Check if item with same ID and options already exists
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.id === newItem.id && JSON.stringify(item.selectedOptions) === JSON.stringify(newItem.selectedOptions),
      )

      if (existingItemIndex !== -1) {
        // Update quantity of existing item
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex].quantity += newItem.quantity
        return updatedCart
      } else {
        // Add new item to cart
        return [...prevCart, newItem]
      }
    })
  }

  const updateQuantity = (item: CartItem, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (
          cartItem.id === item.id &&
          JSON.stringify(cartItem.selectedOptions) === JSON.stringify(item.selectedOptions)
        ) {
          return { ...cartItem, quantity }
        }
        return cartItem
      }),
    )
  }

  const removeFromCart = (item: CartItem) => {
    setCart((prevCart) =>
      prevCart.filter(
        (cartItem) =>
          !(
            cartItem.id === item.id && JSON.stringify(cartItem.selectedOptions) === JSON.stringify(item.selectedOptions)
          ),
      ),
    )
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
