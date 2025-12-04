'use client'

import * as React from 'react'
import { Bar, BarChart, CartesianGrid } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart'
import { Button } from '../ui/button'
import { CirclePause, RotateCcw } from 'lucide-react'
import { Data, isAlreadySorted } from '../../lib/utils'
import { SortingAlgoSelet } from '../SelectAlgo'

export const description = 'An interactive bar chart'

const chartConfig = {
  views: {
    label: 'Heights',
  },
  height: {
    label: 'Heights',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function Graph() {
  const [activeChart] = React.useState<keyof typeof chartConfig>('height')
  const [pausePlayBtnVisible, setPausePlayBtnVisible] = React.useState(false)
  const [play, setPlay] = React.useState(false)
  const [data, setData] = React.useState<{ height: number }[]>([])
  const [comparisons, setComparisons] = React.useState(0)
  const [swaps, setSwap] = React.useState(0)

  const playRef = React.useRef<boolean>(false)

  React.useEffect(() => {
    generateRandom()
  }, [])

  const generateRandom = () => {
    setPlay(false)
    playRef.current = false
    const newData = Array.from({ length: 100 }, () => ({
      height: Math.floor(Math.random() * 500) + 1,
    }))
    setData(newData)
    setComparisons(0)
    setSwap(0)
    setPausePlayBtnVisible(false)
  }

  const TogglePlay = () => {
    playRef.current = !playRef.current
    setPlay(playRef.current)
  }

  const BubbleSort = async (arr: Data[], length: number) => {
    for (let i = 0; i < length && playRef.current; i++) {
      let swapped = false

      for (let j = 0; j < length - i - 1 && playRef.current; j++) {
        setComparisons((prev) => prev + 1)

        if (arr[j].height > arr[j + 1].height) {
          ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          swapped = true
          setSwap((prev) => prev + 1)

          await new Promise((resolve) => setTimeout(resolve, 15))
          setData([...arr])
        }
      }

      if (!swapped) break
    }
  }

  const startBubbleSort = async () => {
    if (isAlreadySorted(data)) {
      generateRandom()
      return
    }

    setPausePlayBtnVisible(true)
    playRef.current = true
    setPlay(true)

    const sortedData = [...data]
    await BubbleSort(sortedData, sortedData.length)

    playRef.current = false
    setPlay(false)
    setPausePlayBtnVisible(false)
  }

  return (
    <>
      <SortingAlgoSelet />
      <Card className="m-2 mx-auto h-full w-full">
        <CardHeader className="my-auto flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Sorting Algorithm - Bubble Sort</CardTitle>
            <CardDescription>
              Visualizing array sorting with a bar chart.
            </CardDescription>
          </div>
          <div className="flex">
            <div className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
              <div className="flex h-[36px] flex-row gap-1">
                <Button
                  variant={'outline'}
                  onClick={TogglePlay}
                  className={`${!pausePlayBtnVisible ? 'hidden' : ''} w-full border-black p-2 text-black active:scale-95 active:transition-all`}
                >
                  {play && <CirclePause />}
                </Button>
                <Button
                  variant={'outline'}
                  onClick={generateRandom}
                  disabled={pausePlayBtnVisible}
                  className="w-full border-black text-black active:scale-95 active:transition-all"
                >
                  <RotateCcw />
                </Button>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-xs">
                  Total Comparisons:{' '}
                  <span className="text-lg font-extrabold">{comparisons}</span>
                </span>
                <span className="text-muted-foreground text-xs">
                  Total Swaps:{' '}
                  <span className="text-lg font-extrabold">{swaps}</span>
                </span>
                <Button
                  disabled={play}
                  variant={'outline'}
                  onClick={() => {
                    playRef.current = true
                    setPlay(true)
                    startBubbleSort()
                  }}
                >
                  Start
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:p-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[350px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={data}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  )
}
