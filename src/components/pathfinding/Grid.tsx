import { useState } from 'react'

export default function Grid50x50({ rows = 50, cols = 50, cellSize = 20, gap = 2 }) {
  const total = rows * cols
  const [activeSet, setActiveSet] = useState(new Set())

  function toggleCell(index: number) {
    setActiveSet((prev) => {
      const next = new Set(prev)
      next.has(index) ? next.delete(index) : next.add(index)
      return next
    })
  }

  const cells = Array.from({ length: total }, (_, i) => i)

  return (
    <div className="mx-auto w-full overflow-x-auto rounded-md border p-2 md:w-fit md:overflow-visible">
      <div
        className="mx-auto grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridAutoRows: `${cellSize}px`,
          gap: `${gap}px`,
        }}
      >
        {cells.map((idx) => {
          const isActive = activeSet.has(idx)
          return (
            <button
              key={idx}
              onClick={() => toggleCell(idx)}
              className={`flex select-none items-center justify-center border border-gray-200 text-[8px] sm:text-[10px] md:text-xs ${isActive ? 'bg-sky-600 text-white' : 'bg-white'} hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-sky-300`}
              style={{ width: cellSize, height: cellSize }}
            />
          )
        })}
      </div>
    </div>
  )
}
