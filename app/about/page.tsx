"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Calculator, PiggyBank, Target, Heart, X, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Header from "../header/page"
import Footer from "../footer/page"

export default function AboutPage() {
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
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">About Us</Badge>
          <h1 className="text-5xl font-bold mb-6">How Penny Got to Be Penny.</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We are India's fastest-growing financial solutions provider, offering tailored services to businesses and
            individuals across the nation.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe – Trust is the currency of business and life. At PennyFarm, we specialize in simplifying the
                complex and commit to support your financial needs. Our interaction and proposals are guided by
                integrity, transparency, and a commitment to doing what's best for the client.
              </p>
              <p className="text-muted-foreground mb-6">
                We at PennyFarm are a team of young, dynamic professionals supported by highly skilled, qualified, and
                experienced staff. Our recommendation: the best Our team includes professionals with specialized
                expertise such as Chartered Accountants and MBAs, ensuring that you receive expert guidance and support
                tailored to your financial goals.
              </p>
              <p className="text-muted-foreground">
                To our humble beginnings "Starting from a small office with a dedicated team, we faced the challenge of
                gaining trust in a competitive market. Through hard work, transparency, and a commitment to customer
                service, we began building a loyal client base. Each client's success story became a testament to our
                dedication and expertise."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">60+</div>
                <div className="text-sm text-muted-foreground">Partner Banks & NBFCs</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Financial Advisors</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </Card>
            </div>
          </div>

          {/* Vision & Mission */}
          {/* <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                Pioneering the change in business and individual finance, dedicated to helping every client reach their
                full potential
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Our mission is to cultivate long lasting relationships and honor commitments through constant trust and
                dedicated service
              </p>
            </Card>
          </div> */}

          {/* Expertise Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our expertise lies in project finance, working capital, and retail finance, we assist businesses and
              individuals in adding value to their financial needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Contact Us</Badge>
            <h2 className="text-4xl font-bold mb-4">Collaborate With Penny Farm To Expand Your Enterprise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your financial journey? Contact us today for personalized assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 96649 82919</p>
            </Card>

            <Card className="text-center p-6">
              <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">Quick Support Available</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">@</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">pennyfarmfinance@gmail.com</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              📍 623, Dev Atelier, 100 Feet Anand Nagar Rd, Prahlad Nagar, Ahmedabad, Gujarat 380015
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('tel:+919664982919', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                onClick={() => window.open('https://wa.me/919664982919', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
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
