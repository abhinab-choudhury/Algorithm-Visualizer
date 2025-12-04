import Grid50x50 from "../../components/pathfinding/Grid";
import { PathfindingAlgoSelect } from "../../components/SelectAlgo";

export default function DFS() {
  return (
    <div className="p-4 md:p-6 my-auto">
      <h1 className="mb-4 text-center text-xl font-extrabold md:text-2xl">
        Depth First Search Algorithm
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 md:flex-row md:items-start md:gap-10">
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
