import { useNavigate } from "react-router";

export function SortingAlgoSelet() {
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value) navigate(e.target.value);
    };


    return (
        <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1 font-medium">
                Sorting
            </label>
            <select
                onChange={handleChange}
                className="cursor-pointer rounded border border-gray-300 bg-white py-1.5 pl-3 pr-8 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                defaultValue=""
            >
                <option value="" disabled>
                    Select a Sorting Algorithm
                </option>
                <option value="/sort/quick-sort">Quick Sort</option>
                <option value="/sort/merge-sort">Merge Sort</option>
                <option value="/sort/bubble-sort">Bubble Sort</option>
                <option value="/sort/selection-sort">Selection Sort</option>
                <option value="/sort/insertion-sort">Insertion Sort</option>
            </select>
        </div>
    )
}

export function PathfindingAlgoSelect() {
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value) navigate(e.target.value);
    };
    return (
        <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1 font-medium">
                Pathfinding
            </label>
            <select
                onChange={handleChange}
                className="cursor-pointer rounded border border-gray-300 bg-white py-1.5 pl-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                defaultValue=""
            >
                <option value="" disabled>
                    Select a Sorting Algorithm
                </option>
                <option value="/pathfinding/a-star">A* Search</option>
                <option value="/pathfinding/dijkstra">Dijkstra</option>
                <option value="/pathfinding/bfs">Breadth First Search</option>
                <option value="/pathfinding/dfs">Depth First Search</option>
            </select>
        </div>
    )
}