import { SortAsc } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function Header() {
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      navigate(e.target.value)
    }
  }

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto flex items-center gap-10 px-4 py-3">
        <Link to="/" className="text-xl font-semibold">
          Algorithm Visualizer
        </Link>

        <select
          onChange={handleChange}
          className="cursor-pointer rounded border-gray-300 bg-transparent py-1.5 pl-3 pr-8 text-sm"
          defaultValue="Quick Sort"
        >
          <option
            className="appearance-none border-none"
            value="/sort/quick-sort"
          >
            Quick Sort
          </option>
          <option
            className="appearance-none border-none"
            value="/sort/merge-sort"
          >
            Merge Sort
          </option>
          <option
            className="appearance-none border-none"
            value="/sort/bubble-sort"
          >
            Bubble Sort
          </option>
          <option
            className="appearance-none border-none"
            value="/sort/selection-sort"
          >
            Selection Sort
          </option>
        </select>
      </div>
    </nav>
  )
}
