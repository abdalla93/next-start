"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ShoppingBasket, Plus, Minus, ArrowLeft } from "lucide-react"
import { Textarea } from "a/components/ui/textarea"
import { Label } from "a/components/ui/label"
import { Input } from "a/components/ui/input"
import { Button } from "a/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "a/components/ui/select"

interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CheckoutPage() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { id: 1, name: "Product 1", price: 19.99, quantity: 1, image: "/1690847554060579501.png" },
    { id: 2, name: "Product 2", price: 29.99, quantity: 1, image: "/1690849428006968575.png" },
  ])

  const [selectedDay, setSelectedDay] = useState<string>("")
  const [selectedMonth, setSelectedMonth] = useState<string>("")
  const [availableDays, setAvailableDays] = useState<number[]>([])

  const updateQuantity = (id: number, increment: number) => {
    setOrderItems(
      orderItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + increment) }
          : item
      )
    )
  }

  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  useEffect(() => {
    if (selectedMonth) {
      const currentYear = new Date().getFullYear()
      const daysInMonth = new Date(currentYear, parseInt(selectedMonth), 0).getDate()
      setAvailableDays(Array.from({ length: daysInMonth }, (_, i) => i + 1))
    }
  }, [selectedMonth])

  const handleBackToHome = () => {
    // Implement navigation to home page
    console.log("Navigating back to home")
  }

  const handleCancelOrder = () => {
    // Implement order cancellation logic
    console.log("Cancelling order")
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={handleBackToHome}
        className="mb-4 p-2 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="mr-2" />
        <span>Back to Home</span>
      </button>
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Customer Information</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Enter your address" />
            </div>
            <div>
              <Label>Date</Label>
              <div className="flex space-x-2">
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="w-[140px] bg-white">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month, index) => (
                      <SelectItem key={month} value={(index + 1).toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedDay} onValueChange={setSelectedDay}>
                  <SelectTrigger className="w-[110px] bg-white">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableDays.map((day) => (
                      <SelectItem key={day} value={day.toString()}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-4">
            <ShoppingBasket className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-semibold">Order Summary</h2>
          </div>
          <div className="space-y-4">
            {orderItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <span>{item.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                  <span className="w-20 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              className="w-full sm:w-1/2 bg-rose-100 hover:bg-rose-200 text-rose-700"
              onClick={handleCancelOrder}
            >
              Cancel Order
            </Button>
            <Button className="w-full sm:w-1/2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}