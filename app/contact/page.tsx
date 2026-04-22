"use client"

import { useState } from "react" // 1. useState import kiya
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react"

// 2. Yahan apni Google Script URL paste karein
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzJDnDwW3j6vN0s-YDRsZBATDzZ9Wo2zFi_1WuQJBUKNUQagGBsDwVxzuU3TvXjheYi/exec"

const Contact = () => {
  // 3. Form state create kiya
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    loanType: "Select loan type",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // 4. Input change handle karne ka function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // 5. Form Submit Function
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Data ko Query String format mein convert kar rahe hain Google Forms ke liye
    const formPayload = new FormData()
    formPayload.append("FirstName", formData.firstName)
    formPayload.append("LastName", formData.lastName)
    formPayload.append("Email", formData.email)
    formPayload.append("Phone", formData.phone)
    formPayload.append("LoanType", formData.loanType)
    formPayload.append("Message", formData.message)

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formPayload
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          loanType: "Select loan type",
          message: ""
        })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
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
          {/* Contact Info Cards */}
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

          {/* Form Card with Updates */}
          <Card className="p-6 lg:p-8 border-0 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-[#000058]">Send us a Message</h3>
            
            {/* 6. Form mein onSubmit aur values lagaye */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-[#000058]">First Name</label>
                  <Input 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange}
                    placeholder="Enter your first name" 
                    className="border-[#E6A000]/30 focus:border-[#E6A000]" 
                    required 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-[#000058]">Last Name</label>
                  <Input 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange}
                    placeholder="Enter your last name" 
                    className="border-[#E6A000]/30 focus:border-[#E6A000]" 
                    required 
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-[#000058]">Email</label>
                <Input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="Enter your email" 
                  className="border-[#E6A000]/30 focus:border-[#E6A000]" 
                  required 
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-[#000058]">Phone</label>
                <Input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  placeholder="Enter your phone number" 
                  className="border-[#E6A000]/30 focus:border-[#E6A000]" 
                  required 
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-[#000058]">Loan Type</label>
                <select 
                  name="loanType" 
                  value={formData.loanType} 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#E6A000]/30 rounded-md bg-background focus:border-[#E6A000] focus:outline-none"
                >
                  <option value="" disabled>Select loan type</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Business Loan">Business Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Loan Against Property">Loan Against Property</option>
                  <option value="Working Capital">Working Capital</option>
                  <option value="Used Car Loan">Used Car Loan</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-[#000058]">Message</label>
                <Textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Tell us about your requirements" 
                  rows={4} 
                  className="border-[#E6A000]/30 focus:border-[#E6A000]" 
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#E6A000] hover:bg-[#E6A000]/90 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Confirmation Message */}
              {submitStatus === "success" && (
                <p className="mt-4 text-sm text-green-600 font-medium text-center">
                  Message sent successfully! We will get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-sm text-red-600 font-medium text-center">
                  Something went wrong. Please try again.
                </p>
              )}
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
  )
}

export default Contact