"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Phone,
  MessageCircle,
  Calculator,
   X,
  PiggyBank,
  Menu,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
    const [interestRate, setInterestRate] = useState(10);
  const [loanAmount, setLoanAmount] = useState(1000000);

  const [tenureType, setTenureType] = useState("months");
      const [showEMICalculator, setShowEMICalculator] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [tenure, setTenure] = useState(12);
  const calculateEMI = () => {
    const principal = loanAmount
    const rate = interestRate / 100 / 12
    const months = tenureType === "years" ? tenure * 12 : tenure

    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1)
    const totalAmount = emi * months
    const totalInterest = totalAmount - principal

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
    }
  }

  const { emi, totalInterest, totalAmount } = calculateEMI();

  const scrollToContact = () => {
    window.location.href = "/#contact-section"
  };

  useEffect(() => {
    const handleOpenEmi = () => setShowEMICalculator(true)
    window.addEventListener("open-emi-calculator", handleOpenEmi as EventListener)
    return () => {
      window.removeEventListener("open-emi-calculator", handleOpenEmi as EventListener)
    }
  }, [])

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center">
                <img
                  src="/images/pennyfarm-logo.png"
                  alt="Penny Farm Finance Logo"
                  className="h-14 w-auto"
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About us
              </Link>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <button
                onClick={scrollToContact}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowEMICalculator(true)}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Calculator className="w-4 h-4 mr-2" />
                EMI Calculator
              </Button>
            </nav>

            <div className="hidden md:flex items-center space-x-2">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('tel:+919664982919', '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                onClick={() => window.open('https://wa.me/919664982919', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {showMobileMenu && (
            <div className="md:hidden mt-4 pb-4 border-t border-border animate-slide-in-right">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/products"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Products
                </Link>
                <button
                  onClick={() => {
                    scrollToContact();
                    setShowMobileMenu(false);
                  }}
                  className="text-foreground hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setShowEMICalculator(true);
                    setShowMobileMenu(false);
                  }}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  EMI Calculator
                </Button>
                <div className="flex flex-col space-y-2 pt-2">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit"
                    onClick={() => window.open('tel:+919664982919', '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent w-fit"
                    onClick={() => window.open('https://wa.me/919664982919', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
      {showEMICalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>EMI Calculator</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowEMICalculator(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Loan Amount (₹)</label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md text-base"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md text-base"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Tenure</label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="flex-1 px-3 py-2 border border-border rounded-md text-base"
                  />
                  <select
                    value={tenureType}
                    onChange={(e) => setTenureType(e.target.value)}
                    className="px-3 py-2 border border-border rounded-md text-base"
                  >
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between">
                  <span>EMI:</span>
                  <span className="font-semibold text-primary">
                    ₹{emi.toLocaleString()} INR
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total Interest Payable:</span>
                  <span className="font-semibold">
                    ₹{totalInterest.toLocaleString()} INR
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total of Payments:</span>
                  <span className="font-semibold">
                    ₹{totalAmount.toLocaleString()} INR
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Header;
