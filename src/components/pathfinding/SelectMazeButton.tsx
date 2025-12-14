import { useState } from 'react'
import { usePathfinding } from '../../hook/usePathfunding'
import { useTile } from '../../hook/useTile'
import type { MazeType } from '../../lib/types'
import { resetGrid } from '../../lib/utils'
import { useSpeed } from '../../hook/useSpeed'
import { MAZE } from '../../lib/constants'
import { GenerateMazeAlgorithms } from '../../lib/MazeAlgorithm'

export default function SelectMazeButton() {
  const [_isDisabled, setIsDisabled] = useState<boolean>(false)
  const {
    maze,
    setMaze,
    grid,
    setGrid,
    isGraphVisualized,
    setIsGraphVisualized,
    algorithm,
    setAlgorithm,
  } = usePathfinding()
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
    <select
      value={maze}
      onChange={(e) => {
        handleMazeGenerate(e.target.value as MazeType)
      }}
    >
      {MAZE.map((mazeOption) => (
        <option key={mazeOption.value} value={mazeOption.value}>
          {mazeOption.label}
        </option>
      ))}
    </select>
  )
}
