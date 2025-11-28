import { ReactNode } from 'react'
import Navigation from './ui/Navigation'
import Footer from './ui/Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 mt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout