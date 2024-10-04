import React from 'react'
import { FishGrid } from './fishGrid'
import { FormOneCreator } from './formOneCreator'

export const FormOne = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <h1 className="w-fit text-6xl">Form flow One</h1>
      <div className="flex size-full flex-1">
        <div className="w-1/2">
          <FormOneCreator />
        </div>
        <div className="flex flex-1 flex-wrap content-start gap-10 p-10">
          <FishGrid />
          <FishGrid />
          <FishGrid />
          <FishGrid />
          <FishGrid />
          <FishGrid />
          <FishGrid />
          <FishGrid />
          <FishGrid />
          <FishGrid />
        </div>
      </div>
    </div>
  )
}
