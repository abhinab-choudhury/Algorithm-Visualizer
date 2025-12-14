import { twMerge } from 'tailwind-merge'
import {
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from '../../lib/constants'

type TileProps = {
  row: number
  col: number
  isStart: boolean
  isEnd: boolean
  isWall: boolean
  isPath: boolean
  isTraversed: boolean
  size: number
  handleMouseDown: (row: number, col: number) => void
  handleMouseUp: (row: number, col: number) => void
  handleMouseEnter: (row: number, col: number) => void
}

export function Tile({
  row,
  col,
  isStart,
  isEnd,
  isWall,
  isPath,
  isTraversed,
  size,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
}: TileProps) {
  let tileStyle = TILE_STYLE
  if (isStart) tileStyle = START_TILE_STYLE
  else if (isEnd) tileStyle = END_TILE_STYLE
  else if (isWall) tileStyle = WALL_TILE_STYLE
  else if (isPath) tileStyle = PATH_TILE_STYLE
  else if (isTraversed) tileStyle = TRAVERSED_TILE_STYLE

  const borderClasses = [
    row === MAX_ROWS - 1 ? 'border-b' : '',
    col === 0 ? 'border-l' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const combined = twMerge(tileStyle, borderClasses)

  return (
    <div
      id={`tile-${row}-${col}`}
      className={combined}
      style={{
        width: size,
        height: size,
      }}
      role="button"
      aria-label={`tile ${row}-${col}`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseUp={() => handleMouseUp(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
    />
  )
}
