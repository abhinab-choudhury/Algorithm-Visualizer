/**
 * It tries to find the shortest path between two nodes in a graph using Breadth-First Search.
 * which uses a queue data structure to explore all neighboring nodes at the current depth before
 * moving on to the next depth level, and then backtracks to find the shortest path.
 */

import { MAX_COLS, MAX_ROWS } from '../lib/constants'
import type { GridType, TileType } from '../lib/types'
import { isEqual } from '../lib/utils'

function isInQueue(queue: TileType[], tile: TileType) {
  return queue.some((t) => isEqual(t, tile))
}

function getUntraversedNeighbors(grid: GridType, tile: TileType) {
  const { row, col } = tile
  const neighbors = []

  if (row > 0) {
    neighbors.push(grid[row - 1][col])
  }
  if (row < MAX_ROWS - 1) {
    neighbors.push(grid[row + 1][col])
  }
  if (col > 0) {
    neighbors.push(grid[row][col - 1])
  }
  if (col < MAX_COLS - 1) {
    neighbors.push(grid[row][col + 1])
  }

  return neighbors.filter((neighbor) => !neighbor.isTraversed)
}

export const bfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles: TileType[] = []
  const base = grid[startTile.row][startTile.col]
  base.distance = 0
  base.isTraversed = false
  const unTraversed = [base]

  while (unTraversed.length) {
    const tile = unTraversed.shift()!
    if (tile?.isWall) continue
    if (tile?.distance === Infinity) {
      break
    }
    tile.isTraversed = true
    traversedTiles.push(tile)
    if (isEqual(tile, endTile)) {
      break
    }
    const neighbors = getUntraversedNeighbors(grid, tile)
    for (let i = 0; i < neighbors.length; i++) {
      if (!isInQueue(unTraversed, neighbors[i])) {
        const neighbour = neighbors[i]
        neighbour.distance = tile.distance + 1
        neighbour.parent = tile
        unTraversed.push(neighbour)
      }
    }
  }

  const path = []
  let tile = grid[endTile.row][endTile.col]
  while (tile != null) {
    tile.isPath = true
    path.unshift(tile)
    tile = tile.parent!
  }

  return { traversedTiles, path }
}
