"use client"

import { Button } from "@/components/ui/button"
import { Calculator, Phone, MessageCircle } from "lucide-react"

export default function MobileActions() {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
      <div className="flex justify-center items-center gap-3 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg">
        <Button
          size="lg"
          className="w-14 h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
          onClick={() => window.dispatchEvent(new Event("open-emi-calculator"))}
        >
          <Calculator className="w-6 h-6" />
        </Button>
        <Button
          size="lg"
          className="w-14 h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
          onClick={() => (window.location.href = 'tel:+919664982919')}
        >
          <Phone className="w-6 h-6" />
        </Button>
        <Button
          size="lg"
          className="w-14 h-14 rounded-xl bg-green-500 hover:bg-green-600 text-white shadow-xl"
          onClick={() => (window.location.href = 'https://wa.me/919664982919')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
