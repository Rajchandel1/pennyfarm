# Penny Farm Finance - Documentation

## 📋 Project Overview

Penny Farm Finance is a **Next.js 14** financial services website for a loan and finance company based in Ahmedabad, India. The website showcases various loan products (Business Loans, Personal Loans, Home Loans, etc.) and allows users to contact the company through a contact form that submits data directly to Google Sheets.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | UI component library (Button, Card, Input, etc.) |
| **Lucide React** | Icon library |
| **Google Apps Script** | Backend for form submissions |
| **AOS (Animate On Scroll)** | Scroll animations |

---

## 📁 Project Structure

```
panny-farm/
├── app/                          # Next.js App Router (main code)
│   ├── page.tsx                  # Homepage (landing page)
│   ├── layout.tsx                # Root layout with metadata
│   ├── globals.css               # Global styles + Tailwind
│   ├── contact/
│   │   └── page.tsx              # Contact form component (reusable)
│   ├── blogs/
│   │   ├── page.tsx              # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx          # Individual blog post page
│   ├── services/
│   │   └── page.tsx              # Services listing
│   ├── header/
│   │   └── page.tsx              # Navigation + EMI Calculator
│   ├── footer/
│   │   └── page.tsx              # Footer component
│   ├── about/
│   │   └── page.tsx              # About page
│   └── not-found.tsx             # 404 page
│
├── components/
│   └── ui/                       # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── badge.tsx
│       └── ...
│
├── public/                       # Static assets
│   └── images/                   # Blog images, product images
│
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies
```

---

## 🏠 Homepage (`app/page.tsx`)

The homepage is a **single-page landing site** with multiple sections:

### Sections:
1. **Hero Section** - Full-screen banner with CTA buttons
2. **Products/Loans Section** - 9 loan products displayed in cards
3. **Why Choose Us** - 4 key benefits with icons
4. **Blogs Section** - 3 featured blog posts
5. **FAQ Section** - Accordion-style FAQs
6. **Contact Section** - Uses `<Contact />` component
7. **CTA Section** - Final call-to-action

### Key Features:
- **AOS Animations**: Elements animate when scrolling into view
- **Floating Cards**: Interest rate and security badges float on hero
- **Testimonial Carousel**: Auto-rotating every 5 seconds

### Blog Data Structure:
```typescript
const blogs = [
  {
    id: 1,                           // Unique identifier for routing
    title: "Blog Title",
    excerpt: "Short description...",
    date: "27-10-2025",
    readTime: "5 min read",
    image: "/images/blog1.png",
  }
]
```

---

## 📞 Contact Form (`app/contact/page.tsx`)

A **reusable contact form component** that can be imported anywhere.

### How it works:
1. User fills form (First Name, Last Name, Email, Phone, Loan Type, Message)
2. On submit, data is sent to **Google Apps Script** via POST request
3. Google Script saves data to a **Google Sheet**
4. Form shows success/error message

### State Management:
```typescript
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
```

### Google Script Integration:
```typescript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/.../exec"

// FormData is sent via POST
const formPayload = new FormData()
formPayload.append("FirstName", formData.firstName)
// ... other fields
```

### Usage on Homepage:
```tsx
import Contact from "./contact/page"

// In JSX:
<Contact />
```

---

## 📰 Blog System

### Blog Listing (`app/blogs/page.tsx`)
- Displays grid of all blogs
- Each blog links to `/blogs/[id]`

### Individual Blog (`app/blogs/[slug]/page.tsx`)
- **Dynamic route**: `[slug]` catches `/blogs/1`, `/blogs/2`, etc.
- Blog content is stored as **HTML strings** in the component
- Features:
  - Newsletter subscription form (also submits to Google Sheets)
  - Related posts sidebar
  - Share/Bookmark buttons
  - Tags

### Blog Content Structure:
```typescript
const blogContent = {
  1: {
    id: 1,
    title: "Blog Title",
    excerpt: "...",
    date: "27-10-2025",
    readTime: "5 min read",
    image: "/images/blog1.png",
    category: "Finance",
    content: `<h2>Heading</h2><p>Paragraph...</p>`,  // HTML content
    tags: ["Loans", "Finance"]
  }
}
```

---

## 🧮 EMI Calculator (in Header)

Located in `app/header/page.tsx`, the EMI calculator is a **modal/sheet** that opens when clicking the calculator button.

### Formula:
```typescript
const calculateEMI = () => {
  const principal = loanAmount
  const rate = interestRate / 12 / 100  // Monthly rate
  const time = tenureYears * 12          // Months

  const emi = Math.round(
    (principal * rate * Math.pow(1 + rate, time)) / 
    (Math.pow(1 + rate, time) - 1)
  )

  const totalAmount = emi * time
  const totalInterest = totalAmount - principal

  return { emi, totalInterest, totalAmount }
}
```

### Features:
- Slider for loan amount (₹1L - ₹5Cr)
- Interest rate input (8% - 20%)
- Tenure slider (1-30 years)
- Real-time EMI calculation
- Results displayed in styled cards

---

## 📊 Google Sheets Integration

### How Forms Submit to Google Sheets:

1. **Frontend** sends FormData via POST to Google Apps Script URL
2. **Google Apps Script** receives the data
3. **Script** appends data to Google Sheet

### Form Types:
1. **Contact Form** - Full form with name, email, phone, loan type, message
2. **Newsletter** - Just email subscription

### Google Apps Script Code Structure:
```javascript
function doPost(e) {
  // Extract form data from e.parameter
  // Append to Google Sheet
  // Return success response
}
```

### Setting Up Google Script:
1. Create new Google Sheet
2. Extensions → Apps Script
3. Paste the script code (see contact form for URL format)
4. Deploy → New Deployment → Web App
5. Set access to "Anyone"
6. Copy the Web App URL
7. Paste in `app/contact/page.tsx` as `GOOGLE_SCRIPT_URL`

---

## 🎨 Styling Guide

### Color Palette:
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#000058` | Headers, text |
| Primary Gold | `#E6A000` | Buttons, accents, highlights |
| Success Green | `#00C951` | WhatsApp, success states |

### Tailwind Custom Classes:
```css
.gradient-bg {
  background: linear-gradient(135deg, #000058 0%, #000028 100%);
}
```

### AOS (Animate On Scroll):
- `data-aos="aos-fade-up"` - Fade in from bottom
- `data-aos="aos-zoom-in"` - Zoom in effect
- `data-aos="aos-fade-right"` - Slide from right

---

## 🚀 Getting Started

### Prerequisites:
- Node.js 18+
- npm or pnpm

### Installation:
```bash
# Navigate to project
cd panny-farm

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production:
```bash
npm run build
```

---

## 📦 Key Dependencies

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "tailwindcss": "^3.x",
    "lucide-react": "^0.x",
    "class-variance-authority": "^0.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  }
}
```

---

## 🔧 Configuration Files

### `next.config.mjs`:
- Configured for static export
- Unoptimized images for static hosting
- Output directory: `dist`

### `tailwind.config.ts`:
- Custom colors: `#000058` (blue), `#E6A000` (gold)
- Custom animations: `fade-in-up`, `float`, `pulse`
- Dark mode support

---

## 🐛 Common Issues & Solutions

### CORS Error on Form Submit:
**Problem**: `TypeError: Failed to fetch`

**Solution**: Add `mode: "no-cors"` to fetch request:
```typescript
await fetch(GOOGLE_SCRIPT_URL, {
  method: "POST",
  mode: "no-cors",
  body: formPayload
})
```

### Blog Images Not Loading:
**Problem**: 404 on `/images/blogX.png`

**Solution**: Ensure images exist in `public/images/` folder

### AOS Animations Not Working:
**Problem**: Elements appear without animation

**Solution**: Check that `data-aos` attributes are correct and the AOS observer is initialized in `useAOS()` hook.

---

## 📝 Code Patterns

### Reusable Component Pattern:
```typescript
// Define the component
const Component = () => {
  return <div>...</div>
}

export default Component

// Use in other pages
import Component from "./path/page"
<Component />
```

### Form Handling Pattern:
```typescript
const [data, setData] = useState({ field: "" })

const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value })
}

const handleSubmit = async (e) => {
  e.preventDefault()
  // Submit logic
}
```

---

## 🎯 SEO & Meta Tags

Configured in `app/layout.tsx`:
- Title: "Penny Farm Finance"
- Description: "Your trusted financial partner..."
- Favicon: `favicon.ico`

---

## 🌐 Deployment

### Static Export (Recommended):
1. `npm run build` - Creates `dist/` folder
2. Deploy `dist/` to any static hosting:
   - Netlify
   - Vercel
   - GitHub Pages
   - Apache/Nginx server

### Environment Variables:
Create `.env.local` for sensitive data:
```
GOOGLE_SCRIPT_URL=your_script_url_here
```

---

## 📞 Contact & Support

For issues with this project:
1. Check browser console for errors
2. Verify Google Script URL is correct
3. Ensure all images exist in `public/images/`
4. Check form field names match Google Script expectations

---

## 🎓 Learning Resources

**New to Next.js?**
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

**New to Tailwind?**
- [Tailwind Docs](https://tailwindcss.com/docs)

**Google Apps Script:**
- [Apps Script Guide](https://developers.google.com/apps-script)

---

**Built with ❤️ by Penny Farm Finance Team**
