import { MAX_COLS, MAX_ROWS } from '../../lib/constants'
import type { GridType, PathFindingSpeedType, TileType } from '../../lib/types'
import {
  createWall,
  destroyWall,
  getRandInt,
  isEqual,
  sleep,
} from '../../lib/utils'

export const binaryTree = async (
  grid: GridType,
  startTile: TileType,
  endTile: TileType,
  setIsDisabled: (disabled: boolean) => void,
  speed: PathFindingSpeedType
) => {
  createWall(startTile, endTile, speed)
  await sleep(MAX_ROWS * MAX_COLS)

  for (const row of grid) {
    for (const node of row) {
      if (node.row % 2 === 0 || node.col % 2 === 0) {
        if (!isEqual(node, startTile) && !isEqual(node, endTile)) {
          node.isWall = true
        }
      }
    }
  }

  for (let r = 1; r < MAX_ROWS - 1; r += 2) {
    for (let c = 1; c < MAX_COLS - 1; c += 2) {
      if (r === MAX_ROWS - 2 && c === MAX_COLS - 2) {
        continue
      } else if (r === MAX_ROWS - 2) {
        await destroyWall(grid, r, c, 0, speed)
      } else if (c === MAX_COLS - 2) {
        await destroyWall(grid, r, c, 1, speed)
      } else {
        await destroyWall(grid, r, c, getRandInt(0, 1), speed)
      }
    }
  }

  setIsDisabled(false)
}
