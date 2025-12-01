import Home from './pages'
import { BubbleSort } from './pages/sort/BubbleSort'
import { SelectionSort } from './pages/sort/SelectionSort'
import { QuickSort } from './pages/sort/QuickSort'
import { MergeSort } from './pages/sort/MergeSortGraph'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
