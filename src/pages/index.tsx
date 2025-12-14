import { ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <section className="bg-conic-120 relative m-auto my-3 flex min-h-[80vh] max-w-7xl items-center overflow-hidden from-[#d6d6d648] to-[#7a7a7a6e]">
        <div className="absolute -z-10 h-full w-full">
          <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-[#5046e615] blur-3xl"></div>
          <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-[#FF6B6B10] blur-3xl"></div>
          <div className="absolute left-1/2 top-1/2 h-72 w-72 rounded-full bg-[#4ECDC410] blur-3xl"></div>
        </div>

        <div className="container mx-auto flex flex-col items-center gap-8 px-6 py-12 text-center md:flex-row md:py-24">
          <div className="flex-1">
            <h2 className="text-lg font-medium uppercase tracking-widest text-[#000000]">
              Algorithm Visualizer
            </h2>

            <h1 className="mt-4 text-5xl leading-tight tracking-tight text-[#292F36]">
              Visualize <span className="font-extrabold">Sorting</span>,{' '}
              <span className="font-extrabold">Pathfinding</span> & Core
              Algorithms
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Interactive, step-by-step visualizers to learn how algorithms
              behave. Tweak inputs, watch animations, and understand performance
              trade-offs.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => {
                  navigate('/sort/quick-sort')
                }}
                className="gap-2 bg-[#1010181e] transition-all duration-300 hover:bg-[#101018]/40 hover:text-black hover:shadow-lg"
              >
                Open Sorting Visualizer <ArrowRight />
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  navigate('/pathfinding/bfs')
                }}
                className="border-2 border-[#101018] text-[#101018] hover:bg-[#10101811]"
              >
                Explore Pathfinding
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
