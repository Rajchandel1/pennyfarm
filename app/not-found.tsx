import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from './header/page'
import Footer from './footer/page'
import { AlertTriangle, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center px-4">
        <div className="max-w-md">
          <div className="flex justify-center mb-6 mt-5">
            <AlertTriangle className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
          <p className="mt-4 text-muted-foreground">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button className='mb-4' size="lg">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}