import Home from './pages'
import { BubbleSort } from './pages/sort/BubbleSort'
import { SelectionSort } from './pages/sort/SelectionSort'
import { QuickSort } from './pages/sort/QuickSort'
import { MergeSort } from './pages/sort/MergeSortGraph'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import AStart from './pages/pathfinding/Astar'
import Dijkstra from './pages/pathfinding/Dijkstra'
import BFS from './pages/pathfinding/BreadthFirstSearch'
import DFS from './pages/pathfinding/DepthFirstSearch'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sort/bubble-sort" element={<BubbleSort />} />
          <Route path="/sort/selection-sort" element={<SelectionSort />} />
          <Route path="/sort/quick-sort" element={<QuickSort />} />
          <Route path="/sort/merge-sort" element={<MergeSort />} />
          <Route path="/pathfinding/a-star" element={<AStart />} />
          <Route path="/pathfinding/dijkstra" element={<Dijkstra />} />
          <Route path="/pathfinding/bfs" element={<BFS />} />
          <Route path="/pathfinding/dfs" element={<DFS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
