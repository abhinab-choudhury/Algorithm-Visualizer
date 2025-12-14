import Grid from '../../components/pathfinding/Grid'
import PathFindingVisualizer from '../../components/PathfindingVisualizer'
import { PathfindingAlgoSelect } from '../../components/SelectAlgorithm'

export default function Dijkstra() {
  return (
    <PathFindingVisualizer>
      <div className="my-auto p-4 md:p-6">
        <h1 className="mb-4 text-center text-xl font-extrabold md:text-2xl">
          Dijkstra Algorithm
        </h1>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row md:items-start md:gap-2">
          <Grid />
          <div className="flex flex-col gap-2">
            <PathfindingAlgoSelect />
            <div className="flex h-40 w-full items-center justify-center rounded-md border md:h-80 md:w-80">
              <span className="text-sm text-gray-500">Controls / Info</span>
            </div>
          </div>
        </div>
      </div>
    </PathFindingVisualizer>
  )
}
