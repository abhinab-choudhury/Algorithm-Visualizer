import { MouseEventHandler } from 'react'
import { Button } from '../ui/button'
import { PauseCircle, PlayCircle } from 'lucide-react'

export default function PlayButton({
  handleRunVisualizer,
  isDisabled,
  isGraphVisualized,
}: {
  handleRunVisualizer: MouseEventHandler
  isGraphVisualized: boolean
  isDisabled: boolean
}) {
  return (
    <Button
      disabled={isDisabled}
      onClick={handleRunVisualizer}
      variant={'outline'}
    >
      {isGraphVisualized ? <PlayCircle /> : <PauseCircle />}
    </Button>
  )
}
