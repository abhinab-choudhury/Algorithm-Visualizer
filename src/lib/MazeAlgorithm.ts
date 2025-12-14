import { binaryTree } from '../algorithms/maze/binaryTree'
import type {
  GridType,
  MazeType,
  PathFindingSpeedType,
  TileType,
} from './types'
import { resetGrid } from './utils'

export const GenerateMazeAlgorithms = async ({
  maze,
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
}: {
  maze: MazeType
  grid: GridType
  startTile: TileType
  endTile: TileType
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
  speed: PathFindingSpeedType
}) => {
  if (maze === 'BINARY_TREE') {
    resetGrid({ grid, startTile, endTile })
    await binaryTree(grid, startTile, endTile, setIsDisabled, speed)
  }
}
