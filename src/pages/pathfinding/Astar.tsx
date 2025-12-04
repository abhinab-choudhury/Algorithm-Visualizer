import Grid50x50 from '../../components/pathfinding/Grid'
import { PathfindingAlgoSelect } from '../../components/SelectAlgo'

export default function AStart() {
  return (
    <div className="my-auto p-4 md:p-6">
      <h1 className="mb-4 text-center text-xl font-extrabold md:text-2xl">
        A-Star Algorithm
      </h1>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row md:items-start">
        <Grid50x50 rows={40} cols={65} cellSize={13} gap={1} />
        <div className="flex flex-col gap-2">
          <PathfindingAlgoSelect />
          <div className="flex h-40 w-full items-center justify-center rounded-md border md:h-80 md:w-80">
            <span className="text-sm text-gray-500">Controls / Info</span>
          </div>
        </div>
      </div>
    </div>
  )
}
