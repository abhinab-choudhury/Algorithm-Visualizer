import { type ClassValue, clsx } from 'clsx'
import type { GridType, PathFindingSpeedType, TileType } from './types'
import { twMerge } from 'tailwind-merge'
import {
  MAX_ROWS,
  MAX_COLS,
  START_TILE_CONFIGURATION,
  END_TILE_CONFIGURATION,
  TILE_STYLE,
  SPEEDS,
  WALL_TILE_STYLE,
  SLEEP_TIME,
  TRAVERSED_TILE_STYLE,
  PATH_TILE_STYLE,
  EXTENDED_SLEEP_TIME,
} from './constants'

export interface Data {
  height: number
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isAlreadySorted(data: Data[]) {
  return data.every((val, i, arr) => i === 0 || arr[i - 1].height <= val.height)
}

export const isEqual = (tileA: TileType, tileB: TileType) => {
  return tileA.row === tileB.row && tileA.col === tileB.col
}

export const isRowColEqual = (row: number, col: number, tile: TileType) => {
  return row === tile.row && col === tile.col
}

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const getRandInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const createRow = (
  row: number,
  startTile: TileType,
  endTile: TileType
) => {
  const currentRow: TileType[] = []
  for (let col = 0; col < MAX_COLS; col++) {
    currentRow.push({
      row,
      col,
      isStart: row === startTile.row && col === startTile.col,
      isEnd: row === endTile.row && col === endTile.col,
      isWall: false,
      isPath: false,
      isTraversed: false,
      distance: Infinity,
      parent: null,
    })
  }

  return currentRow
}

export const CreateGrid = (startTile: TileType, endTile: TileType) => {
  const grid: GridType = []

  for (let row = 0; row < MAX_ROWS; row++) {
    grid.push(createRow(row, startTile, endTile))
  }

  return grid
}

export const checkIsStartOrEnd = (row: number, col: number) => {
  return (
    (row === 1 && col === 1) || (row === MAX_ROWS - 2 && col === MAX_COLS - 2)
  )
}

export const createNewGrid = (grid: GridType, row: number, col: number) => {
  const newGrid = grid.slice()
  const newTile = {
    ...newGrid[row][col],
    isWall: !newGrid[row][col].isWall,
  }

  newGrid[row][col] = newTile
  return newGrid
}

export const resetGrid = ({
  grid,
  startTile = START_TILE_CONFIGURATION,
  endTile = END_TILE_CONFIGURATION,
}: {
  grid: GridType
  startTile?: TileType
  endTile?: TileType
}) => {
  for (let row = 0; row < MAX_ROWS; row++) {
    for (let col = 0; col < MAX_COLS; col++) {
      const tile = grid[row][col]
      tile.distance = Infinity
      tile.parent = null
      tile.isPath = false
      tile.isTraversed = false
      tile.isWall = false

      if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
        const tileElement = document.getElementById(`tile-${row}-${col}`)
        if (tileElement) {
          tileElement.className = TILE_STYLE
        }

        if (tile.row === MAX_ROWS - 1) {
          tileElement?.classList.add('border-b')
        }

        if (tile.col === 0) {
          tileElement?.classList.add('border-l')
        }
      }
    }
  }
}

export const createWall = (
  startTile: TileType,
  endTile: TileType,
  speed: PathFindingSpeedType
) => {
  const delay = 6 * SPEEDS.find((s) => s.value === speed)!.value - 1

  for (let row = 0; row < MAX_ROWS; row++) {
    setTimeout(
      () => {
        for (let col = 0; col < MAX_COLS; col++) {
          if (row % 2 === 0 || col % 2 === 0) {
            if (
              !isRowColEqual(row, col, startTile) &&
              !isRowColEqual(row, col, endTile)
            ) {
              setTimeout(() => {
                document.getElementById(`tile-${row}-${col}`)!.className =
                  `${WALL_TILE_STYLE} animate-wall`
              }, delay * col)
            }
          }
        }
      },
      delay * (MAX_ROWS / 2) * row
    )
  }
}

export const destroyWall = async (
  grid: GridType,
  row: number,
  col: number,
  isRight: number,
  speed: PathFindingSpeedType
) => {
  const delay = 20 * SPEEDS.find((s) => s.value === speed)!.value - 5

  if (!isRight && col + 1 < MAX_COLS - 1) {
    grid[row][col + 1].isWall = false
    document.getElementById(`tile-${row}-${col + 1}`)!.className = TILE_STYLE
    await sleep(delay)
  } else if (isRight && row + 1 < MAX_ROWS - 1) {
    grid[row + 1][col].isWall = false
    document.getElementById(`tile-${row + 1}-${col}`)!.className = TILE_STYLE
    await sleep(delay)
  }
}

export const animatePath = (
  traversedTiles: TileType[],
  path: TileType[],
  startTile: TileType,
  endTile: TileType,
  speed: PathFindingSpeedType
) => {
  for (let i = 0; i < traversedTiles.length; i++) {
    setTimeout(
      () => {
        const tile = traversedTiles[i]
        if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
          document.getElementById(`tile-${tile.row}-${tile.col}`)!.className =
            `${TRAVERSED_TILE_STYLE} animate-traversed`
        }
      },
      SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value
    )
  }

  setTimeout(
    () => {
      for (let i = 0; i < path.length; i++) {
        setTimeout(
          () => {
            const tile = path[i]
            if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
              document.getElementById(
                `tile-${tile.row}-${tile.col}`
              )!.className = `${PATH_TILE_STYLE} animate-path`
            }
          },
          EXTENDED_SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value
        )
      }
    },
    SLEEP_TIME *
      traversedTiles.length *
      SPEEDS.find((s) => s.value === speed)!.value
  )
}
