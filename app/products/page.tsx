"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Header from "../header/page"
import Footer from "../footer/page"
import {
  ArrowRight,
  CheckCircle,
  Home,
  Car,
  Briefcase,
  CreditCard,
  TrendingUp,
  PiggyBank,
  Building,
  Shield,
  Calculator,
  Phone,
  MessageCircle,
  X,
} from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: "dropline-overdraft",
    image: "/images/dropline od.png",
    title: "Dropline Overdraft",
    description: "Combination of overdraft and term loan with reducing withdrawal limits over time.",
   
  },
  {
    id: "vendor-financing",
    image: "/images/vendor financing.png",
    title: "Vendor Financing",
    description: "Direct financing from sellers to facilitate purchases with flexible payment terms.",
    
  },
  {
    id: "factoring-limit",
    image: "/images/factoring limit.png",
    title: "Factoring Limit",
    description: "Convert your receivables into immediate cash with our factoring services.",
   
  },
  {
    id: "loan-against-property",
    image: "/images/lop.png",
    title: "Loan Against Property",
    description:
      "Unlock the value of your property with competitive rates and flexible terms. Perfect for business expansion, education, or personal needs.",
    
  },
  {
    id: "working-capital-demand-loan",
    image: "/images/wcdl.png",
    title: "Working Capital Demand Loan",
    description:
      "Maintain optimum working capital with flexible financing options for your business operational needs.",
    
  },
  {
    id: "bank-guarantee",
    image: "/images/bank guarantee.png",
    title: "Bank Guarantee",
    description:
      "Secure your business transactions with our reliable bank guarantee services for tenders and contracts.",
  
  },
  {
    id: "letter-of-credit",
    image: "/images/letter of credit.png",
    title: "Letter of Credit",
    description:
      "Facilitate international trade with our comprehensive letter of credit services ensuring secure transactions.",
   
  },
  {
    id: "business-loan",
    image: "/images/business loan.png",
    title: "Business Loan",
    description: "Fuel your business growth with quick and hassle-free business financing solutions.",
   
  },
  {
    id: "supply-chain-finance",
    image: "/images/supply chain finance.png",
    title: "Supply Chain Finance",
    description: "Optimize cash flow across your supply chain with early payment solutions for suppliers.",
   
  },
  {
    id: "personal-loan",
    image: "/images/personal loan.png",
    title: "Personal Loan",
    description: "Meet your personal financial needs with our instant personal loans with minimal documentation.",
   
  },
  {
    id: "home-loan",
    image: "/images/home loan.png",
    title: "Home Loan",
    description: "Make your dream home a reality with our attractive home loan offers and tax benefits.",
   
  },
  {
    id: "loan-against-securities",
    image: "/images/loan against securities.png",
    title: "Loan Against Securities",
    description: "Get instant liquidity against your investment portfolio without selling your securities.",
    
  },
  {
    id: "used-car-loan",
    image: "/images/ucl.png",
    title: "Used Car Loan",
    description: "Drive your dream car with our competitive used car financing options and quick approvals.",
   
  },
]

const categories = [
  "All Services",
  "Personal Finance",
  "Business Finance",
  "Home Finance",
  "Vehicle Finance",
  "Trade Finance",
  "Investment Finance",
  "Supply Chain",
  "Invoice Finance",
]

export default function ProductsPage() {
  const [showEMICalculator, setShowEMICalculator] = useState(false)
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(10)
  const [tenure, setTenure] = useState(12)
  const [tenureType, setTenureType] = useState("months")

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

  const { emi, totalInterest, totalAmount } = calculateEMI()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
     <Header/>

      {/* Hero Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Products</Badge>
          <h1 className="text-5xl font-bold mb-6">Comprehensive Financial Solutions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our wide range of loan products designed to meet every financial need. From personal loans to
            business financing, we have the right solution for you.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
              <Card
  key={product.id}
  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50 overflow-hidden relative"
>
  <div className="relative h-48 overflow-hidden">
    <img
      src={product.image} // Aap yahan appropriate image path use karein
      alt={product.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
    <div className="absolute bottom-4 left-4 right-4">
      <h3 className="text-xl font-bold text-white">{product.title}</h3>
    </div>
  </div>
  <CardHeader className="pt-4">
    <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      

      <div className="flex gap-2 pt-4">
        <Link href={`/products/${product.id}`} className="flex-1">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  </CardContent>
</Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our financial experts are here to help you find the perfect loan solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open('tel:+919664982919', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to Expert
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              onClick={() => setShowEMICalculator(true)}
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate EMI
            </Button>
          </div>
        </div>
      </section>

     <Footer />

      {/* EMI Calculator Modal */}
      {showEMICalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">EMI Calculator</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowEMICalculator(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Loan Amount (₹)</label>
                  <Input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    placeholder="Enter loan amount"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Interest Rate (%)</label>
                  <Input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    placeholder="Enter interest rate"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Loan Tenure</label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      placeholder="Enter tenure"
                    />
                    <select
                      value={tenureType}
                      onChange={(e) => setTenureType(e.target.value)}
                      className="px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="months">Months</option>
                      <option value="years">Years</option>
                    </select>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monthly EMI:</span>
                    <span className="font-semibold">₹{emi.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Interest:</span>
                    <span className="font-semibold">₹{totalInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Amount:</span>
                    <span className="font-semibold">₹{totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    className="flex-1"
                    onClick={() => window.open('tel:+919664982919', '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Expert
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open('https://wa.me/919664982919', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}