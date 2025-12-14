import { bfs } from '../../algorithms/bfs'
import { useTile } from '../../hook/useTile'
import { animatePath } from '../../lib/utils'
import { Button } from '../ui/button'
import { usePathfinding } from '../../hook/usePathfunding'
import { useSpeed } from '../../hook/useSpeed'
import { EXTENDED_SLEEP_TIME, SLEEP_TIME, SPEEDS } from '../../lib/constants'

type Props = {
  isDisabled: boolean
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
  isVisualizationRunningRef: React.MutableRefObject<boolean>
}

export default function PlayBFSBtn({
  isDisabled,
  setIsDisabled,
  isVisualizationRunningRef,
}: Props) {
  const { startTile, endTile } = useTile()
  const { speed } = useSpeed()
  const { grid, setGrid, setIsGraphVisualized } = usePathfinding()

  const handleSubmit = () => {
    if (!startTile || !endTile) return
    if (isVisualizationRunningRef.current) return

    const { path, traversedTiles } = bfs(grid, startTile, endTile)

    const speedMultiplier = SPEEDS.find((s) => s.value === speed)?.value ?? 1

    animatePath(traversedTiles, path, startTile, endTile, speed)

    setIsDisabled(true)
    isVisualizationRunningRef.current = true

    const traversalTime = traversedTiles.length * SLEEP_TIME * speedMultiplier

    const pathTime = (path.length + 60) * EXTENDED_SLEEP_TIME * speedMultiplier

    setTimeout(() => {
      setGrid([...grid])
      setIsGraphVisualized(true)
      setIsDisabled(false)
      isVisualizationRunningRef.current = false
    }, traversalTime + pathTime)
  }

  return (
    <Button
      onClick={handleSubmit}
      disabled={isDisabled}
      variant="default"
      className="bg-black text-white"
    >
      Play
    </Button>
  )
}
