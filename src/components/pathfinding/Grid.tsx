import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { MAX_COLS, MAX_ROWS } from '../../lib/constants'
import { Tile } from './Tile'
import { TileType } from '../../lib/types'
import { usePathfinding } from '../../hook/usePathfunding'
import { checkIsStartOrEnd, createNewGrid } from '../../lib/utils'

export default function Grid({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: React.MutableRefObject<boolean>
}) {
  const { grid, setGrid } = usePathfinding()
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)

  const handleMouseDown = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) return

    setIsMouseDown(true)
    const newGrid = createNewGrid(grid, row, col)
    setGrid(newGrid)
  }

  const handleMouseUp = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) return

    setIsMouseDown(false)
  }

  const handleMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) return

    if (isMouseDown) {
      const newGrid = createNewGrid(grid, row, col)
      setGrid(newGrid)
    }
  }

  const getTileSize = (width: number) =>
    width < 400 ? 8 : width < 640 ? 10 : width < 1024 ? 10 : 12

  const [tileSize, setTileSize] = useState<number>(() =>
    getTileSize(window.innerWidth)
  )

  useEffect(() => {
    function onResize() {
      setTileSize(getTileSize(window.innerWidth))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center overflow-auto'
      )}
      style={{
        width: MAX_COLS * tileSize,
        height: MAX_ROWS * tileSize,
      }}
    >
      {grid.map((row: TileType[], rowIdx: number) => (
        <div key={`row-${rowIdx}`} className="flex">
          {row.map((tile: TileType, tileIdx: number) => {
            const {
              row: tRow,
              col: tCol,
              isStart,
              isEnd,
              isWall,
              isPath,
              isTraversed,
            } = tile
            return (
              <Tile
                key={`tile-${rowIdx}-${tileIdx}`}
                row={tRow}
                col={tCol}
                isStart={isStart}
                isEnd={isEnd}
                isWall={isWall}
                isPath={isPath}
                isTraversed={isTraversed}
                size={tileSize}
                handleMouseDown={() => handleMouseDown(tRow, tCol)}
                handleMouseUp={() => handleMouseUp(tRow, tCol)}
                handleMouseEnter={() => handleMouseEnter(tRow, tCol)}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
