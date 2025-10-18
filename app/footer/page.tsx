// components/Footer.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  scrollToContact?: () => void
}

const Footer = ({ scrollToContact }: FooterProps) => {
  return (
   <>
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/pennyfarm-logo.png"
                alt="Penny Farm Finance Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Penny Farm Finance</span>
            </div>
            <p className="text-background/70 mb-4">
              Your trusted partner for all financial needs. We provide quick, reliable, and affordable loan solutions.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-600"
                onClick={() => window.open('https://wa.me/919664982919', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-background/20 text-background hover:bg-background hover:text-foreground bg-transparent"
                onClick={() => window.open('tel:+919664982919', '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <button onClick={scrollToContact} className="hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="/products/personal-loan" className="hover:text-primary transition-colors">
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link href="/products/business-loan" className="hover:text-primary transition-colors">
                  Business Loan
                </Link>
              </li>
              <li>
                <Link href="/products/home-loan" className="hover:text-primary transition-colors">
                  Home Loan
                </Link>
              </li>
              <li>
                <Link href="/products/loan-against-property" className="hover:text-primary transition-colors">
                  Loan Against Property
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-background/70">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91-96649 82919
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                pennyfarmfinance@gmail.com
              </p>
              <p className="flex items-start">
                <MapPin className="w-10 h-10 mr-2 mt-1" />
                623, Dev Atelier, 100 Feet Anand Nagar Rd, Prahlad Nagar, Ahmedabad, Gujarat 380015
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>&copy; 2024 Penny Farm Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
   </>
  )
}

export default Footer