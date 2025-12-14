import { useRef } from 'react'
import Grid from '../../components/pathfinding/Grid'
import PathFindingVisualizer from '../../components/PathfindingVisualizer'
import { PathfindingAlgoSelect } from '../../components/SelectAlgorithm'
import SelectMazeButton from '../../components/pathfinding/SelectMazeButton'

export default function AStart() {
  const isVisualizationRunningRef = useRef(false)

  return (
    <PathFindingVisualizer>
      <div className="p-4 md:p-6">
        <h1 className="mb-4 text-center text-xl font-extrabold md:text-2xl">
          A-Star Algorithm
        </h1>

        <div className="mx-auto flex max-w-full flex-col items-center justify-center gap-4 overflow-hidden md:flex-row md:items-start md:gap-6">
          <div className="flex w-full justify-center overflow-auto px-2 md:w-auto">
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>

          <div className="flex w-full flex-col gap-4 px-2 md:w-auto">
            <PathfindingAlgoSelect />

            <div className="flex h-40 w-full items-center justify-center rounded-md border md:h-80 md:w-80">
              <SelectMazeButton />
            </div>
          </div>
        </div>
      </div>
    </PathFindingVisualizer>
  )
}
