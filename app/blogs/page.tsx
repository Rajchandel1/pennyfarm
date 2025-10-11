"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Calculator, ArrowRight, PiggyBank, X, Menu, Clock, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Header from "../header/page"
import Footer from "@/app/footer/page"

const allBlogs = [
  {
    id: 1,
    title: "5 Tips to Improve Your Credit Score",
    excerpt: "Learn effective strategies to boost your credit score and get better loan terms.",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/credit-score-improvement-tips.jpg",
    author: "Financial Expert",
    category: "Credit Score",
  },
  {
    id: 2,
    title: "Home Loan vs Rent: Making the Right Choice",
    excerpt: "Compare the benefits of buying vs renting to make an informed decision.",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/home-loan-vs-rent-comparison.jpg",
    author: "Property Advisor",
    category: "Home Loans",
  },
  {
    id: 3,
    title: "Business Loan Guide for Startups",
    excerpt: "Everything you need to know about securing funding for your startup.",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/startup-business-loan-guide.jpg",
    author: "Business Consultant",
    category: "Business Loans",
  },
  {
    id: 4,
    title: "Understanding Personal Loan Interest Rates",
    excerpt: "A comprehensive guide to personal loan interest rates and how they're calculated.",
    date: "2024-01-01",
    readTime: "4 min read",
    image: "/personal-loan-interest-rates.jpg",
    author: "Finance Advisor",
    category: "Personal Loans",
  },
  {
    id: 5,
    title: "Tax Benefits on Home Loans in 2024",
    excerpt: "Maximize your tax savings with these home loan tax benefits and deductions.",
    date: "2023-12-28",
    readTime: "8 min read",
    image: "/tax-benefits-home-loan.jpg",
    author: "Tax Expert",
    category: "Home Loans",
  },
  {
    id: 6,
    title: "Working Capital Management for Small Businesses",
    excerpt: "Essential strategies for managing working capital effectively in your business.",
    date: "2023-12-25",
    readTime: "6 min read",
    image: "/working-capital-management.jpg",
    author: "Business Advisor",
    category: "Business Loans",
  },
]

export default function BlogsPage() {
  const [showEMICalculator, setShowEMICalculator] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
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

  const scrollToContact = () => {
    window.location.href = "/#contact-section"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
     <Header/>

      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Financial Insights</Badge>
          <h1 className="text-5xl font-bold mb-6">Financial Tips & Guides</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Stay informed with our latest articles on personal finance, business loans, and financial planning
            strategies.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.map((blog) => (
              <Card
                key={blog.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {blog.category}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{blog.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="w-4 h-4 mr-1" />
                      <span>{blog.author}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 mt-4">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Financial Advice?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our financial experts are here to help you make informed decisions about your financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Phone className="w-5 h-5 mr-2" />
              Speak to an Expert
            </Button>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

     <Footer />

      {/* EMI Calculator Modal */}
      {showEMICalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>EMI Calculator</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setShowEMICalculator(false)}>
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
                  <span className="font-semibold text-primary">₹{emi.toLocaleString()} INR</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Interest Payable:</span>
                  <span className="font-semibold">₹{totalInterest.toLocaleString()} INR</span>
                </div>
                <div className="flex justify-between">
                  <span>Total of Payments:</span>
                  <span className="font-semibold">₹{totalAmount.toLocaleString()} INR</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
