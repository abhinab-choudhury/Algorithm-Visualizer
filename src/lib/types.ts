export type PathFindingAlgorithmType = 'DIJKSTRA' | 'A_STAR' | 'BFS' | 'DFS'
export interface PathFindingAlgorithmSelectType {
  name: string
  value: PathFindingAlgorithmType
}
export type MazeType = 'NONE' | 'BINARY_TREE' | 'RECURSIVE_DIVISION'
export interface MazeSelectType {
  label: string
  value: MazeType
}

export type TileType = {
  row: number
  col: number
  isStart: boolean
  isEnd: boolean
  isWall: boolean
  isPath: boolean
  isTraversed: boolean
  distance: number
  parent: TileType | null
}

export type GridType = TileType[][]

export type PathFindingSpeedType = 2 | 1 | 0.5
export interface PathFindingSpeedSelectType {
  label: string
  value: PathFindingSpeedType
}
