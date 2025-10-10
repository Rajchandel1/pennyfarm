"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Header from "../header/page"
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
    title: "Dropline Overdraft",
    description: "Combination of overdraft and term loan with reducing withdrawal limits over time.",
    icon: Calculator,
    features: [
      "Withdrawal Limit Reduces Monthly",
      "Secured or Unsecured Options",
      "Interest on Daily Basis",
      "One-time Processing Fee",
      "No Monthly Repayments",
      "Flexible Operationalization",
      "No Yearly Renewal Charge",
    ],
    rate: "10.5% onwards",
    amount: "Up to ₹1 Cr",
    tenure: "Up to 5 years",
    processing: "1% to 2%",
    category: "Business Finance",
  },
  {
    id: "vendor-financing",
    title: "Vendor Financing",
    description: "Direct financing from sellers to facilitate purchases with flexible payment terms.",
    icon: Building,
    features: [
      "Direct Financing from Vendor",
      "Deferred Payment Options",
      "Interest Charges Apply",
      "Collateral May Be Required",
      "Short-Term Working Capital",
      "Flexible Terms",
      "Streamlined Process",
    ],
    rate: "11.5% onwards",
    amount: "Up to ₹2 Cr",
    tenure: "Up to 2 years",
    processing: "1% to 2%",
    category: "Trade Finance",
  },
  {
    id: "factoring-limit",
    title: "Factoring Limit",
    description: "Convert your receivables into immediate cash with our factoring services.",
    icon: CreditCard,
    features: [
      "Improved Cash Flow",
      "Reduced Administrative Burden",
      "Access to Finance",
      "Bad Debt Protection",
      "Quick Finance Arrangement",
      "No Security Required",
      "Focus on Core Business",
    ],
    rate: "12.5% onwards",
    amount: "Up to ₹5 Cr",
    tenure: "As per invoice terms",
    processing: "1% to 2.5%",
    category: "Invoice Finance",
  },
  {
    id: "loan-against-property",
    title: "Loan Against Property",
    description:
      "Unlock the value of your property with competitive rates and flexible terms. Perfect for business expansion, education, or personal needs.",
    icon: Home,
    features: [
      "Lower Interest Rates",
      "Higher Loan Amounts",
      "Flexible Usage of Funds",
      "Longer Repayment Tenure",
      "No Big Charges for Early Payment",
      "Easy Loan Approval",
      "Easier Monthly Payments",
    ],
    rate: "9.5% onwards",
    amount: "Up to ₹5 Cr",
    tenure: "Up to 20 years",
    processing: "0.5% to 2%",
    category: "Secured Loans",
    popular: true,
  },
  {
    id: "working-capital-demand-loan",
    title: "Working Capital Demand Loan",
    description:
      "Maintain optimum working capital with flexible financing options for your business operational needs.",
    icon: TrendingUp,
    features: [
      "Flexibility in Repayment",
      "Quick Access to Funds",
      "No Fixed Repayment Schedule",
      "Interest on Utilised Amount Only",
      "Easy Renewal Process",
      "Enhances Cash Flow",
      "Suitable for Short-term Needs",
    ],
    rate: "11% onwards",
    amount: "Up to ₹2 Cr",
    tenure: "Up to 3 years",
    processing: "1% to 2%",
    category: "Business Finance",
  },
  {
    id: "bank-guarantee",
    title: "Bank Guarantee",
    description:
      "Secure your business transactions with our reliable bank guarantee services for tenders and contracts.",
    icon: Shield,
    features: [
      "Financial Assurance",
      "Third-Party Liability",
      "Performance Guarantees",
      "Payment Guarantees",
      "Advance Payment Guarantees",
      "Bid Bond Guarantees",
      "Global Acceptance",
    ],
    rate: "0.5% to 2% per quarter",
    amount: "As per requirement",
    tenure: "As per contract",
    processing: "0.25% to 0.5%",
    category: "Trade Finance",
  },
  {
    id: "letter-of-credit",
    title: "Letter of Credit",
    description:
      "Facilitate international trade with our comprehensive letter of credit services ensuring secure transactions.",
    icon: Building,
    features: [
      "Payment Guarantee",
      "Documentary Nature",
      "Irrevocable Security",
      "Transferability Options",
      "International Trade Support",
      "Risk Mitigation",
      "Customizable Terms",
    ],
    rate: "0.75% to 2% per quarter",
    amount: "As per trade requirement",
    tenure: "As per shipment terms",
    processing: "0.5% to 1%",
    category: "Trade Finance",
  },
  {
    id: "business-loan",
    title: "Business Loan",
    description: "Fuel your business growth with quick and hassle-free business financing solutions.",
    icon: Briefcase,
    features: [
      "Access to Capital for Growth",
      "Managing Cash Flow",
      "Funding Strategic Investments",
      "Flexible Repayment Options",
      "Building Credit History",
      "Retaining Ownership",
      "Tax Benefits",
    ],
    rate: "12% onwards",
    amount: "Up to ₹50 Lakh",
    tenure: "Up to 5 years",
    processing: "1% to 3%",
    category: "Business Finance",
    popular: true,
  },
  {
    id: "supply-chain-finance",
    title: "Supply Chain Finance",
    description: "Optimize cash flow across your supply chain with early payment solutions for suppliers.",
    icon: TrendingUp,
    features: [
      "Buyer-led Financing",
      "Extended Payment Terms",
      "Early Payment for Suppliers",
      "Reduced Financing Costs",
      "Improved Working Capital",
      "Strengthened Relationships",
      "Technology Integration",
    ],
    rate: "8.5% onwards",
    amount: "Up to ₹10 Cr",
    tenure: "As per supply cycle",
    processing: "0.5% to 1.5%",
    category: "Supply Chain",
  },
  {
    id: "personal-loan",
    title: "Personal Loan",
    description: "Meet your personal financial needs with our instant personal loans with minimal documentation.",
    icon: CreditCard,
    features: [
      "Unsecured Loan",
      "Fixed Tenure Options",
      "Loan Amount Flexibility",
      "EMI-Based Repayment",
      "Digital Application",
      "Credit Score-Based Approval",
      "Pre-closure Options",
    ],
    rate: "10.5% onwards",
    amount: "Up to ₹50 Lakh",
    tenure: "Up to 5 years",
    processing: "1% to 3%",
    category: "Personal Finance",
    popular: true,
  },
  {
    id: "home-loan",
    title: "Home Loan",
    description: "Make your dream home a reality with our attractive home loan offers and tax benefits.",
    icon: Home,
    features: [
      "Tax Benefits Available",
      "Lower Interest Rates",
      "Due Diligence of Property",
      "Long Repayment Tenure",
      "No Prepayment Penalty",
      "Balance Transfer Facility",
      "Multiple Loan Types",
    ],
    rate: "8.5% onwards",
    amount: "Up to ₹10 Cr",
    tenure: "Up to 30 years",
    processing: "0.5% to 1%",
    category: "Home Finance",
  },
  {
    id: "loan-against-securities",
    title: "Loan Against Securities",
    description: "Get instant liquidity against your investment portfolio without selling your securities.",
    icon: TrendingUp,
    features: [
      "24x7 Loan Facility",
      "Continue Receiving Dividends",
      "Lower Interest Rates",
      "Faster Loan Approval",
      "External Benchmark Lending",
      "Flexible Credit Limits",
      "Easy Repayment Options",
    ],
    rate: "9% onwards",
    amount: "Up to ₹20 Cr",
    tenure: "Up to 10 years",
    processing: "0.5% to 1%",
    category: "Investment Finance",
  },
  {
    id: "used-car-loan",
    title: "Used Car Loan",
    description: "Drive your dream car with our competitive used car financing options and quick approvals.",
    icon: Car,
    features: [
      "Up to 85% Financing",
      "Quick Approval Process",
      "Flexible Tenure Options",
      "Minimal Documentation",
      "Competitive Interest Rates",
      "Insurance & Registration",
      "Pre-payment Options",
    ],
    rate: "9.75% onwards",
    amount: "Up to ₹1 Cr",
    tenure: "Up to 7 years",
    processing: "1% to 2%",
    category: "Vehicle Finance",
  },
]

const categories = [
  "All Products",
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
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50 relative"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      {/* <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge> */}
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-muted-foreground h-20">{product.description}</CardDescription>
                  </CardHeader>
                  {/* <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Interest Rate</div>
                          <div className="font-semibold text-primary">{product.rate}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Loan Amount</div>
                          <div className="font-semibold">{product.amount}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Tenure</div>
                          <div className="font-semibold">{product.tenure}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Processing</div>
                          <div className="font-semibold">{product.processing}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium text-foreground">Key Features:</div>
                        {product.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {product.features.length > 4 && (
                          <div className="text-sm text-muted-foreground">
                            +{product.features.length - 4} more features
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Link href={`/products/${product.id}`} className="flex-1">
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent> */}
                   <div className="flex gap-2 pt-4 p-4">
                        <Link href={`/products/${product.id}`} className="flex-1">
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
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

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
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
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Products</h3>
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
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-background/70">
                <p>📞 +91-98765-43210</p>
                <p>✉️ pennyfarmfinance@gmail.com</p>
                <p>📍 623, Dev Atelier, 100 Feet Anand Nagar Rd, Prahlad Nagar, Ahmedabad, Gujarat 380015</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
            <p>&copy; 2024 Penny Farm Finance. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
