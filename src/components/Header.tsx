import { Link } from 'react-router'

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex flex-wrap items-start px-4 py-3 md:gap-4">
        <Link
          to="/"
          className="text-xl font-bold tracking-wide transition-colors"
        >
          Algorithm Visualizer
        </Link>
      </div>
    </nav>
  )
}
