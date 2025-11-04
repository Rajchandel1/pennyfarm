"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "../../header/page"
import Footer from "@/app/footer/page"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  CheckCircle,
  Phone,
  MessageCircle,
  Calculator,
  Download,
  Star,
  Clock,
  Shield,
  TrendingUp,
  PiggyBank,
  Home,
  Briefcase,
  CreditCard,
  X,
  BookOpen,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Product data with EXACT detailed information and FAQs from your document
const productData = {
  "loan-against-property": {
    title: "Loan Against Property",
    description:
      "A Loan Against Property (LAP) is a smart way to use your real estate as collateral to secure funds. Get access to higher loan amounts at competitive interest rates.",
    icon: Home,
    category: "Secured Loans",
    rate: "9.5% onwards",
    amount: "Up to ₹5 Cr",
    tenure: "Up to 20 years",
    processing: "0.5% to 2%",
    features: [
      "Secured Loan with Property as Collateral",
      "Higher Loan Amounts Available",
      "Flexible Usage of Funds",
      "Longer Repayment Tenure (5-20 years)",
      "Lower Interest Rates",
      "No Big Charges for Early Payment",
      "Easy Loan Approval Process",
      "Easier Monthly Payments with EMI",
    ],
    benefits: [
      "Access to substantial capital for various needs",
      "Lower interest rates compared to unsecured loans",
      "Flexible repayment options",
      "Tax benefits on interest payments",
      "Retain ownership of your property",
      "Quick approval process",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Property ownership required",
      "Stable income source",
      "Good credit score (650+)",
      "Property should be free from legal disputes",
    ],
    documents: [
      "Property documents",
      "Income proof",
      "Identity and address proof",
      "Bank statements",
      "Property valuation report",
    ],
    // EXACT content from your document
    detailedDescription: `A Loan Against Property (LAP) is a smart way to use your real estate as a collateral to secure funds. The purpose of this type of loan is to give you credit access by pledging your property to a financial institution. The key advantage is that LAP generally offers lower interest rates compared to unsecured loans, thanks to the property serving as security. With various LAP options available, you can choose the one that best fits your needs.

6. Key Features of Loan Against Property (LAP)
To fully grasp the potential of a Loan Against Property, it is essential to understand its key features. These features determine how the loan functions and what makes it a viable option for many borrowers.

7. Secured Loan
As the name suggests, LAP is a secured loan, which means that the borrower pledges their property as collateral. This security reduces the lender's risk, which is why LAP often comes with favorable terms for borrowers. The collateral ensures that the lender can recover the loan amount in case the borrower defaults, making LAP an attractive option for financial institutions.

8. Higher Loan Amounts
Compared to unsecured loans, LAP offers access to higher loan amounts. Because the loan is backed by property, the lender is more inclined to sanction larger loans. This is beneficial for borrowers who need substantial capital for various purposes, such as funding business expansion, paying for education, or investing in other real estate ventures.

9. Flexible Usage of Funds
One of the main attractions of LAP is the flexibility in how the funds can be used. Borrowers can use the loan for a variety of purposes, such as:
• Home renovations and repairs
• Medical emergencies or personal expenses
• Business expansion or investments
• Paying for children's education
• Weddings or other major life events
This flexibility ensures that borrowers can leverage the loan for both personal and professional financial needs.

10. Longer Repayment Tenure
LAPs typically come with extended repayment periods, often ranging from 5 to 20 years. This long tenure makes the loan more affordable in the long term, as it reduces the burden of high monthly repayments. The extended period allows borrowers to manage their finances more effectively without straining their budgets.

11. Lower Interest Rates
Since LAP is a secured loan, it generally offers lower interest rates than unsecured loans. This is because the lender is at a reduced risk, with the property serving as collateral. As a result, borrowers save money on interest payments over the life of the loan, making it a more cost-effective borrowing option.

12. No Big Charges for Early Payment
If you want to pay-off your LAP early, it won't cost you a lot. While paying off other types of loans might come at an additional charge, there are no charges involved in paying off LAP.

13. Easy Loan Approval
NBFCs or banks are happy to give approval for LAP as it's a safe bet for them. So, it's not too hard to get an LAP.

14. Easier Monthly Payments
LAP allows for EMIs which means easy monthly payments. It's like having a lower monthly rent for your loan. But remember, even though it's tempting to choose a longer duration to pay, it's better to pick the shorter duration to reduce your total loan repayment amount.`,

    // EXACT FAQs from your document
    originalFaqs: [
      {
        question: "What is the minimum and maximum amount of Loan Against Property that I can get?",
        answer: "The loan amount varies based on the property's market value, your income, and repayment capacity. Typically, you can get up to 60-70% of the property's market value. The maximum amount can go up to ₹5 Crore or more, depending on the lender and your eligibility."
      },
      {
        question: "Can I get an overdraft against my property?",
        answer: "Yes, many lenders offer Loan Against Property in the form of an overdraft facility. This allows you to withdraw funds as needed up to a sanctioned limit and pay interest only on the amount utilized."
      },
      {
        question: "What is Lease Rental Discounting?",
        answer: "Lease Rental Discounting (LRD) is a type of loan where you can borrow against the future rental income from your commercial property. The lender sanctions a loan based on the discounted value of these future rentals."
      },
      {
        question: "I am an NRI. Can I get a Loan Against Property?",
        answer: "Yes, Non-Resident Indians (NRIs) are eligible for Loan Against Property. The terms and conditions, including documentation and interest rates, may differ slightly from those for resident Indians."
      },
      {
        question: "How will my Equated Monthly Installment (EMI) be calculated?",
        answer: "Your EMI is calculated using the loan amount, the interest rate, and the loan tenure. You can use our online EMI calculator to get an accurate estimate."
      },
      {
        question: "What can Loan against Property be used for?",
        answer: "LAP can be used for almost any legitimate personal or business need, including business expansion, debt consolidation, home renovation, medical emergencies, children's education, or weddings."
      },
      {
        question: "How does the lending bank decide on the amount I can get as loan against property?",
        answer: "The loan amount is determined by the market value of the property (as assessed by the bank), your income, existing liabilities, credit score, and repayment capacity."
      },
      {
        question: "Can there be a co-applicant for loan against property? If yes, who can be co-applicant?",
        answer: "Yes, you can have a co-applicant. Typically, a co-applicant can be a spouse, parent, or child. Having a co-applicant can increase your loan eligibility by combining incomes."
      },
      {
        question: "What is the tenure of the loan?",
        answer: "The loan tenure for LAP can range from 5 to 20 years, depending on the lender and your age. A longer tenure means lower EMIs but higher total interest outgo."
      },
      {
        question: "How to repay my loan?",
        answer: "Repayment is typically done through Equated Monthly Installments (EMIs) via auto-debit from your bank account. Some lenders also offer overdraft facilities where you pay interest on the utilized amount."
      },
      {
        question: "What security will I have to provide?",
        answer: "The primary security is the property itself, which will be mortgaged to the lender. In some cases, lenders may also ask for additional collateral or a personal guarantee."
      },
      {
        question: "Can I repay the loan ahead of schedule?",
        answer: "Yes, you can prepay your LAP. For loans with floating interest rates, most lenders do not charge any prepayment penalty. For fixed-rate loans, a nominal fee may apply."
      },
      {
        question: "How is my loan reassessed if there is a change in status from Non-Resident Indian to Resident Indian?",
        answer: "You must inform the lender of your change in residential status. The lender will reassess your loan based on resident Indian criteria, which may affect your interest rate or repayment terms."
      }
    ],
  },
  "working-capital-demand-loan": {
    title: "Working Capital Demand Loan",
    description: "Maintain smooth business operations with our flexible Working Capital Demand Loan, designed to address short-term funding needs without a fixed repayment schedule.",
    icon: PiggyBank,
    category: "Business Finance",
    rate: "12% onwards",
    amount: "Up to ₹1 Cr",
    tenure: "Demand-based",
    processing: "1% to 3%",
    features: [
      "Flexible repayment and fund utilization",
      "Quick access to funds for operational needs",
      "No fixed repayment schedule",
      "Interest charged only on utilized amount",
      "Easy renewal of loan facility",
    ],
    benefits: [
      "Enhances cash flow for daily operations",
      "Ideal for managing seasonal fluctuations",
      "Quick disbursal for urgent needs",
      "No fixed EMI burden",
      "Supports short-term liquidity",
    ],
    eligibility: [
      "Business vintage: 2+ years",
      "Annual turnover: ₹50 lakh+",
      "Good credit score",
      "Valid business registration",
      "Positive cash flow",
    ],
    documents: [
      "Business registration documents",
      "Financial statements",
      "Bank statements",
      "Income tax returns",
      "Identity and address proof",
    ],
    detailedDescription: `Maintaining optimum working capital is essential to a business's efficient running. A working capital demand loan is thus available as a flexible financing option that allows businesses to access funds during any capital shortage. This credit facility is readily available to fulfil the operational funding needs.

Now that you are familiar with WCDL, let us take a closer look at its features and advantages:

1. Features
• Flexibility: WCDL provides flexibility in both repayment and fund utilisation, allowing businesses to address immediate working capital needs efficiently
• Quick access: Businesses can access funds quickly, enabling them to manage unexpected expenses or cash flow gaps
• No fixed repayment schedule: Unlike traditional loans, WCDL does not have a fixed repayment schedule. Lenders can demand repayment at any time
• Interest on utilised amount: Interest is charged only on the amount of funds actually used, meaning businesses only pay interest on the portion they utilise
• Easy renewal: WCDL facilities can be renewed or extended after repayment, providing continuous access to working capital as needed

2. Advantages
• Enhances cash flow: WCDL helps businesses maintain healthy cash flow by providing immediate access to funds, ensuring smooth day-to-day operations
• Suitable for short-term needs: Ideal for managing short-term working capital needs, such as dealing with seasonal fluctuations or temporary cash flow gaps

3. When Would Taking a Working Capital Demand Loan be a good idea?
WCDLs are ideal debt instruments for businesses facing a lean season. When sales dip or large amounts of receivables remain unpaid, it can severely impact a business's liquidity, especially for growing businesses. A WCDL is a short-term loan that helps meet regular capital needs and maintain operational efficiency. It ensures smooth cash flow for daily expenses, such as raw material purchases, payroll, and supplier payments, while helping maintain healthy liquidity. This makes it an effective short-term solution for businesses experiencing temporary cash shortages.

WCDLs are perfect for replenishing funds in the short term and bridging the gap between inflows and outflows. They are especially useful for businesses with cyclical operations, where demand fluctuates seasonally. During lean periods, WCDLS can cover financial needs, allowing the business to operate at full capacity during peak seasons.

With a WCDL, the borrower has full control over how the funds are spent. Plus, as a debt financing tool, it does not affect the company's equity.`,
    originalFaqs: [
      {
        question: "How do I maintain a good track record for my OD facility?",
        answer: "Maintain timely repayments, avoid overutilization, and ensure accurate financial records to demonstrate reliability to the lender."
      },
      {
        question: "What is an overdraft facility?",
        answer: "An overdraft facility allows businesses to withdraw funds beyond their account balance up to a sanctioned limit, with interest charged only on the utilized amount."
      },
      {
        question: "Can I avail of the Internet Banking facility?",
        answer: "Yes, most lenders provide Internet Banking to manage your loan account, check balances, and make repayments."
      },
      {
        question: "Can cash be deposited/withdrawn from my loan account?",
        answer: "Yes, you can deposit or withdraw cash within the sanctioned limit, subject to the lender's terms and conditions."
      },
      {
        question: "Can I balance transfer my existing overdraft facility?",
        answer: "Yes, you can transfer your existing overdraft facility to another lender offering better terms, subject to eligibility."
      },
      {
        question: "What are the tenures for working capital finance?",
        answer: "Working capital demand loans are typically demand-based with no fixed tenure, but renewals can be arranged as needed."
      },
      {
        question: "What is the repayment schedule like?",
        answer: "There is no fixed repayment schedule; lenders may demand repayment at any time, but terms can be negotiated based on cash flow."
      }
    ],
  },
  "bank-guarantee": {
    title: "Bank Guarantee",
    description: "A bank guarantee acts as a promise from a bank to a beneficiary that if the applicant defaults on their obligations, the bank will cover the payment or performance up to a specified amount.",
    icon: Shield,
    category: "Trade Finance",
    rate: "1% to 3% p.a.",
    amount: "As per requirement",
    tenure: "Up to 5 years",
    processing: "0.25% to 1%",
    features: [
      "Financial Assurance for beneficiaries",
      "Third-Party Liability assumed by bank",
      "Various types: Performance, Payment, Advance Payment, Bid Bond",
      "Specified validity period",
      "Claim process with proper documentation",
      "Independence from underlying contract",
      "Customization to specific needs",
      "Global acceptance for international transactions",
      "Risk mitigation for both parties",
    ],
    benefits: [
      "Reduced financial risk for beneficiaries",
      "Increased business credibility",
      "Facilitated trade and investment",
      "Opportunities for growth",
      "Streamlined transactions",
      "Cost-effectiveness",
      "Specific applications for different needs",
    ],
    eligibility: [
      "Good credit history",
      "Strong financial position",
      "Valid business registration",
      "Purpose of guarantee must be legitimate",
      "Ability to provide counter guarantee if required",
    ],
    documents: [
      "Application form",
      "Financial statements",
      "Business registration documents",
      "Underlying contract details",
      "Identity and address proof",
    ],
    detailedDescription: `A bank guarantee acts as a promise from a bank to a beneficiary (usually a seller or creditor) that if the applicant (usually a buyer or borrower) defaults on their obligations, the bank will cover the payment or performance up to a specified amount. It's a risk management tool, ensuring financial commitments are met, even if one party fails.

1. Features
• Financial Assurance: Bank guarantees provide a safety net for beneficiaries, assuring them of payment or performance, even if the applicant defaults.
• Third-Party Liability: The issuing bank assumes direct liability to the beneficiary, meaning the bank is obligated to fulfill the guarantee if the applicant fails.
• Types of Guarantees: Bank guarantees come in various forms, including:
• Performance guarantees: Ensure contract obligations are met.
• Payment guarantees: Secure payment obligations.
• Advance payment guarantees: Protect advance payments if goods or services are not delivered as agreed.
• Bid bond guarantees: Secure commitments during tender processes.
• Validity Period: Guarantees have a specified validity period, after which they expire and become unenforceable.
• Claim Process: Beneficiaries must follow specific procedures and provide proper documentation to make a claim on the guarantee.
• Independence from Underlying Contract: Bank guarantees are separate from the underlying contract between the applicant and the beneficiary.
• Customization: Guarantees can be tailored to the specific needs of the transaction or contract.
• Global Acceptance: Bank guarantees are widely recognized, making them suitable for international transactions.
• Risk Mitigation: They reduce the risk of non-payment or non-performance for both parties involved in a transaction.

Bank guarantees offer several benefits, primarily by mitigating risk and enhancing business credibility. They assure beneficiaries that a bank will cover a payment obligation if the applicant defaults, facilitating smoother transactions, especially in international trade and large projects. For businesses, particularly small and medium-sized enterprises (SMEs), bank guarantees can be crucial for securing contracts and building trust with partners.

2. Benefits
• Reduced Financial Risk: Bank guarantees act as a safety net, assuring payment or performance even if the other party defaults. They lower the risk of non-payment, encouraging businesses to extend credit and take on larger projects.
• Increased Business Credibility: A bank guarantee demonstrates financial stability and trustworthiness, making it easier to secure contracts and deals. It helps level the playing field, allowing smaller businesses to compete with established firms for larger projects.
• Facilitated Trade and Investment: Bank guarantees are particularly useful in international transactions, providing assurance to both parties. They can encourage investment by reducing the risk associated with business transactions.
• Opportunities for Growth: Businesses can use bank guarantees to bid on and secure larger, more complex projects. They can help businesses obtain loans or other forms of financing by providing collateral.
• Streamlined Transactions: Banks often process guarantees relatively quickly, especially with digital solutions like e-BGs. Compared to some other financial instruments, bank guarantees may involve less documentation.
• Cost-Effectiveness: Banks may charge lower fees for guarantees than for loans, making them a more affordable option for certain situations. Having a bank guarantee in place can sometimes lead to more favorable interest rates on loans.
• Specific Applications: Bid Bonds, Performance Guarantees, Advance Payment Guarantees, Loan Repayments, Service Provision, and International Trade facilitation.

In essence, bank guarantees are powerful tools that can significantly benefit businesses by mitigating risk, boosting credibility, and facilitating various types of transactions.`,
    originalFaqs: [
      {
        question: "What is a bank guarantee?",
        answer: "A bank guarantee is a promise from a bank to a beneficiary that if the applicant defaults on their obligations, the bank will cover the payment or performance up to a specified amount."
      },
      {
        question: "What are the different types of bank guarantees?",
        answer: "The main types include performance guarantees, payment guarantees, advance payment guarantees, and bid bond guarantees."
      },
      {
        question: "How long is a bank guarantee valid?",
        answer: "Bank guarantees have a specified validity period, typically ranging from a few months to several years, depending on the nature of the underlying contract."
      },
      {
        question: "What is the cost of obtaining a bank guarantee?",
        answer: "The cost typically ranges from 1% to 3% per annum of the guarantee amount, plus processing fees. The exact cost depends on the applicant's creditworthiness and the type of guarantee."
      },
      {
        question: "Can a bank guarantee be cancelled?",
        answer: "Yes, bank guarantees can be cancelled before their expiry date, subject to the consent of the beneficiary and the issuing bank."
      },
      {
        question: "What happens if the beneficiary makes a claim?",
        answer: "If a valid claim is made, the bank will pay the beneficiary up to the guaranteed amount and then seek reimbursement from the applicant."
      },
      {
        question: "Are bank guarantees used in international trade?",
        answer: "Yes, bank guarantees are widely used in international trade to provide assurance to both parties in cross-border transactions."
      }
    ],
  },
  "letter-of-credit": {
    title: "Letter of Credit",
    description: "A Letter of Credit (LC) is a bank's guarantee to a seller that payment will be received for goods or services, provided the seller meets specific conditions outlined in the LC.",
    icon: CreditCard,
    category: "Trade Finance",
    rate: "0.5% to 2%",
    amount: "As per requirement",
    tenure: "Up to 180 days",
    processing: "0.1% to 0.5%",
    features: [
      "Payment guarantee from issuing bank",
      "Documentary nature requiring specific documents",
      "Revocable vs Irrevocable options",
      "Transferable and negotiable options",
      "Time and sight drafts available",
      "Fee-based service",
      "International trade facilitation",
      "Risk mitigation for both parties",
      "Customization to transaction needs",
    ],
    benefits: [
      "Reduced risk for sellers in unfamiliar markets",
      "Payment assurance regardless of buyer default",
      "Facilitates international trade transactions",
      "Buyer's creditworthiness enhancement",
      "Improved cash flow management",
      "Tailored to specific transaction needs",
      "Dispute resolution framework",
      "Verification and compliance assurance",
    ],
    eligibility: [
      "Established business relationship",
      "Good credit history",
      "Valid import/export license",
      "Legitimate trade transaction",
      "Ability to provide required documents",
    ],
    documents: [
      "Application form with LC details",
      "Commercial invoice",
      "Bill of lading or airway bill",
      "Insurance certificate",
      "Certificate of origin",
      "Packing list",
    ],
    detailedDescription: `A Letter of Credit (LC) is a bank's guarantee to a seller that payment will be received for goods or services, provided the seller meets specific conditions outlined in the LC. Key features include: unique LC number, issuing bank details, applicant and beneficiary information, amount, expiration date, shipment terms, and required documents. LCs are crucial in international trade to mitigate risks for both buyers and sellers by ensuring timely payment and fulfilling contractual obligations.
Key Features of a Letter of Credit:
• Payment Guarantee:
The issuing bank promises to pay the seller (beneficiary) upon presentation of specified documents, ensuring payment even if the buyer defaults.
• Documentary Nature:
The LC relies on the presentation of specific documents (e.g., shipping documents, commercial invoices) to verify the transaction and trigger payment.
• Revocable vs. Irrevocable:
LCs can be revocable (changeable) or irrevocable (unchangeable without consent), with irrevocable LCs being more common and offering greater security.
• Transferability:
LCs can be transferable, allowing the beneficiary to transfer their rights to another party.
• Negotiability:
A negotiable LC allows for the transfer of rights to payment, and it includes an unconditional promise to pay on demand or at a specific time.
• Time and Sight Drafts:
LCs can involve sight drafts (payment upon presentation of documents) or time drafts (payment at a later date).
• Fee-based:
Banks charge a fee for issuing an LC, which is often a percentage of the LC amount.
• International Trade:
LCs are widely used in international trade to facilitate transactions between parties in different countries, bridging trust and legal gaps.
• Risk Mitigation:
LCs help mitigate risks for both buyers (payment only upon fulfillment of conditions) and sellers (payment guarantee from a reputable bank).
• Customization:
LCs can be customized to fit specific transaction needs and payment arrangements.
In essence, a Letter of Credit acts as a financial bridge, ensuring that both buyers and sellers can confidently engage in transactions, particularly in the complex landscape of international trade.

Key Advantages of Letters of Credit:
• Reduced Risk for Sellers:
LCs provide sellers with a high degree of payment security, particularly when dealing with new or unfamiliar buyers or in regions with political or economic instability.
• Payment Assurance:
The issuing bank guarantees payment to the seller once the terms of the LC are met, regardless of the buyer's ability or willingness to pay.
• Facilitates International Trade:
LCs provide a standardized and trusted payment method, encouraging both buyers and sellers to engage in cross-border transactions that they might otherwise avoid.
• Buyer's Creditworthiness:
The issuing bank assumes the buyer's credit risk, effectively acting as a credit certificate for the buyer, which can be helpful in negotiating better terms with suppliers.
• Improved Cash Flow:
LCs can help sellers access financing more easily, as they can use the LC as collateral for loans. This allows sellers to manage their cash flow more effectively.
• Customization:
LCs can be tailored to the specific needs of the transaction, including the timing of shipments and the types of documents required for payment.
• Dispute Resolution:
In the event of a dispute, the LC can provide a framework for resolving the issue, as the seller can still access funds based on the LC's terms.
• Verification and Compliance:
LCs can ensure that the correct goods or services are provided and that all regulatory and legal requirements are met.`,
    originalFaqs: [
      {
        question: "What is a Letter of Credit?",
        answer: "A Letter of Credit is a bank's guarantee to a seller that payment will be received for goods or services, provided the seller meets specific conditions outlined in the LC."
      },
      {
        question: "What are the different types of Letters of Credit?",
        answer: "The main types include commercial LCs, standby LCs, revocable LCs, irrevocable LCs, confirmed LCs, and unconfirmed LCs."
      },
      {
        question: "How does a Letter of Credit work?",
        answer: "The buyer requests the bank to issue an LC in favor of the seller. The seller ships the goods and presents the required documents to the bank. Upon verification, the bank makes payment to the seller."
      },
      {
        question: "What is the cost of a Letter of Credit?",
        answer: "The cost typically ranges from 0.5% to 2% of the LC amount, depending on the type of LC, the applicant's creditworthiness, and the issuing bank."
      },
      {
        question: "What documents are required for an LC?",
        answer: "Common documents include commercial invoices, bills of lading, insurance certificates, certificates of origin, and packing lists."
      },
      {
        question: "Can a Letter of Credit be amended?",
        answer: "Yes, LCs can be amended with the consent of all parties involved - the buyer, seller, and the issuing bank."
      },
      {
        question: "What happens if the documents don't comply?",
        answer: "If the documents don't comply with the LC terms, the bank may refuse payment. The seller must then correct the discrepancies or negotiate with the buyer."
      }
    ],
  },
  "business-loan": {
    title: "Business Loan",
    description: "A business loan is a sum of money borrowed by a business from a lender to be repaid with interest over a specific period. Access capital for growth and expansion.",
    icon: Briefcase,
    category: "Business Finance",
    rate: "11% onwards",
    amount: "Up to ₹5 Cr",
    tenure: "Up to 10 years",
    processing: "1% to 3%",
    features: [
      "Access to capital for growth and expansion",
      "Managing cash flow and seasonal fluctuations",
      "Funding strategic investments",
      "Flexible repayment options",
      "Building and strengthening credit history",
      "Retaining ownership and control",
      "Tax benefits on interest",
      "Working capital support",
    ],
    benefits: [
      "Immediate access to funds for business needs",
      "Flexible repayment terms",
      "Tax-deductible interest payments",
      "No dilution of ownership",
      "Improved credit score with timely repayment",
      "Quick approval process",
      "Customizable loan amounts",
      "Multiple lender options",
    ],
    eligibility: [
      "Business vintage: 2+ years",
      "Annual turnover: ₹25 lakh+",
      "Good credit score (650+)",
      "Valid business registration",
      "Positive cash flow",
      "Business plan for fund utilization",
    ],
    documents: [
      "Business registration documents",
      "Financial statements (2-3 years)",
      "Bank statements (6-12 months)",
      "Income tax returns",
      "Business plan",
      "Identity and address proof",
    ],
    detailedDescription: `A business loan is a sum of money borrowed by a business from a lender, like a bank or financial institution, to be repaid with interest over a specific period. Business loans offer several advantages, including access to capital for growth, flexibility in repayment options, potential tax benefits, and the ability to retain ownership and control of the business.

1. Advantages
• Access to Capital for Growth and Expansion: Business loans provide immediate access to funds, enabling companies to invest in growth opportunities, such as expanding operations, purchasing new equipment, or developing new Services. This can be crucial for businesses looking to scale and increase their market share.
• Managing Cash Flow and Seasonal Fluctuations: Business loans can help businesses manage cash flow, especially during slower periods or when dealing with unexpected expenses. They can also help businesses manage seasonal fluctuations by providing funds to cover inventory or staffing costs during peak seasons.
• Funding Strategic Investments: Businesses can use loans to invest in technology, research and development, or marketing initiatives, which can lead to long-term growth and competitive advantages.
• Flexibility in Repayment Options: Many lenders offer customizable repayment terms, allowing businesses to choose a plan that aligns with their cash flow and financial situation. This flexibility can help businesses avoid overextending themselves and manage their debt effectively.
• Building and Strengthening Credit History: Timely repayment of a business loan can positively impact a business's credit score, making it easier to secure future financing on favorable terms. A good credit history can also open doors to other financial opportunities, such as leasing equipment or securing better insurance rates.
• Retaining Ownership and Control: Unlike equity financing, where investors take a stake in the company, business loans allow businesses to maintain full ownership and control, which can be particularly important for entrepreneurs.
• Tax Benefits: In many jurisdictions, interest paid on business loans is tax-deductible, which can lower the overall cost of borrowing.
• Working Capital Support: Business loans can help businesses manage their working capital, ensuring they have enough cash on hand to cover day-to-day expenses, such as payroll, rent, and inventory.`,
    originalFaqs: [
      {
        question: "What is the minimum and maximum loan amount for a business loan?",
        answer: "The loan amount depends on your business's turnover, profitability, and repayment capacity. Typically, it ranges from ₹1 lakh to ₹5 crore or more."
      },
      {
        question: "What is the tenure for business loans?",
        answer: "Business loan tenure usually ranges from 1 to 10 years, depending on the loan amount and the nature of the business."
      },
      {
        question: "Can I get a business loan without collateral?",
        answer: "Yes, many lenders offer unsecured business loans based on your business's cash flow and creditworthiness, though secured loans may offer better terms."
      },
      {
        question: "What documents are required for a business loan?",
        answer: "Common documents include business registration, financial statements, bank statements, income tax returns, and a business plan."
      },
      {
        question: "How long does it take to get a business loan approved?",
        answer: "Approval time varies by lender, but it typically takes 3-15 working days after submission of all required documents."
      },
      {
        question: "Can I prepay my business loan?",
        answer: "Yes, most lenders allow prepayment of business loans, though some may charge a prepayment penalty."
      },
      {
        question: "What factors affect the interest rate on a business loan?",
        answer: "Interest rates depend on factors like your credit score, business vintage, turnover, profitability, and the loan amount and tenure."
      }
    ],
  },
  "dropline-overdraft": {
    title: "Dropline Overdraft",
    description: "A Dropline Overdraft allows you to overdraw funds from your current account up to a certain limit, with the withdrawal limit reducing every month from the sanctioned limit.",
    icon: TrendingUp,
    category: "Overdraft Facility",
    rate: "12% onwards",
    amount: "Up to ₹2 Cr",
    tenure: "Up to 5 years",
    processing: "1% to 2%",
    features: [
      "Withdrawal limit reduces monthly from sanctioned limit",
      "Available as secured or unsecured loan",
      "No collateral required for unsecured option",
      "Favored by retailers, traders, and manufacturers",
      "Interest calculated daily, charged monthly",
      "One-time processing fee",
      "Combination of overdraft and term loan",
      "Available monthly, quarterly, or yearly",
      "No yearly renewal charge",
    ],
    benefits: [
      "More flexible than traditional loans",
      "Only borrow what you need",
      "No monthly repayments like term loans",
      "Interest charged only on utilized amount",
      "No penalty for early repayment",
      "Operational flexibility",
      "Fusion of term loans and overdrafts",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Stable income source",
      "Good credit score (650+)",
      "Valid business registration (for business OD)",
      "Banking relationship with the lender",
    ],
    documents: [
      "Identity and address proof",
      "Income proof",
      "Bank statements",
      "Business documents (if applicable)",
      "Property documents (for secured OD)",
    ],
    detailedDescription: `With a Dropline Overdraft, a borrower can overdraw funds from their current account up to a certain limit, but at the same time the actual withdrawal limit of the overdraft reduces every month from the sanctioned limit.

Thus, a borrower can withdraw more funds than those actually present in their account, up to a certain limit. But the maximum overdraft limit sanctioned will reduce every month. The interest is applicable only on the borrowed amount and not on the entire overdraft limit. Funds can be deposited anytime back into the account to reduce the outstanding balance.

FEATURES OF DROPLINE OVERDRAFT
• The predominant feature of a dropline overdraft is that the withdrawal limit reduces from the sanctioned limit every month.
• A dropline overdraft can be availed both as a secured or an unsecured loan.
• In case of unsecured dropline overdraft, no collateral has to be submitted.
• A dropline overdraft is usually favoured by retailers, traders and manufacturers.
• The interest rate is calculated on a daily basis but charged on a monthly basis.
• A one-time processing fee discharged when you avail a dropline overdraft.
• Dropline overdraft is basically a combination of an overdraft and a term loan.
• It can be availed on a monthly, quarterly or yearly basis.
• Banks do not levy a yearly renewal charge for a dropline overdraft.

1. Benefits of Dropline Overdraft
• An overdraft is more flexible than a loan because you only borrow what you need, which may make it less expensive.
• No monthly repayments like term loans for the facility.
• The interest is charged only with the amount used out of the facility.
• In most cases, there is no penalty for paying off an overdraft sooner than intended.
• Can be operationalized monthly, quarterly, semi-annually, or annually.
• A fusion of term loans and overdrafts.`,
    originalFaqs: [
      {
        question: "What is a Dropline Overdraft?",
        answer: "A Dropline Overdraft is a credit facility where you can withdraw funds beyond your account balance up to a limit that reduces monthly, with interest charged only on the utilized amount."
      },
      {
        question: "How does the dropline feature work?",
        answer: "The maximum withdrawal limit reduces every month from the sanctioned limit, making it a combination of an overdraft and a term loan."
      },
      {
        question: "Is collateral required for a Dropline Overdraft?",
        answer: "It can be availed as both secured and unsecured. For unsecured dropline overdraft, no collateral is required."
      },
      {
        question: "Who typically uses Dropline Overdraft?",
        answer: "It is usually favored by retailers, traders, and manufacturers who need flexible working capital financing."
      },
      {
        question: "How is interest calculated?",
        answer: "Interest is calculated on a daily basis but charged on a monthly basis, and only on the amount actually utilized."
      },
      {
        question: "Are there any renewal charges?",
        answer: "Banks do not levy a yearly renewal charge for a dropline overdraft, though there is a one-time processing fee."
      },
      {
        question: "Can I repay early without penalty?",
        answer: "In most cases, there is no penalty for paying off a dropline overdraft sooner than intended."
      }
    ],
  },
  "supply-chain-finance": {
    title: "Supply Chain Finance",
    description: "Supply Chain Finance (SCF) optimizes cash flow across a company's supply chain by enabling early payment to suppliers while extending payment terms for buyers.",
    icon: TrendingUp,
    category: "Trade Finance",
    rate: "8% onwards",
    amount: "Up to ₹10 Cr",
    tenure: "Up to 180 days",
    processing: "0.5% to 2%",
    features: [
      "Buyer-led financing process",
      "Extended payment terms for buyers",
      "Early payment for suppliers",
      "Reduced financing costs",
      "Improved working capital",
      "Strengthened supply chain relationships",
      "Technological integration",
      "Risk mitigation",
      "Access to capital for SMEs",
      "Off-balance sheet funding",
    ],
    benefits: [
      "Improved cash flow for suppliers",
      "Reduced financing costs",
      "Extended payment terms for buyers",
      "Strengthened supplier relationships",
      "Optimized working capital",
      "Reduced risk",
      "Increased efficiency",
      "Enhanced financial stability",
      "Competitive advantage",
    ],
    eligibility: [
      "Established buyer-supplier relationship",
      "Strong buyer credit rating",
      "Valid invoices from approved suppliers",
      "Legitimate business transaction",
      "Supplier willingness to participate",
    ],
    documents: [
      "Invoice details",
      "Purchase order",
      "Supplier agreement",
      "Buyer confirmation",
      "Business registration documents",
    ],
    detailedDescription: `Supply Chain Finance (SCF) is a set of financial solutions designed to optimize cash flow across a company's supply chain by enabling early payment to suppliers while extending payment terms for buyers. It improves working capital for both parties involved and fosters stronger relationships within the supply chain. SCF leverages the buyer's strong credit rating to provide suppliers with access to lower-cost financing options, typically through a third-party financial institution.
Key Features of Supply Chain Finance:
• Buyer-led financing:
The process is initiated by the buyer, who works with a financial institution to facilitate early payments to their suppliers.
• Extended payment terms for buyers:
Buyers can negotiate longer payment periods with their suppliers, improving their own working capital and cash flow.
• Early payment for suppliers:
Suppliers receive faster payment on their invoices, often within a few days, rather than waiting for the buyer's standard payment terms.
• Reduced financing costs:
By leveraging the buyer's creditworthiness, suppliers can access financing at lower interest rates than traditional options.
• Improved working capital:
SCF optimizes working capital for both buyers and suppliers, allowing them to better manage their cash flow and make strategic investments.
• Strengthened supply chain relationships:
SCF fosters collaboration and stronger relationships between buyers and suppliers by creating a more efficient and reliable supply chain.
• Technological integration:
SCF often utilizes technology platforms to streamline the invoice approval and payment process, enhancing transparency and efficiency.
• Risk mitigation:
By providing a more predictable and reliable payment process, SCF helps to mitigate the risk of supply chain disruptions.
• Access to capital for suppliers:
SCF can be particularly beneficial for smaller and medium-sized enterprises (SMEs) who may have limited access to traditional financing.
• Off-balance sheet funding:
In some cases, SCF can be structured as off-balance sheet funding, which can improve a company's financial ratios.

Key Advantages of Supply Chain Finance:
• Improved Cash Flow:
SCF allows suppliers to receive early payment on their invoices, improving their cash flow and financial stability.
• Reduced Financing Costs:
By leveraging the buyer's strong credit rating, suppliers can often access financing at a lower cost than through traditional methods like factoring.
• Extended Payment Terms for Buyers:
SCF enables buyers to negotiate longer payment terms with their suppliers while still ensuring the suppliers receive timely payments.
• Strengthened Supplier Relationships:
Early and reliable payments can foster stronger relationships between buyers and suppliers, leading to better collaboration and potentially better pricing or terms.
• Optimized Working Capital:
SCF helps both buyers and suppliers optimize their working capital by improving cash flow management and reducing the need for short-term borrowing.
• Reduced Risk:
SCF can mitigate risks associated with late payments and payment delays, ensuring smoother operations across the supply chain.
• Increased Efficiency:
Automation and technology integration in SCF processes can streamline invoice processing, payment tracking, and reconciliation, leading to increased efficiency.
• Enhanced Financial Stability:
For suppliers, particularly small and medium-sized enterprises (MSMEs), SCF can provide crucial financial stability, allowing them to focus on growth and operational efficiency.
• Competitive Advantage:
SCF can make businesses more attractive to work with, potentially leading to better pricing, faster shipping, or other benefits when negotiating deals with suppliers.`,
    originalFaqs: [
      {
        question: "What is Supply Chain Finance?",
        answer: "Supply Chain Finance is a set of financial solutions that optimize cash flow across a supply chain by enabling early payment to suppliers while extending payment terms for buyers."
      },
      {
        question: "How does Supply Chain Finance work?",
        answer: "The buyer initiates the process by working with a financial institution to facilitate early payments to suppliers. Suppliers get paid early, and buyers get extended payment terms."
      },
      {
        question: "Who benefits from Supply Chain Finance?",
        answer: "Both buyers and suppliers benefit. Suppliers get early payment and lower financing costs, while buyers get extended payment terms and improved working capital."
      },
      {
        question: "Is Supply Chain Finance suitable for small suppliers?",
        answer: "Yes, SCF is particularly beneficial for SMEs who may have limited access to traditional financing, as it leverages the buyer's credit rating."
      },
      {
        question: "What is the cost of Supply Chain Finance?",
        answer: "The cost is typically lower than traditional financing options, as it leverages the buyer's strong credit rating. Costs vary based on the specific program and parties involved."
      },
      {
        question: "How long does it take to set up Supply Chain Finance?",
        answer: "Setup time varies, but once established, the process is typically quick, with suppliers receiving payment within a few days of invoice approval."
      },
      {
        question: "Can Supply Chain Finance be used for international transactions?",
        answer: "Yes, SCF can be used for both domestic and international transactions, making it particularly useful for global supply chains."
      }
    ],
  },
  "vendor-financing": {
    title: "Vendor Financing",
    description: "Vendor financing occurs when the seller provides financing to the buyer to facilitate the purchase, acting as the lender for the transaction.",
    icon: Briefcase,
    category: "Trade Finance",
    rate: "12% onwards",
    amount: "Up to ₹5 Cr",
    tenure: "Up to 3 years",
    processing: "1% to 2%",
    features: [
      "Direct financing from vendor to buyer",
      "Deferred payment arrangements",
      "Interest charges on financed amount",
      "Collateral may be required",
      "Short-term working capital solution",
      "Flexible repayment terms",
      "Streamlined approval process",
      "Relationship building between parties",
    ],
    benefits: [
      "Improved cash flow for buyers",
      "Easier access to financing",
      "Flexible terms from vendors",
      "Strengthened relationships",
      "Faster transaction completion",
      "Potential for business growth",
      "Increased sales for vendors",
      "Competitive advantage",
      "Revenue generation through interest",
      "Stronger customer relationships",
      "Reduced risk through careful assessment",
    ],
    eligibility: [
      "Established vendor-buyer relationship",
      "Good credit history",
      "Legitimate business transaction",
      "Ability to repay the financed amount",
      "Vendor's willingness to provide financing",
    ],
    documents: [
      "Purchase agreement",
      "Financial statements",
      "Credit history",
      "Business registration",
      "Repayment plan",
    ],
    detailedDescription: `Vendor financing, also known as seller financing, occurs when the seller of a product or service provides financing to the buyer to facilitate the purchase. Instead of the buyer securing a loan from a bank or other financial institution, the seller acts as the lender, offering a payment plan over an agreed-upon period. This arrangement is common in various sectors, including real estate, business acquisitions, and equipment purchases.
Key Features of Vendor Finance:
• Direct Financing:
Instead of going through banks or other lenders, the buyer gets financing directly from the vendor.
• Deferred Payment:
The buyer doesn't have to pay the full purchase price upfront; they can pay it off over time, often after selling the finished product.
• Interest Charges:
Vendors typically charge interest on the financed amount, compensating them for the risk and providing an additional revenue stream.
• Collateral:
In some cases, the buyer may need to provide collateral (like assets or invoices) to secure the financing.
• Short-Term Working Capital:
Vendor financing is often used as a short-term solution to manage cash flow and meet immediate business needs.
• Flexibility:
It offers flexible repayment terms and can be tailored to the specific needs of both the buyer and the seller.
• Streamlined Process:
Vendor financing can often involve quicker approval processes and less documentation compared to traditional loans.
• Relationship Building:
It can strengthen the relationship between the vendor and the buyer, fostering long-term partnerships.

Advantages of Vendor Finance:
For Buyers:
• Improved Cash Flow:
Buyers can acquire goods or services without a large upfront payment, preserving their working capital for other essential business needs.
• Easier Access to Financing:
Vendor financing can be more accessible than traditional loans, especially for businesses with limited credit history or those struggling to qualify for traditional financing.
• Flexible Terms:
Vendors may offer more flexible repayment terms than banks, including customized payment schedules and potentially lower interest rates.
• Strengthened Relationships:
Vendor financing fosters stronger relationships between buyers and sellers, leading to potential future collaborations and business opportunities.
• Faster Transactions:
Vendor financing can streamline the purchasing process, as it eliminates the need for lengthy loan applications with traditional lenders.
• Potential for Growth:
By freeing up capital and providing access to necessary resources, vendor financing can help businesses grow and expand.
For Vendors:
• Increased Sales:
Offering vendor financing can make Services or services more attractive and accessible, potentially leading to increased sales volume.
• Competitive Advantage:
Vendor financing can provide a competitive edge, allowing vendors to stand out from competitors who may not offer financing options.
• Revenue Generation:
Vendors can earn interest on the financed amount, generating additional revenue streams.
• Stronger Customer Relationships:
Vendor financing can build stronger, more loyal customer relationships, leading to repeat business and referrals.
• Reduced Risk:
While there's risk of non-payment, vendors can mitigate this by carefully assessing the buyer's creditworthiness and structuring appropriate repayment terms.`,
    originalFaqs: [
      {
        question: "What is vendor financing?",
        answer: "Vendor financing occurs when the seller provides financing to the buyer to facilitate the purchase, acting as the lender for the transaction."
      },
      {
        question: "How does vendor financing differ from traditional loans?",
        answer: "In vendor financing, the seller acts as the lender instead of a bank or financial institution, often with more flexible terms and quicker approval."
      },
      {
        question: "What are the benefits for buyers?",
        answer: "Buyers get improved cash flow, easier access to financing, flexible terms, faster transactions, and potential for business growth."
      },
      {
        question: "What are the benefits for vendors?",
        answer: "Vendors can increase sales, gain competitive advantage, generate additional revenue through interest, build stronger customer relationships, and potentially reduce risk."
      },
      {
        question: "Is collateral required for vendor financing?",
        answer: "It depends on the agreement. Some vendor financing arrangements require collateral, while others may not."
      },
      {
        question: "What types of businesses use vendor financing?",
        answer: "Vendor financing is common in real estate, business acquisitions, equipment purchases, and various other sectors."
      },
      {
        question: "How is the interest rate determined?",
        answer: "Interest rates are negotiated between the vendor and buyer, often based on the risk involved and market conditions."
      }
    ],
  },
  "factoring-limit": {
    title: "Factoring Limit",
    description: "Factoring is a financial technique where a business sells its accounts receivable to a third party at a discount to get immediate cash.",
    icon: CreditCard,
    category: "Working Capital",
    rate: "12% onwards",
    amount: "Up to ₹5 Cr",
    tenure: "Up to 120 days",
    processing: "1% to 3%",
    features: [
      "Immediate cash for accounts receivable",
      "No need for collateral",
      "Improved cash flow",
      "Reduced administrative burden",
      "Access to finance for startups",
      "Bad debt protection (in some cases)",
      "Quick finance arrangement",
      "Focus on core business",
    ],
    benefits: [
      "Immediate cash flow improvement",
      "Reduced collection time and effort",
      "Access to finance without traditional loans",
      "Potential bad debt protection",
      "Faster funding compared to bank loans",
      "No security requirement",
      "Focus on core business operations",
    ],
    eligibility: [
      "Valid accounts receivable",
      "Creditworthy customers",
      "Legitimate business transaction",
      "Proper invoicing system",
      "Business registration documents",
    ],
    documents: [
      "Invoice copies",
      "Customer details",
      "Business registration",
      "Financial statements",
      "Delivery proofs",
    ],
    detailedDescription: `Factoring limits is a technique used in calculus to evaluate limits of functions, particularly when direct substitution leads to an indeterminate form like 0/0. This method involves factoring the numerator and/or denominator of the function to identify and cancel out common factors, allowing for direct substitution and limit evaluation.
1. Key Features
• Indeterminate Forms: Factoring is crucial when direct substitution (plugging in the value x is approaching) results in expressions like 0/0, indicating an indeterminate form.
• Factoring and Cancellation: The core idea is to factor the numerator and/or denominator of the function. If a common factor exists, it can be cancelled out, simplifying the expression.
• Simplified Function Property: After cancellation, the simplified expression often allows for direct substitution to find the limit. This works because the original and simplified functions are equal everywhere except at the point where the common factor was zero.
• "Hole" in the Graph: Factoring and cancelling out a common factor often reveals a "hole" in the graph of the function at the point where the limit is being evaluated, but the limit itself still exists and can be found by evaluating the simplified expression.
• Substitution: Once simplified, direct substitution of the value x is approaching into the simplified function allows for the limit to be easily calculated.

2. Advantages of Factoring
• Improved Cash Flow: Factoring provides immediate cash, which can be crucial for businesses needing to meet payroll, pay suppliers, or fund other immediate expenses.
• Reduced Administrative Burden: By outsourcing invoice collection, businesses can focus on core operations and growth rather than chasing payments.
• Access to Finance for Startups and Businesses with Bad Credit: Factoring can be an option for businesses that may not qualify for traditional financing.
• Potential for Bad Debt Evasion: In "without recourse" factoring, the factor assumes the risk of non-payment by the customer.
• Quick Finance Arrangement: Factoring can be a faster way to secure funding compared to bank loans.
• No Requirement for Security: Advances are typically based on the creditworthiness of the receivables, not the business's assets.
• Focus on Core Business: By outsourcing collections, businesses can dedicate more time and resources to their primary operations and growth.`,
    originalFaqs: [
      {
        question: "What is factoring?",
        answer: "Factoring is a financial technique where a business sells its accounts receivable to a third party (factor) at a discount to get immediate cash."
      },
      {
        question: "How does factoring work?",
        answer: "The business sells its invoices to the factor, who advances a percentage of the invoice value immediately and collects payment from the customer."
      },
      {
        question: "What is the cost of factoring?",
        answer: "The cost typically includes a discount fee (1-5% of invoice value) and interest on the advance. Total costs usually range from 1-3% per month."
      },
      {
        question: "What types of factoring are available?",
        answer: "The main types are recourse factoring (business retains risk of non-payment) and non-recourse factoring (factor assumes the risk)."
      },
      {
        question: "Is collateral required for factoring?",
        answer: "No, factoring is based on the creditworthiness of your customers' invoices, not your business assets."
      },
      {
        question: "How quickly can I get funding through factoring?",
        answer: "Most factors provide funding within 24-48 hours of invoice verification, making it much faster than traditional loans."
      },
      {
        question: "Can startups use factoring?",
        answer: "Yes, factoring is particularly suitable for startups and businesses with limited credit history, as it's based on customer creditworthiness."
      }
    ],
  },
  "personal-loan": {
    title: "Personal Loan",
    description: "A Personal Loan is an unsecured loan offered to individuals to meet various personal financial needs, with no collateral required.",
    icon: CreditCard,
    category: "Personal Finance",
    rate: "10% onwards",
    amount: "Up to ₹50 Lakh",
    tenure: "Up to 5 years",
    processing: "1% to 3%",
    features: [
      "Unsecured loan - no collateral required",
      "Fixed tenure from 1 to 5 years",
      "Loan amount from ₹50,000 to ₹50 lakh",
      "EMI-based repayment",
      "Digital application process",
      "Credit score-based approval",
      "Interest rate 10% to 24% p.a.",
      "Pre-closure option",
      "Top-up facility",
      "Balance transfer facility",
    ],
    benefits: [
      "No asset risk",
      "Quick access to funds",
      "Freedom of use",
      "Budget-friendly EMIs",
      "No guarantor required",
      "Builds credit history",
      "No end-use restriction",
      "Easy processing",
      "Multiple lender options",
      "Debt consolidation",
    ],
    eligibility: [
      "Age: 21-60 years",
      "Minimum monthly income: ₹15,000",
      "Good credit score (650+)",
      "Stable employment",
      "Valid identity and address proof",
    ],
    documents: [
      "Identity proof (Aadhaar, PAN, Passport)",
      "Address proof",
      "Income proof (salary slips, bank statements)",
      "Employment proof",
      "Passport size photographs",
    ],
    detailedDescription: `A Personal Loan is an unsecured loan offered to individuals to meet various personal financial needs. It requires no collateral and is ideal for expenses like weddings, travel, medical emergencies, or home renovation. The loan is repaid in fixed EMIs over a flexible tenure, typically ranging from 1 to 5 years. Approval is based on income, credit score, and repayment capacity. With minimal documentation and quick disbursal, it's a convenient short-term borrowing option.

1. Key Features of a Personal Loan
• Unsecured Loan – No need to pledge assets.
• Fixed Tenure – Usually 1 to 5 years.
• Loan Amount Flexibility – Ranges from ₹50,000 to ₹50 lakh or more.
• EMI-Based Repayment – Monthly installments with fixed or reducing interest.
• Digital Application – Can be applied online via website or app.
• Credit Score-Based Approval – Heavily dependent on CIBIL or other scores.
• Interest Rate Range – Typically 10% to 24% p.a. based on profile.
• Pre-closure Option – Can repay before tenure with/without charges.
• Top-up Facility – Option to borrow more on an existing personal loan.
• Balance Transfer Facility – Switch to another lender for better rates.

2. Advantages of a Personal Loan
• No Asset Risk – You don't risk losing property or valuables.
• Quick Access to Funds – Useful during emergencies or urgent needs.
• Freedom of Use – Spend the amount however you want.
• Budget-Friendly EMIs – Fixed repayment helps manage finances easily.
• No Need for Guarantor – Standalone eligibility based on your profile.
• Builds Credit History – Improves your score if repaid on time.
• No End-Use Restriction – Use for marriage, travel, education, etc.
• Easy Processing – Especially if you are an existing customer.
• Multiple Lender Options – More choices mean better terms for you.
• Helps Consolidate Debt – Can be used to pay off costlier credit card or loan debts.`,
    originalFaqs: [
      {
        question: "What is the minimum and maximum amount I can borrow?",
        answer: "Personal loan amounts typically range from ₹50,000 to ₹50 lakh, depending on your income, credit score, and repayment capacity."
      },
      {
        question: "What is the tenure for a personal loan?",
        answer: "Personal loan tenure usually ranges from 1 to 5 years, allowing you to choose a repayment period that suits your financial situation."
      },
      {
        question: "Do I need collateral for a personal loan?",
        answer: "No, personal loans are unsecured loans that don't require any collateral or security."
      },
      {
        question: "How is my eligibility determined?",
        answer: "Eligibility is based on factors like your age, income, credit score, employment stability, and existing financial obligations."
      },
      {
        question: "What documents do I need to apply?",
        answer: "You'll need identity proof, address proof, income proof, employment proof, and passport-sized photographs."
      },
      {
        question: "How long does approval take?",
        answer: "Most lenders approve personal loans within 24-72 hours if all documents are in order."
      },
      {
        question: "Can I prepay my personal loan?",
        answer: "Yes, you can prepay your personal loan. Some lenders may charge a prepayment penalty, while others don't."
      }
    ],
  },
  "home-loan": {
    title: "Home Loan",
    description: "A home loan helps you purchase, construct, or renovate your dream home with flexible repayment options and attractive interest rates.",
    icon: Home,
    category: "Home Finance",
    rate: "8.5% onwards",
    amount: "Up to ₹10 Cr",
    tenure: "Up to 30 years",
    processing: "0.5% to 1%",
    features: [
      "Purchase new or existing home",
      "Construction of new home",
      "Home extension and renovation",
      "Home improvement projects",
      "Balance transfer facility",
      "Composite home loan option",
      "Tax benefits on interest and principal",
      "Lower interest rates",
      "Long repayment tenure",
      "No prepayment penalty (floating rate)",
    ],
    benefits: [
      "Tax benefits up to ₹3.5 lakh",
      "Lower interest rates than other loans",
      "Top-up loan facility",
      "Due diligence of property",
      "Long repayment tenure up to 30 years",
      "No prepayment penalty",
      "Balance transfer option",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Stable income source",
      "Good credit score (650+)",
      "Property in approved location",
      "Valid property documents",
    ],
    documents: [
      "Identity and address proof",
      "Income proof",
      "Property documents",
      "Bank statements",
      "Employment proof",
    ],
    detailedDescription: `Buying a house is one of the biggest dreams come true for most people and an extravagant affair altogether. Imparting life to such a dream requires a lot of effort from the buyers' end and the best one can do to accommodate the home in their budget is through a home loan.
A home loan can be opted to buy a new house/flat or a plot of land where you construct the house, and even for renovation, extension, and repairs to an existing house.

1. Types of Home Loans in India

• Home Loan - This is the most common type of home loan availed to purchase a house. There are many housing finance companies, public banks, and private banks that offer housing loans where you borrow money to purchase the house of your choice and repay the loan in monthly instalments. You can get up to 80%-90% of the house's market price in the form of financing. The lender will hold the house until you completely repay the loan.

• Home Construction Loan - This is the right home loan type if you already have a plot of land and you need financing to construct a house in that land.

• Home Extension Loan - Say you already own a house and you would like to extend the house with another room or another floor to accommodate the growing family. Home extension loan provides financing for this purpose.

• Home Improvement Loan - A home improvement loan provides financing for renovating or repairing the house if there's any fault in the existing system, such as painting the house's interior or exterior, plumbing, upgrading the electrical system, waterproofing the ceiling, and more.

• Home Loan Balance Transfer - The current home loan interest rate may be overwhelming, or you may not be happy with your current lender's service; you can transfer the home loan's outstanding balance to a different lender who offers a lower interest rate and better service. Upon transfer, you can even check out the possibilities of a top-up loan on your existing one.

• Composite Home Loan - This type of home loan provides financing for purchasing the plot of land where you would like to construct a house and for the construction, both within a single loan.

2. Benefits of Taking a Home Loan

• Tax Benefits - The foremost benefit of a home loan is the income tax deduction you can claim on the interest and principal repayments. You can claim up to Rs.1.5 lakh on principal repayments u/s 80C, up to Rs.2 lakh on interest repayments u/s 24B, up to Rs.2 lakh on interest repayment in special circumstances u/s 80EE and 80EEA, and up to Rs.1.5 lakh on stamp duty expenses u/s 80C.

• Lower Interest Rate - The home loan interest rate is much lower as compared to any other loan types available. If you come across a cash crunch, you may get a top-up on the existing home loan at a lower interest rate than a personal loan to solve the issue.

• Due Diligence of Property - When you go through a bank to purchase a house, the bank will conduct thorough checks on the property from the legal perspective and check if all the documents produced are valid. This due diligence check from the bank's end will reduce the risk of you being scammed. If the bank approves the property, that means you and your house are safe.

• Long Repayment Tenure - Unlike any other loans, home loans come with longer repayment tenure, as much as 25-30 years. This is owing to the significant loan amount one will have to borrow to purchase a house. Spreading the loan amount and interest applicable over a longer tenure will reduce the monthly EMIs reducing the borrower's burden.

• No Prepayment Penalty - When you take a floating-rate home loan, you can make prepayments towards the loan whenever you have a lump sum at hand without having to pay any prepayment penalty. This will help you close the home loan much before the set loan tenure.

• Balance Transfer Facility - You can transfer the home loan from one lender to another for several reasons, such as the interest rate, service charges, customer service experience, and others.`,
    originalFaqs: [
      {
        question: "What is the maximum loan amount I can get?",
        answer: "You can get up to 80-90% of the property's market value as a home loan, subject to your income and repayment capacity."
      },
      {
        question: "What is the tenure for a home loan?",
        answer: "Home loan tenure can range from 5 to 30 years, depending on your age and the lender's policies."
      },
      {
        question: "What are the tax benefits of a home loan?",
        answer: "You can claim tax benefits up to ₹1.5 lakh on principal repayment (u/s 80C) and up to ₹2 lakh on interest repayment (u/s 24B)."
      },
      {
        question: "Can I get a home loan for property renovation?",
        answer: "Yes, you can get a home improvement loan for renovating or repairing your existing house."
      },
      {
        question: "What is a home loan balance transfer?",
        answer: "Balance transfer allows you to transfer your existing home loan to another lender offering better interest rates or terms."
      },
      {
        question: "Is there a prepayment penalty?",
        answer: "For floating-rate home loans, there is usually no prepayment penalty. For fixed-rate loans, a penalty may apply."
      },
      {
        question: "Can I get a top-up loan on my existing home loan?",
        answer: "Yes, many lenders offer top-up loans on existing home loans for additional funding needs."
      }
    ],
  },
  "loan-against-securities": {
    title: "Loan Against Securities",
    description: "Loan Against Securities (LAS) is granted against bonds, insurance policies, Mutual Fund units, and shares as collateral, provided as an overdraft facility.",
    icon: TrendingUp,
    category: "Secured Loans",
    rate: "10% onwards",
    amount: "Up to ₹5 Cr",
    tenure: "Up to 3 years",
    processing: "0.5% to 1%",
    features: [
      "Overdraft facility against securities",
      "Continue receiving dividends and bonuses",
      "Loan based on portfolio size",
      "Lower interest rates than unsecured loans",
      "Faster disbursement",
      "Liquidity without selling investments",
      "Low-risk borrowing option",
    ],
    benefits: [
      "Lower interest rates",
      "Faster loan approval",
      "Liquidity without selling investments",
      "Retain control of assets",
      "Continue earning from investments",
      "Flexible withdrawal limits",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Valid securities as collateral",
      "Good credit score",
      "Stable income source",
      "Securities should be in demat form",
    ],
    documents: [
      "Demat account statement",
      "Security holdings proof",
      "Identity and address proof",
      "Income proof",
      "Bank statements",
    ],
    detailedDescription: `Loan Against Securities (LAS) is a type of loan that is granted against bonds, insurance policies, Mutual Fund units and shares as collateral. Such loans are provided as an overdraft facility. This means you can withdraw any amount you need within the sanctioned loan limit, which is typically based on the value of the pledged asset. The interest on a Loan Against Securities is charged on the amount withdrawn by you for that period.
One of the key benefits of LAS is that you continue receiving dividends and bonuses associated with your investments even when they are pledged to the Bank. You can avail a loan depending upon size of your portfolio.
How a Loan Against Securities (LAS) differs from other loans
Bonds, stocks (shares) and Mutual Funds are examples of assets that can serve as collateral for a Loan Against Securities (LAS). Due to the backing of this collateral, LAS provides lower interest rates than unsecured loans, which are based on your credit rating. LAS is a practical choice for people who own shares, Mutual Funds, bonds etc. because it is also disbursed faster.
How does Loan Against Securities (LAS) work?
You pledge your assets- like stocks, bonds or Mutual Funds- as security for the Loan. The market value of the securities determines the Loan amount. After evaluating and approving the securities, ICICI Bank will provide the Loan, which you then have to repay in accordance with the conditions that were agreed upon.
Benefits of Loan Against Securities (LAS)
Lower interest rates and faster loan approval are among the advantages of Loan Against Securities (LAS). This Loan gives you liquidity without requiring you to sell your investments, allowing you to keep control of your assets. It's a low-risk borrowing choice.`,
    originalFaqs: [
      {
        question: "What securities can be pledged for LAS?",
        answer: "You can pledge shares, mutual funds, bonds, insurance policies, and other approved securities."
      },
      {
        question: "How much loan can I get against my securities?",
        answer: "The loan amount is typically 50-70% of the market value of your securities, depending on the type of security."
      },
      {
        question: "Can I continue to receive dividends and bonuses?",
        answer: "Yes, you continue to receive all dividends, bonuses, and rights associated with your pledged securities."
      },
      {
        question: "What happens if the value of my securities falls?",
        answer: "If the value falls below a certain threshold, you may need to pledge additional securities or repay part of the loan."
      },
      {
        question: "How quickly can I get the loan disbursed?",
        answer: "LAS is typically disbursed faster than other loans, often within 3-5 working days after document submission."
      },
      {
        question: "Can I sell my pledged securities?",
        answer: "You cannot sell pledged securities without the lender's approval. You would need to repay the loan or provide alternative collateral first."
      },
      {
        question: "What is the tenure for Loan Against Securities?",
        answer: "LAS tenure is usually 1-3 years, but it can be renewed based on the lender's policies and your requirements."
      }
    ],
  },
  "used-car-loan": {
    title: "Used Car Loan",
    description: "A used car loan helps you finance the purchase of a pre-owned car with attractive interest rates and flexible repayment options.",
    icon: CreditCard,
    category: "Vehicle Finance",
    rate: "12% onwards",
    amount: "Up to ₹50 Lakh",
    tenure: "Up to 7 years",
    processing: "1% to 2%",
    features: [
      "Financing for new and used cars",
      "Up to 85-90% financing of on-road price",
      "Tenure from 1 to 7 years",
      "Loan up to 3x annual income",
      "Instant financing facilities",
      "Additional discounts with tie-ups",
      "Car held as collateral",
      "EMI-based repayment",
    ],
    benefits: [
      "Easy and hassle-free application",
      "Paperless process",
      "Attractive interest rates",
      "Flexible repayment options",
      "Quick approval and disbursal",
      "Minimal documentation",
      "Online application facility",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Minimum monthly income: ₹20,000",
      "Good credit score (650+)",
      "Stable employment",
      "Valid driving license",
    ],
    documents: [
      "Identity and address proof",
      "Income proof",
      "Employment proof",
      "Car quotation",
      "Insurance papers",
    ],
    detailedDescription: `Owning a car was once a luxurious commodity to have. But in today's economically developing world, a car is a necessity and convenience to travel from one corner of the ever-expanding city to the other.
Though everybody may not have enough cash to purchase the car with a lump-sum payment, numerous lenders can help you realise your dream of buying the car through a car loan.
Applying for a car loan is now hassle-free, easy, and paperless. Just make a few clicks, and you can submit the car loan application form online. Almost every bank today offers car loans at attractive interest rates. Based on one's affordability, it is now quite easy to take a car loan and then pay EMIs without really biting into a person's finances

Features and Benefits of Car Loan
• Get financing for purchasing new and used cars.
• The financing can go up to 85%-90% of the on-road price of the car. Some banks offer up to 100% financing on the vehicle's on-road price to certain conditions.
• The loan tenure can range from one year up to seven years.
• The loan amount can be up to three times the annual income of the applicant.
• Some lenders offer instant financing facilities for cars.
• You may get additional discounts and offers if you choose to purchase a car from the dealer or manufacturer the bank has a tie-up with.
• The car purchased through financing will be held as collateral until the loan is repaid.
• The repayment structure most commonly followed for a car loan is equated monthly instalments (EMI).`,
    originalFaqs: [
      {
        question: "Can I get a loan for a used car?",
        answer: "Yes, most lenders offer loans for both new and used cars, subject to the car's age and condition."
      },
      {
        question: "What is the maximum financing for a used car?",
        answer: "For used cars, you can typically get 70-80% of the car's market value as loan, depending on the lender and car condition."
      },
      {
        question: "What is the tenure for a used car loan?",
        answer: "Used car loan tenure usually ranges from 1 to 5 years, depending on the car's age and your repayment capacity."
      },
      {
        question: "What documents are required for a used car loan?",
        answer: "You'll need identity proof, address proof, income proof, car quotation, insurance papers, and RC book of the car."
      },
      {
        question: "Can I get 100% financing for a used car?",
        answer: "While some lenders offer up to 100% financing for new cars, for used cars it's typically 70-80% of the market value."
      },
      {
        question: "Is the car insured during the loan tenure?",
        answer: "Yes, the car must be comprehensively insured throughout the loan tenure, with the lender named as the beneficiary."
      },
      {
        question: "Can I prepay my car loan?",
        answer: "Yes, you can prepay your car loan. Some lenders may charge a prepayment penalty, while others don't."
      }
    ],
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [showEMICalculator, setShowEMICalculator] = useState(false)
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(10)
  const [tenure, setTenure] = useState(12)
  const product = productData[slug as keyof typeof productData]

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  const Icon = product.icon

  const calculateEMI = () => {
    const principal = loanAmount
    const rate = interestRate / 100 / 12
    const months = tenure
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

  // Function to format the detailed description
  const renderDetailedDescription = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => {
      // Check if it's a numbered heading (main point)
      if (/^\d+\.\s/.test(paragraph)) {
        const lines = paragraph.split('\n')
        const mainHeading = lines[0].replace(/^\d+\.\s*/, '')
        const subContent = lines.slice(1)
        
        return (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
              {mainHeading}
            </h3>
            {subContent.length > 0 && (
              <div className="ml-4">
                {subContent.map((line, idx) => {
                  if (line.startsWith('• ')) {
                    return (
                      <ul key={idx} className="list-disc list-inside ml-6 mb-2">
                        <li className="text-muted-foreground">{line.replace('• ', '')}</li>
                      </ul>
                    )
                  } else if (line.trim()) {
                    return (
                      <p key={idx} className="text-muted-foreground mb-2 leading-relaxed">
                        {line}
                      </p>
                    )
                  }
                  return null
                })}
              </div>
            )}
          </div>
        )
      }
      // Check if it's a bullet list section
      else if (paragraph.includes('\n• ')) {
        const lines = paragraph.split('\n')
        const title = lines[0]
        const items = lines.slice(1)
        return (
          <div key={index} className="mb-6">
            <p className="font-medium mb-2 text-foreground">{title}</p>
            <ul className="list-disc list-inside ml-6 space-y-1">
              {items.map((item, idx) => (
                <li key={idx} className="text-muted-foreground">{item.replace('• ', '')}</li>
              ))}
            </ul>
          </div>
        )
      }
      // Regular paragraph
      else {
        return (
          <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
            {paragraph}
          </p>
        )
      }
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">
            Services
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.title}</span>
        </div>
      </div>

      {/* Product Hero - Background image with bottom fade and overlay content */}
      <section className="relative py-16 overflow-hidden">
        
        <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/10 to-transparent" />
       
          <img
            src={`/images/slug header.png`}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-background/60 backdrop-blur rounded-xl flex items-center justify-center border border-border/50">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <Badge className="mb-2">{product.category}</Badge>
                <h1 className="text-4xl font-bold text-foreground">{product.title}</h1>
              </div>
            </div>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-6 h-6 text-primary mr-2" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-primary mr-2" />
                  Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Information Section - This is the NEW section for exact content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-3xl">
                <BookOpen className="w-7 h-7 text-primary mr-3" />
                Detailed Information
              </CardTitle>
              <p className="text-muted-foreground">
                Everything you need to know about {product.title}, presented exactly as provided.
              </p>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-foreground">
                {renderDetailedDescription(product.detailedDescription)}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Eligibility & Documents */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 text-primary mr-2" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.eligibility.map((criteria, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{criteria}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 text-primary mr-2" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.documents.map((document, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{document}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* FAQ Section - Using the EXACT FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-primary mr-3" />
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">Get answers to common questions about {product.title}</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {product.originalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get instant approval and competitive rates. Start your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              onClick={() => window.open('tel:+919664982919', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Expert
            </Button>
          </div>
        </div>
      </section>

   <Footer />
      {/* EMI Calculator Modal */}
      {showEMICalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
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
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Tenure (Months)</label>
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md"
                />
              </div>
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between">
                  <span>EMI:</span>
                  <span className="font-semibold text-primary">₹{emi.toLocaleString()} INR</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Interest:</span>
                  <span className="font-semibold">₹{totalInterest.toLocaleString()} INR</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount:</span>
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
