import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col justify-evenly">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
