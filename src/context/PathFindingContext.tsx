import { createContext, useState, type ReactNode } from 'react'
import type { GridType, MazeType, PathFindingAlgorithm } from '../lib/types'
import { CreateGrid } from '../lib/utils'
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from '../lib/constants'

interface PathFundingContextInteface {
  algorithm: PathFindingAlgorithm
  setAlgorithm: (algorithm: PathFindingAlgorithm) => void
  maze: MazeType
  setMaze: (maze: MazeType) => void
  grid: GridType
  setGrid: (grid: GridType) => void
  isGraphVisualized: boolean
  setIsGraphVisualized: (isGraphVisualized: boolean) => void
}

export const PathFindingContext = createContext<
  PathFundingContextInteface | undefined
>(undefined)

export const PathFindingProvider = ({ children }: { children: ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<PathFindingAlgorithm>('A_STAR')
  const [maze, setMaze] = useState<MazeType>('NONE')
  const [grid, setGrid] = useState<GridType>(
    CreateGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  )
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false)

  return (
    <PathFindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </PathFindingContext.Provider>
  )
}
