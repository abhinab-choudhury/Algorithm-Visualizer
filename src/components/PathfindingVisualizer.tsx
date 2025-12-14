import { PathFindingProvider } from '../context/PathFindingContext'
import { SpeedProvider } from '../context/SpeedContext'
import { TileProvider } from '../context/TileContext'

const PathFindingVisualizer = ({ children }: { children: React.ReactNode }) => {
  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>{children}</SpeedProvider>
      </TileProvider>
    </PathFindingProvider>
  )
}

export default PathFindingVisualizer
