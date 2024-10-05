import React, { useState } from 'react'
import { FishGrid } from './fishGrid'
import { FormOneCreator } from './formOneCreator'
import { AnimatePresence } from 'framer-motion'

export const FormOne = () => {
  const defaultArr = new Array(10).fill(null)
  const [fishGrid, setFishGrid] = useState([])
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <h1 className="w-fit text-6xl">Form flow One</h1>
      <div className="flex size-full flex-1">
        <div className="w-1/2">
          <FormOneCreator setFishGrid={setFishGrid} fishGrid={fishGrid} />
        </div>
        <div className="flex flex-1 flex-wrap content-start gap-10 p-10">
          <AnimatePresence>
            {defaultArr.map((_, index) => (
              <FishGrid key={index} fish={fishGrid[index]} />
            ))}
          </AnimatePresence>
          <div className="place-self-center text-6xl">
            Fish Count: {fishGrid.length} {fishGrid.length === 10 && '(max)'}
          </div>
        </div>
      </div>
    </div>
  )
}
