import { createContext, useState } from 'react'
import type { TileType } from '../lib/types'
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from '../lib/constants'

interface TileContextInterface {
  startTile: TileType
  setStartTile: (tile: TileType) => void
  endTile: TileType
  setEndTile: (tile: TileType) => void
}

export const TileContext = createContext<TileContextInterface | undefined>(
  undefined
)

export const TileProvider = ({ children }: { children: React.ReactNode }) => {
  const [startTile, setStartTile] = useState<TileType>(START_TILE_CONFIGURATION)
  const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIGURATION)

  return (
    <TileContext.Provider
      value={{
        startTile,
        setStartTile,
        endTile,
        setEndTile,
      }}
    >
      {children}
    </TileContext.Provider>
  )
}
