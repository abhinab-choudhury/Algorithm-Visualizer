import type {
  MazeSelectType,
  PathFindingAlgorithmSelectType,
  PathFindingSpeedSelectType,
} from './types'

export const MAX_ROWS = 43
export const MAX_COLS = 79

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isEnd: false,
  isWall: false,
  isPath: false,
  isStart: false,
  isTraversed: false,
  distance: 0,
  parent: null,
}

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isEnd: false,
  isWall: false,
  isPath: false,
  isStart: false,
  isTraversed: false,
  distance: 0,
  parent: null,
}
export const TILE_STYLE = 'border border-gray-300 w-[12px] h-[12px] '
export const TRAVERSED_TILE_STYLE = 'border w-[12px] h-[12px] bg-cyan-400'
export const START_TILE_STYLE = 'border w-[12px] h-[12px] bg-green-400'
export const END_TILE_STYLE = 'border w-[12px] h-[12px] bg-red-400'
export const WALL_TILE_STYLE = 'border w-[12px] h-[12px] bg-black'
export const PATH_TILE_STYLE = 'border w-[12px] h-[12px] bg-green-500'

export const MAZE: MazeSelectType[] = [
  { label: 'None', value: 'NONE' },
  { label: 'Binary Tree', value: 'BINARY_TREE' },
]

export const PATHFINDING_ALGORITHMS: PathFindingAlgorithmSelectType[] = [
  { name: 'Dijkstra', value: 'DIJKSTRA' },
  { name: 'A-Star', value: 'A_STAR' },
  { name: 'Breath First Search', value: 'BFS' },
  { name: 'Depth First Search', value: 'DFS' },
]

export const SPEEDS: PathFindingSpeedSelectType[] = [
  { label: 'Slow', value: 0.5 },
  { label: 'Medium', value: 1 },
  { label: 'Fast', value: 2 },
]

export const SLEEP_TIME = 8
export const EXTENDED_SLEEP_TIME = 30;
