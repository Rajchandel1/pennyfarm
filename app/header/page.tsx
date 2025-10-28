"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import {
  Phone,
  MessageCircle,
  Calculator,
  X,
  PiggyBank,
  Menu,
  TrendingUp,

} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
                  Services
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
     {/* Enhanced EMI Calculator Modal */}
{showEMICalculator && (
  <div className="scrollbar-hide fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4" >
    <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-auto">
      <div className="relative p-4 sm:p-6 border-b bg-gradient-to-r from-[#E6A000] to-[#E6A001]/80">
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowEMICalculator(false)}
            className="text-white hover:bg-white/20 h-8 w-8 sm:h-10 sm:w-10"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-3 pr-12">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E6A000]/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-[#E6A000]" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-white truncate">EMI Calculator</h2>
            <p className="text-xs sm:text-sm text-white/80">Calculate your monthly EMI</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#000058]">Loan Amount (₹)</label>
          <div className="relative">
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full px-3 py-2 pr-12 border border-[#E6A000]/30 rounded-md focus:border-[#E6A000] focus:outline-none"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>1 Lac</span>
            <span>1 Cr</span>
          </div>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="100000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #E6A000 0%, #E6A000 ${((loanAmount - 100000) / (10000000 - 100000)) * 100}%, #e5e7eb ${((loanAmount - 100000) / (10000000 - 100000)) * 100}%, #e5e7eb 100%)`
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#000058]">Interest Rate (%)</label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-3 py-2 pr-8 border border-[#E6A000]/30 rounded-md focus:border-[#E6A000] focus:outline-none"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>5%</span>
            <span>20%</span>
          </div>
          <input
            type="range"
            min="5"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #E6A000 0%, #E6A000 ${((interestRate - 5) / (20 - 5)) * 100}%, #e5e7eb ${((interestRate - 5) / (20 - 5)) * 100}%, #e5e7eb 100%)`
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#000058]">Loan Tenure</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="flex-1 px-3 py-2 border border-[#E6A000]/30 rounded-md focus:border-[#E6A000] focus:outline-none"
            />
            <select
              value={tenureType}
              onChange={(e) => setTenureType(e.target.value)}
              className="px-3 py-2 border border-[#E6A000]/30 rounded-md focus:border-[#E6A000] focus:outline-none sm:w-auto w-full"
            >
              <option value="months">Months</option>
              <option value="years">Years</option>
            </select>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>1 {tenureType === "months" ? "Month" : "Year"}</span>
            <span>{tenureType === "months" ? "36 Months" : "30 Years"}</span>
          </div>
          <input
            type="range"
            min="1"
            max={tenureType === "months" ? "36" : "30"}
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #E6A000 0%, #E6A000 ${((tenure - 1) / ((tenureType === "months" ? 36 : 30) - 1)) * 100}%, #e5e7eb ${((tenure - 1) / ((tenureType === "months" ? 36 : 30) - 1)) * 100}%, #e5e7eb 100%)`
            }}
          />
        </div>

        <div className="bg-gradient-to-r from-[#000058]/5 to-[#E6A000]/5 p-4 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Monthly EMI:</span>
            <span className="text-xl font-bold text-[#000058]">₹{emi.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Interest:</span>
            <span className="text-lg font-semibold text-[#E6A000]">₹{totalInterest.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t">
            <span className="text-sm text-gray-600">Total Amount:</span>
            <span className="text-lg font-semibold text-[#000058]">₹{totalAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="text-center p-3 bg-[#E6A000]/10 rounded-lg">
            <TrendingUp className="w-5 h-5 text-[#E6A000] mx-auto mb-1" />
            <div className="text-xs text-gray-600">Low Interest</div>
            <div className="text-sm font-bold text-[#000058]">8.5%+</div>
          </div>
          <div className="text-center p-3 bg-[#E6A000]/10 rounded-lg">
            <PiggyBank className="w-5 h-5 text-[#E6A000] mx-auto mb-1" />
            <div className="text-xs text-gray-600">Quick Approval</div>
            <div className="text-sm font-bold text-[#000058]">24-48h</div>
          </div>
          <div className="text-center p-3 bg-[#E6A000]/10 rounded-lg sm:col-span-1 col-span-1">
            <Calculator className="w-5 h-5 text-[#E6A000] mx-auto mb-1" />
            <div className="text-xs text-gray-600">EMI Options</div>
            <div className="text-sm font-bold text-[#000058]">Flexible</div>
          </div>
        </div>

        {/* <div className="flex gap-3 pt-2">
          <Button
            className="flex-1 bg-[#E6A000] hover:bg-[#E6A000]/90 text-white"
            onClick={() => window.open('tel:+919664982919', '_self')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Expert
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
            onClick={() => window.open('https://wa.me/919664982919', '_blank')}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div> */}
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default Header;
