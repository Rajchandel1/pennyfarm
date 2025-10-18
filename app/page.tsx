
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "./header/page"
import  Footer  from "./footer/page"
import {
  Phone,
  MessageCircle,
  Calculator,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  CreditCard,
  PiggyBank,
  Home,
  Car,
  Briefcase,
  Building,
  X,
  Menu,
  ChevronDown,
  Users,
  Award,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/components/ui/sheet"
// import { Label } from "@/components/ui/label"

const useAOS = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll("[data-aos]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

const products = [
  {
    id: "dropline-overdraft",
     image: "/images/dropline od.png",
    title: "Dropline Overdraft",
    description: "Combination of overdraft and term loan with reducing withdrawal limits over time.",
    
  },
  {
    id: "vendor-financing",
    image:"/images/vendor financing.png",
    title: "Vendor Financing",
    description: "Direct financing from sellers to facilitate purchases with flexible payment terms.",
   
  },
  {
    id: "factoring-limit",
    image: "images/factoring limit.png",
    title: "Factoring Limit",
    description: "Convert your receivables into immediate cash with our factoring services.",
    
  },
  {
    id: "loan-against-property",
    image: "images/lop.png",
    title: "Loan Against Property",
    description: "Unlock the value of your property with competitive rates and flexible terms.",
   
  },
  {
    id: "business-loan",
    image: "images/business loan.png",
    title: "Business Loan",
    description: "Fuel your business growth with quick and hassle-free business financing.",
   
  },
  {
    id: "personal-loan",
    image: "images/personal loan.png",
    title: "Personal Loan",
    description: "Meet your personal financial needs with our instant personal loans.",
   
  },
  {
    id: "home-loan",
    image: "images/home loan.png",
    title: "Home Loan",
    description: "Make your dream home a reality with our attractive home loan offers.",
   
  },
  {
    id: "working-capital-demand-loan",
    image: "images/wcl.png",
    title: "Working Capital Loan",
    description: "Maintain smooth business operations with our working capital solutions.",
    
  },
  {
    id: "used-car-loan",
    image: "images/ucl.png",
    title: "Used Car Loan",
    description: "Drive your dream car with our competitive used car financing options.",
  
  },
]

const faqs = [
  {
    question: "What documents are required for loan application?",
    answer:
      "Basic documents include identity proof, address proof, income proof, and bank statements. Specific requirements may vary based on the loan type.",
  },
  {
    question: "How long does the loan approval process take?",
    answer:
      "Our digital process ensures quick approvals. Most loans are approved within 24-48 hours of document submission.",
  },
  {
    question: "Can I prepay my loan without penalty?",
    answer:
      "Yes, we offer flexible prepayment options with minimal or no prepayment charges on most of our loan Services.",
  },
  {
    question: "What is the minimum credit score required?",
    answer:
      "While we consider applications with various credit scores, a score of 650+ increases your chances of approval with better terms.",
  },
  {
    question: "Do you offer doorstep service?",
    answer: "Yes, we provide doorstep document collection and verification services for your convenience.",
  },
]

const blogs = [
  {
    title: "5 Tips to Improve Your Credit Score",
    excerpt: "Learn effective strategies to boost your credit score and get better loan terms.",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/credit-score-improvement-tips.jpg",
  },
  {
    title: "Home Loan vs Rent: Making the Right Choice",
    excerpt: "Compare the benefits of buying vs renting to make an informed decision.",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/home-loan-vs-rent-comparison.jpg",
  },
  {
    title: "Business Loan Guide for Startups",
    excerpt: "Everything you need to know about securing funding for your startup.",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/startup-business-loan-guide.jpg",
  },
]

// const bankLogos = [
//   { name: "BOB", src: "/placeholder-logo.png" },
//   { name: "HDFC", src: "/placeholder-logo.png" },
//   { name: "ICICI", src: "/placeholder-logo.png" },
//   { name: "KOTAK", src: "/placeholder-logo.png" },
//   { name: "SBI", src: "/placeholder-logo.png" },
//   { name: "AXIS", src: "/placeholder-logo.png" },
// ]

// const bankLogos = [
//   { name: "BOB", logo: "BOB" },
//   { name: "HDFC", logo: "HDFC" },
//   { name: "ICICI", logo: "ICICI" },
//   { name: "KOTAK", logo: "KOTAK" },
//   { name: "SBI", logo: "SBI" },
//   { name: "AXIS", logo: "AXIS" },
// ]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  // const [currentBankIndex, setCurrentBankIndex] = useState(0)
  const [showEMICalculator, setShowEMICalculator] = useState(false)

  useAOS()



  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content:
        "Penny Farm Finance helped me expand my business with their quick business loan approval. Excellent service!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Got my home loan approved in just 2 days. The team was very supportive throughout the process.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Entrepreneur",
      content: "Their working capital loan helped me manage my cash flow effectively. Highly recommended!",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])


  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">

      <Header />
      {/* Floating Mobile Buttons moved to global layout */}
      {/* <Button
        className="floating-emi-btn bg-primary hover:bg-primary/90 text-primary-foreground md:hidden"
        onClick={() => setShowEMICalculator(true)}
      >
        <Calculator className="w-6 h-6" />
      </Button> */}

{/* Hero Section */}
<section className="relative h-screen min-h-[600px] overflow-hidden" data-aos="aos-fade-up">
  {/* Animated Background */}
  <div className="absolute inset-0 z-0">
    
    
    {/* Floating Elements */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-[#E6A000]/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#E6A000]/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#E6A000]/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    
    {/* Background Image with Overlay */}
    <img
      src="/happy-family-with-financial-advisor-discussing-loa.png"
      alt="Financial Advisory"
      className="w-full h-full object-cover opacity-90"
    />
    
    {/* Gradient Overlay for Fade Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#000058]/50 via-[#000058]/20 to-transparent"></div>
  </div>

  {/* Content Overlay */}
  <div className="relative z-10 h-full flex items-center">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl">
        {/* Animated Badge */}
        <div className="mb-6 overflow-hidden">
          <Badge className="inline-block px-4 py-2 bg-[#E6A000]/20 text-[#E6A000] border-[#E6A000]/30 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-2 fill-current" />
              India's Trusted Financial Partner
            </span>
          </Badge>
        </div>
        
        {/* Main Heading with Animation */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white text-balance drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Your Financial Dreams, 
          <span className="block mt-2">
            <span className="relative">
              <span className="relative z-10 text-[#E6A000]">
                Our Priority
              </span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#E6A000]/30 transform -skew-x-12"></span>
            </span>
          </span>
        </h1>
        
        {/* Description with Animation */}
        <p className="text-xl lg:text-2xl text-white/90 mb-8 text-pretty drop-shadow-md max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Get instant approvals, competitive rates, and personalized financial solutions. Join over 500+ satisfied customers who trust us with their financial needs.
        </p>
        
        {/* CTA Buttons with Animation */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button
            size="lg"
            className="bg-[#E6A000] hover:bg-[#E6A000]/90 text-white shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            onClick={() => window.open('tel:+919664982919', '_self')}
          >
            <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Call Us Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#00C951] text-[#fff] hover:bg-[#0C954] hover:text-[#f1f1f1] bg-[#00C951] backdrop-blur-sm shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            onClick={() => window.open('https://wa.me/919664982919', '_blank')}
          >
            <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            WhatsApp Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Social Proof with Animation */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex -space-x-2 sm:-space-x-3">
              {[70, 51, 4068, "b"].map((num) => (
                <div
                  key={num}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-white/50 overflow-hidden ring-1 sm:ring-2 ring-white/30 hover-scale transform transition-all duration-300 hover:scale-110 hover:z-10"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${num}`}
                    alt={`User ${num}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E6A000]/20 backdrop-blur-sm border-2 sm:border-4 border-white/50 flex items-center justify-center text-white text-xs sm:text-sm font-bold ring-1 sm:ring-2 ring-white/30 hover-scale transform transition-all duration-300 hover:scale-110 hover:z-10">
                500+
              </div>
            </div>
            <p className="text-sm sm:text-base font-medium text-white/90 text-center sm:text-left drop-shadow-sm">
              Join 500+ satisfied clients in their financial journey
            </p>
          </div>
        </div>

        {/* Floating Cards with Animation */}
        <div className="absolute top-1/4 right-0 lg:right-10 transform translate-x-full lg:translate-x-0 animate-float" style={{ animationDelay: '1.2s' }}>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white p-4 shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#E6A000]/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#E6A000]" />
              </div>
              <div>
                <div className="text-sm text-white/70">Lowest Interest Rates</div>
                <div className="text-xl font-bold">8.5% Onwards</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="absolute bottom-1/4 right-0 lg:right-20 transform translate-x-full lg:translate-x-0 animate-float" style={{ animationDelay: '1.5s' }}>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white p-4 shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#E6A000]/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#E6A000]" />
              </div>
              <div>
                <div className="text-sm text-white/70">100% Secure</div>
                <div className="text-xl font-bold">Your Data</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
    <ChevronDown className="w-8 h-8" />
  </div>

  {/* Custom Styles */}
  <style jsx>{`
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0) translateX(0);
      }
      50% {
        transform: translateY(-20px) translateX(-10px);
      }
    }
    
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .hover-scale {
      transition: transform 0.3s ease;
    }
    
    .hover-scale:hover {
      transform: scale(1.1);
    }
  `}</style>
</section>

      {/* About Section */}
      <section className="py-20 bg-muted/30" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">About Us</Badge>
              <h2 className="text-4xl font-bold mb-6">Your Money Concerns are now Completely Resolved.</h2>

              <p className="text-lg text-muted-foreground mb-6">
              Penny Farm Finance is a preferred partner of leading financial institutions, offering you the most competitive rates throughout our array of loans. Our nearly two decades of industry experience have given us the knowledge and skills necessary to choose the best loan for your circumstances.
              </p>
              <p className="text-muted-foreground mb-8">
               We take responsibility for our deeds and maintain transparency in our operations.
Our greatest asset is your trust—something you can always rely on!
Penny Farm Finance is your constant companion as you strive to live the best life imaginable. For you, we recommend the low cost. We bolster and reassure you that there is every chance you will be able to realise every ambition you have ever had.
              </p>

              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
   <div className="grid grid-cols-2 gap-6" data-aos="aos-fade-right">
  <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-br from-[#E6A000]/10 to-[#000058]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative p-6 text-center">
      <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#E6A000]/10 group-hover:bg-[#E6A000] transition-colors duration-300">
        <Building className="w-8 h-8 text-[#E6A000] group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="text-4xl font-bold text-[#000058] mb-2 group-hover:text-[#E6A000] transition-colors">60+</div>
      <div className="text-sm text-muted-foreground font-medium">Partner Banks & NBFCs</div>
      <div className="mt-4 h-1 w-0 bg-[#E6A000] group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
    </div>
  </Card>
  
  <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-br from-[#000058]/10 to-[#E6A000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative p-6 text-center">
      <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#E6A000]/10 group-hover:bg-[#E6A000] transition-colors duration-300">
        <Users className="w-8 h-8 text-[#E6A000] group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="text-4xl font-bold text-[#000058] mb-2 group-hover:text-[#E6A000] transition-colors">500+</div>
      <div className="text-sm text-muted-foreground font-medium">Happy Customers</div>
      <div className="mt-4 h-1 w-0 bg-[#E6A000] group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
    </div>
  </Card>
  
   <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-br from-[#000058]/10 to-[#E6A000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative p-6 text-center">
      <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#E6A000]/10 group-hover:bg-[#E6A000] transition-colors duration-300">
        <Star className="w-8 h-8 text-[#E6A000] group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="text-4xl font-bold text-[#000058] mb-2 group-hover:text-[#E6A000] transition-colors">100%</div>
      <div className="text-sm text-muted-foreground font-medium">Satisfaction</div>
      <div className="mt-4 h-1 w-0 bg-[#E6A000] group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
    </div>
  </Card>

  <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-br from-[#E6A000]/10 to-[#000058]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative p-6 text-center">
      <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#E6A000]/10 group-hover:bg-[#E6A000] transition-colors duration-300">
        <Award className="w-8 h-8 text-[#E6A000] group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="text-4xl font-bold text-[#000058] mb-2 group-hover:text-[#E6A000] transition-colors">150+</div>
      <div className="text-sm text-muted-foreground font-medium">Financial Advisors</div>
      <div className="mt-4 h-1 w-0 bg-[#E6A000] group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
    </div>
  </Card>
  
 
</div>
          </div>
        </div>
      </section>

      {/* Bank Logos Section */}
      {/* <section className="py-20" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Money Concerns are now Completely Resolved.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Trusted by leading banks and financial institutions across India
            </p>

            <div className="flex justify-center items-center space-x-8 overflow-hidden">
              {bankLogos.map((bank, index) => (
                <div
                  key={bank.name}
                  className={`transition-all duration-500 ${
                    index === currentBankIndex ? "scale-110 opacity-100" : "scale-90 opacity-60"
                  }`}
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
                    <span className="text-sm font-semibold">{bank.logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Products Section */}
      <section className="py-20 bg-muted/30" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Our Services</Badge>
            <h2 className="text-4xl font-bold mb-4">Financial Solutions for Every Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of loan services designed to meet your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <Card
  key={product.id}
  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50 overflow-hidden"
  data-aos="aos-zoom-in"
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
      {/* <div className="grid grid-cols-3 gap-2 text-sm">
        <div>
          <div className="text-muted-foreground">Rate</div>
          <div className="font-semibold text-primary">{product.rate}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Amount</div>
          <div className="font-semibold">{product.amount}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Tenure</div>
          <div className="font-semibold">{product.tenure}</div>
        </div>
      </div> */}

      {/* <div className="space-y-2">
        {product.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-center text-sm">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            {feature}
          </div>
        ))}
      </div> */}

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

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold mb-4">Comprehensive Services You Can Trust</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are aware that wise financial decisions are critical to the expansion of your company. This is why you
              ought to pick us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-primary/5 hover:shadow-xl hover:-translate-y-1" data-aos="aos-fade-up">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                  <Users className="w-10 h-10 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Personalized Service</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Tailored support throughout application process</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Dedicated relationship manager</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Customized financial solutions</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Personal guidance at every step</span>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-primary/5 hover:shadow-xl hover:-translate-y-1" data-aos="aos-fade-up">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                  <Award className="w-10 h-10 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Expertise You Can Trust</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Seasoned financial experts</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Deep understanding of your needs</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Comprehensive financial analysis</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Tailored financial circumstances assessment</span>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-primary/5 hover:shadow-xl hover:-translate-y-1" data-aos="aos-fade-up">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                  <Shield className="w-10 h-10 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Transparency and Reliability</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Complete transparency in operations</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Trustworthy consultation approach</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Reliable service guarantee</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Honest and clear communication</span>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-primary/5 hover:shadow-xl hover:-translate-y-1" data-aos="aos-fade-up">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                  <Home className="w-10 h-10 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Doorstep Assistance</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Convenient doorstep service</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Simplified application process</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Easy documentation collection</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-sm">✓</span>
                  <span className="text-sm">Hassle-free financial journey initiation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-20 bg-muted/30" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Latest Insights</Badge>
            <h2 className="text-4xl font-bold mb-4">Financial Tips & Guides</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest articles on personal finance and loan management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50"
                data-aos="aos-zoom-in"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{blog.title}</CardTitle>
                  <CardDescription>{blog.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blogs">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Explore More Blogs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

     <section id="contact-section" className="py-20 bg-gradient-to-br from-[#000058]/5 to-[#E6A000]/5" data-aos="aos-fade-up">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-[#E6A000]/10 text-[#E6A000] border-[#E6A000]/20">Contact Us</Badge>
      <h2 className="text-4xl font-bold mb-4 text-[#000058]">Get in Touch</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Ready to start your financial journey? Contact us today for personalized assistance.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="space-y-6">
        <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#E6A000]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#E6A000] transition-colors duration-300">
              <Phone className="w-6 h-6 text-[#E6A000] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-[#000058]">Phone</h3>
              <p className="text-muted-foreground">+91 96649 82919</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 border-[#E6A000] text-[#E6A000] hover:bg-[#E6A000] hover:text-white"
                onClick={() => window.open('tel:+919664982919', '_self')}
              >
                Call Now
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#E6A000]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#E6A000] transition-colors duration-300">
              <MessageCircle className="w-6 h-6 text-[#E6A000] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-[#000058]">WhatsApp</h3>
              <p className="text-muted-foreground">Quick Support Available</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 border-[#E6A000] text-[#E6A000] hover:bg-[#E6A000] hover:text-white"
                onClick={() => window.open('https://wa.me/919664982919', '_blank')}
              >
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#E6A000]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#E6A000] transition-colors duration-300">
              <Mail className="w-6 h-6 text-[#E6A000] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-[#000058]">Email</h3>
              <p className="text-muted-foreground">pennyfarmfinance@gmail.com</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 border-[#E6A000] text-[#E6A000] hover:bg-[#E6A000] hover:text-white"
                onClick={() => window.open('mailto:pennyfarmfinance@gmail.com', '_blank')}
              >
                Send Email
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#E6A000]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#E6A000] transition-colors duration-300">
              <MapPin className="w-6 h-6 text-[#E6A000] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-[#000058]">Address</h3>
              <p className="text-muted-foreground text-sm">
                623, Dev Atelier, 100 Feet Anand Nagar Rd, Prahlad Nagar, Ahmedabad, Gujarat 380015
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 border-[#E6A000] text-[#E6A000] hover:bg-[#E6A000] hover:text-white"
                onClick={() => window.open('https://maps.google.com/?q=623+Dev+Atelier+100+Feet+Anand+Nagar+Rd+Prahlad+Nagar+Ahmedabad+Gujarat+380015', '_blank')}
              >
                Get Directions
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 lg:p-8 border-0 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-[#000058]">Send us a Message</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block text-[#000058]">First Name</label>
              <Input placeholder="Enter your first name" className="border-[#E6A000]/30 focus:border-[#E6A000]" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block text-[#000058]">Last Name</label>
              <Input placeholder="Enter your last name" className="border-[#E6A000]/30 focus:border-[#E6A000]" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block text-[#000058]">Email</label>
            <Input type="email" placeholder="Enter your email" className="border-[#E6A000]/30 focus:border-[#E6A000]" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block text-[#000058]">Phone</label>
            <Input type="tel" placeholder="Enter your phone number" className="border-[#E6A000]/30 focus:border-[#E6A000]" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block text-[#000058]">Loan Type</label>
            <select className="w-full px-3 py-2 border border-[#E6A000]/30 rounded-md bg-background focus:border-[#E6A000] focus:outline-none">
              <option>Select loan type</option>
              <option>Personal Loan</option>
              <option>Business Loan</option>
              <option>Home Loan</option>
              <option>Loan Against Property</option>
              <option>Working Capital</option>
              <option>Used Car Loan</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block text-[#000058]">Message</label>
            <Textarea placeholder="Tell us about your requirements" rows={4} className="border-[#E6A000]/30 focus:border-[#E6A000]" />
          </div>
          <Button className="w-full bg-[#E6A000] hover:bg-[#E6A000]/90 text-white">
            Send Message
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </Card>
    </div>

    {/* Map Section */}
    <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-[#E6A000] text-white p-4 text-center">
        <h3 className="text-xl font-semibold">Visit Our Office</h3>
      </div>
      <div className="h-64 md:h-96 bg-gray-200 relative">
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470053.97147952305!2d71.90441618906252!3d23.012877600000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2bd5454f97%3A0x3fd23a20b85b1c7f!2sDEV%20Atelier!5e0!3m2!1sen!2sin!4v1760790326564!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Penny Farm Finance Location"
        ></iframe>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white" data-aos="aos-fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards your financial goals. Apply now and get instant approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              onClick={() => window.open('tel:+919664982919', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +91 96649 82919
            </Button>
          </div>
        </div>
      </section>

     < Footer />

      {/* EMI Calculator handled by existing header component */}
    </div>
  )
}