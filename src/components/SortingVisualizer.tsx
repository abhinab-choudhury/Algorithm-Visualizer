import { Graph as BubbleSortGraph } from './sort/BubbleSortGraph'
import { Graph as QuickSortGraph } from './sort/QuickSortGraph'
import { Graph as MergeSortGraph } from './sort/MergeSortGraph'
import { Graph as SelectionSortGraph } from './sort/SelectionSortGraph'

interface VisualizerProps {
  algorithm: 'bubblesort' | 'quicksort' | 'mergesort' | 'selectionsort'
}

const algorithmComponents = {
  bubblesort: BubbleSortGraph,
  quicksort: QuickSortGraph,
  mergesort: MergeSortGraph,
  selectionsort: SelectionSortGraph,
}

const SortingVisualizer = ({ algorithm }: VisualizerProps) => {
  const AlgorithmComponent = algorithmComponents[algorithm] || null
  return (
    <div className="m-20 mx-auto w-[90%]">
      {AlgorithmComponent ? (
        <AlgorithmComponent />
      ) : (
        <p> Select an algorithm </p>
      )}
    </div>
  )
}

export default SortingVisualizer
