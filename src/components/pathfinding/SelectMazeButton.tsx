import { useState } from 'react'
import { usePathfinding } from '../../hook/usePathfunding'
import { useTile } from '../../hook/useTile'
import type { MazeType } from '../../lib/types'
import { resetGrid } from '../../lib/utils'
import { useSpeed } from '../../hook/useSpeed'
import { MAZE } from '../../lib/constants'
import { GenerateMazeAlgorithms } from '../../lib/MazeAlgorithm'
import PlayBFSBtn from './PlayBFSBtn'

type Props = {
  isVisualizationRunningRef: React.MutableRefObject<boolean>
}

export default function SelectMazeButton({ isVisualizationRunningRef }: Props) {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const { maze, setMaze, grid, setGrid, setIsGraphVisualized } =
    usePathfinding()
  const { startTile, endTile } = useTile()
  const { speed } = useSpeed()

  const handleMazeGenerate = (maze: MazeType) => {
    if (maze === 'NONE') {
      setMaze(maze)
      resetGrid({ grid, startTile, endTile })
      return
    }

    setMaze(maze)
    setIsDisabled(true)
    GenerateMazeAlgorithms({
      maze,
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
    })
    const newGrid = grid.slice()
    setGrid(newGrid)
    setIsGraphVisualized(false)
  }
  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor="maze-select"
          className="mb-1 text-xs font-medium text-gray-500"
        >
          Maze Selection
        </label>
        <select
          id="maze-select"
          value={maze}
          onChange={(e) => {
            handleMazeGenerate(e.target.value as MazeType)
          }}
          className="cursor-pointer rounded border border-gray-300 bg-white py-1.5 pl-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {MAZE.map((mazeOption) => (
            <option key={mazeOption.value} value={mazeOption.value}>
              {mazeOption.label}
            </option>
          ))}
        </select>
      </div>
      <PlayBFSBtn
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        isVisualizationRunningRef={isVisualizationRunningRef}
      />
    </>
  )
}
