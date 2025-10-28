"use client"

import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

// Blog content data
const blogContent = {
  1: {
    id: 1,
    title: "Top 5 Benefits of a Business Loan for Growing Companies",
    excerpt: `Running a business requires constant investment — whether it's for expansion, purchasing new equipment, or managing daily expenses. That's where business loans come in. At PennyFarm Finance, we understand that timely financial support can turn your business vision into reality.`,
    date: "27-10-2025",
    readTime: "5 min read",
    image: "/images/blog1.png",
    category: "Business Finance",
    content: `
      <h2>Easy Access to Funds When You Need Them Most</h2>
      <p>Every business faces times when cash flow is tight — maybe clients delay payments or you need to restock inventory. A business loan gives you quick access to working capital, so you can keep operations running smoothly without selling assets or disturbing your personal savings.</p>
      
      <h2>Flexibility to Use Funds Your Way</h2>
      <p>Unlike investors who demand control over how their money is used, business loans offer complete flexibility. You can use the loan for any business purpose — expansion, marketing, hiring staff, upgrading technology, or even clearing short-term liabilities.</p>
      
      <h2>Build and Improve Your Business Credit</h2>
      <p>Repaying your loan on time helps you build a strong credit profile, which makes it easier to qualify for larger loans or better interest rates in the future. Think of it as investing in your company's financial reputation — a powerful asset when you grow.</p>
      
      <h2>No Need to Share Ownership</h2>
      <p>With a business loan, you stay 100% in control of your business. Unlike equity funding, where investors expect a share in profits or decision-making power, loans let you retain full ownership while still getting the funds you need.</p>
      
      <h2>Wide Range of Loan Options</h2>
      <p>At PennyFarm Finance, we offer a variety of funding solutions tailored to your needs:</p>
      <ul>
        <li>Working Capital Loans (WCDA) – to manage day-to-day operations</li>
        <li>Project Finance – for new ventures or large-scale expansion</li>
        <li>Unsecured Corporate Loans – up to ₹50 Cr, with minimal paperwork</li>
        <li>Overdraft & CC Facilities – for flexible withdrawals and repayments</li>
      </ul>
      <p>With the right type of loan, your business gets the strength to grow faster, smarter, and stronger.</p>
      
      <h2>Conclusion</h2>
      <p>A business loan isn't just about borrowing — it's about unlocking growth opportunities. Whether you're a startup or an established enterprise, PennyFarm Finance is here to support you with customized funding options, transparent processes, and expert guidance every step of the way.</p>
    `,
    tags: ["Business Loan", "Working Capital", "Finance"]
  },
  2: {
    id: 2,
    title: "Top 10 Tips to Improve Your CIBIL Score Before Applying for a Loan",
    excerpt: "When you apply for a loan — whether personal or business — the first thing lenders check is your CIBIL score. Your CIBIL score reflects your creditworthiness, and it plays a major role in whether your loan is approved or rejected.",
    date: "27-10-2025",
    readTime: "7 min read",
    image: "/images/blog2.png",
    category: "Credit Score",
    content: `
      <h2>Always Pay Your EMIs and Credit Card Bills on Time</h2>
      <p>Timely repayment is the single biggest factor affecting your CIBIL score. Even one missed EMI or late payment can lower your score. Set up reminders or auto-payments to ensure you never miss a due date.</p>
      
      <h2>Keep Your Credit Utilization Below 30%</h2>
      <p>If your credit card limit is ₹1,00,000, try not to spend more than ₹30,000 regularly. Using too much of your available limit shows that you depend heavily on credit, which can reduce your score.</p>
      
      <h2>Avoid Applying for Too Many Loans at Once</h2>
      <p>Each loan application creates a hard inquiry on your CIBIL report. Multiple inquiries in a short period can make lenders think you're credit-hungry — and this may hurt your score.</p>
      
      <h2>Maintain a Healthy Credit Mix</h2>
      <p>Having both secured loans (like home or car loans) and unsecured loans (like personal or business loans) creates a balanced credit profile. This shows lenders you can handle different types of credit responsibly.</p>
      
      <h2>Check Your CIBIL Report Regularly</h2>
      <p>Sometimes, your score drops because of errors or outdated information. Visit the official CIBIL website, download your credit report, and review it for mistakes. If you find any error, report it immediately to get it corrected.</p>
      
      <h2>Don't Close Old Credit Accounts</h2>
      <p>Long-standing credit accounts show a strong credit history. Even if you don't use a particular card much, keeping it active helps maintain the length of your credit history — a positive factor in your score.</p>
      
      <h2>Avoid Settling Loans</h2>
      <p>If you "settle" a loan for less than the total amount owed, it's marked negatively on your report. Always try to pay the full outstanding amount instead of settling — it keeps your record clean.</p>
      
      <h2>Limit the Number of Credit Cards</h2>
      <p>Having too many cards can make it harder to manage payments. Stick to 2–3 cards that you can comfortably handle and pay on time every month.</p>
      
      <h2>Keep Track of Joint Loans and Co-Signed Accounts</h2>
      <p>If you are a co-borrower or guarantor, any missed payments by the other person can affect your score too. Monitor such accounts regularly and ensure payments are made on time.</p>
      
      <h2>Stay Consistent and Patient</h2>
      <p>Improving your CIBIL score doesn't happen overnight. With consistent good habits — timely payments, low credit usage, and smart planning — your score will gradually increase and stay strong.</p>
      
      <h2>Conclusion</h2>
      <p>A good CIBIL score is your passport to easy, quick, and affordable financing. By following these 10 tips, you'll not only boost your score but also enhance your eligibility for better loan offers. At PennyFarm Finance, we guide you through the process of choosing the right loan and help you get the best deal based on your profile.</p>
    `,
    tags: ["CIBIL Score", "Credit Management", "Loan Tips"]
  },
  3: {
    id: 3,
    title: "Top 7 Benefits of Unsecured Finance for Your Business",
    excerpt: "Every business, big or small, faces moments when extra funds are needed — whether it's for expansion, marketing, managing cash flow, or purchasing inventory. But what if you don't have property or assets to pledge as collateral?",
    date: "27-10-2025",
    readTime: "6 min read",
    image: "/images/blog3.png",
    category: "Business Finance",
    content: `
      <h2>No Collateral Required</h2>
      <p>The biggest advantage of unsecured finance is that you don't need to mortgage property or assets to get funding. This makes it ideal for startups, professionals, and business owners who may not have large assets but have a solid business plan and strong repayment capacity.</p>
      
      <h2>Quick and Hassle-Free Approval</h2>
      <p>Unsecured business loans are known for their fast processing and minimal documentation. At PennyFarm Finance, our simplified approval process ensures you get access to funds within days, so you can focus on running your business instead of handling paperwork.</p>
      
      <h2>Full Ownership and Freedom</h2>
      <p>Unlike investors or equity funding, unsecured loans allow you to retain 100% ownership of your business. You get the money you need without sharing profits, equity, or control — giving you complete freedom over how to use your funds.</p>
      
      <h2>Flexible Usage</h2>
      <p>There are no restrictions on how you use your unsecured loan. You can:</p>
      <ul>
        <li>Expand your business operations</li>
        <li>Launch new products or marketing campaigns</li>
        <li>Upgrade technology or equipment</li>
        <li>Manage working capital gaps</li>
        <li>Consolidate existing debts</li>
      </ul>
      <p>You decide where your funds will make the most impact.</p>
      
      <h2>Build Strong Business Credit</h2>
      <p>Timely repayment of an unsecured business loan helps you build a positive credit history, making it easier to qualify for larger loans and better terms in the future. This strengthens your financial credibility and reputation in the market.</p>
      
      <h2>Ideal for Short- to Medium-Term Needs</h2>
      <p>Unsecured finance is perfect for businesses that need quick funding for short- or medium-term goals. With flexible tenures and repayment options, you can choose a plan that fits your business cycle — keeping your cash flow healthy.</p>
      
      <h2>Available for a Wide Range of Professionals</h2>
      <p>Unsecured loans aren't just for companies — they're also available for:</p>
      <ul>
        <li>Self-employed professionals</li>
        <li>Traders and service providers</li>
        <li>SMEs and MSMEs</li>
        <li>Partnership firms and private limited companies</li>
      </ul>
      <p>If your business has consistent income and a good track record, you're eligible for fast, collateral-free funding.</p>
      
      <h2>Conclusion</h2>
      <p>Unsecured Finance gives your business the freedom to grow without limitations. With quick disbursal, flexible usage, and no collateral requirement, it's the ideal funding solution for ambitious entrepreneurs looking to expand confidently. At PennyFarm Finance, we specialize in providing customized unsecured loan solutions up to ₹50 Crore with transparent terms and expert support — empowering your business to move forward without financial barriers.</p>
    `,
    tags: ["Unsecured Finance", "Business Loan", "Working Capital"]
  }
}

// Function to get related blogs
function getRelatedBlogs(currentBlogId: number) {
  return Object.values(blogContent)
    .filter(blog => blog.id !== currentBlogId)
    .slice(0, 3)
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const blogId = parseInt(params.slug)
  const blog = blogContent[blogId as keyof typeof blogContent]
  
  if (!blog) {
    notFound()
  }
  
  const relatedBlogs = getRelatedBlogs(blogId)
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // Here you would typically save to localStorage or send to an API
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blogs">
                <Button variant="ghost" className="text-white hover:bg-white/20 p-2">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <Badge className="bg-[#E6A000]/20 text-white border-white/30">
                {blog.category}
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {blog.title}
            </h1>
            <div className="flex items-center text-white/80 mb-8">
              <div className="flex items-center mr-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-full mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden mb-8">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div 
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-[#E6A000] text-[#E6A000]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Share and Bookmark */}
                  <div className="flex items-center justify-between mt-8 pt-8 border-t">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-[#E6A000] text-[#E6A000]" onClick={handleShare}>
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm" className="border-[#E6A000] text-[#E6A000]" onClick={handleBookmark}>
                        <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                        {isBookmarked ? 'Saved' : 'Save'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Newsletter */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#000058] mb-4">Subscribe to Newsletter</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest financial tips and insights delivered to your inbox
                    </p>
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full px-3 py-2 border border-[#E6A000]/30 rounded-md focus:border-[#E6A000] focus:outline-none mb-4" 
                    />
                    <Button className="w-full bg-[#E6A000] hover:bg-[#E6A000]/90 text-white">
                      Subscribe
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Related Posts */}
                {relatedBlogs.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-[#000058] mb-4">Related Posts</h3>
                      <div className="space-y-4">
                        {relatedBlogs.map((relatedBlog) => (
                          <div key={relatedBlog.id} className="border-b pb-4 last:border-0">
                            <Link href={`/blogs/${relatedBlog.id}`}>
                              <h4 className="font-medium text-[#000058] hover:text-[#E6A000] transition-colors">
                                {relatedBlog.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {relatedBlog.date} • {relatedBlog.readTime}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}