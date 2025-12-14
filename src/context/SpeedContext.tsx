import { createContext, useState } from 'react'
import type { PathFindingSpeedType } from '../lib/types'

interface SpeedContextInterface {
  speed: PathFindingSpeedType
  setSpeed: (speed: PathFindingSpeedType) => void
}

export const SpeedContext = createContext<SpeedContextInterface | undefined>(
  undefined
)

export const SpeedProvider = ({ children }: { children: React.ReactNode }) => {
  const [speed, setSpeed] = useState<PathFindingSpeedType>(0.5)

  return (
    <SpeedContext.Provider
      value={{
        speed,
        setSpeed,
      }}
    >
      {children}
    </SpeedContext.Provider>
  )
}
