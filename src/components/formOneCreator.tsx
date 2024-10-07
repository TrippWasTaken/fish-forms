/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react'
import { easeIn, easeInOut, motion } from 'framer-motion'
import { FishSVG } from './fishSVG'

export const FormOneCreator = ({ setFishGrid, fishGrid }) => {
  const [fishSize, setFishSize] = useState(100)
  const [fishShape, setFishShape] = useState(100)
  const [fishRotate, setFishRotate] = useState(false)
  const [fishColor, setFishColor] = useState(0)
  const [fishType, setFishType] = useState(1)

  const colors = [
    '#9e0142',
    '#5e4fa2',
    '#fdae61',
    '#fee08b',
    '#d53e4f',
    '#66c2a5',
    '#f46d43',
    '#e6f598',
    '#abdda4',
    '#3288bd'
  ]
  const getShape = () => {
    if (fishShape === 1) return '0%'
    if (fishShape === 2) return '100%'
    if (fishShape === 3) return '200%'
  }

  const createFish = () => {
    if (fishGrid.length < 10) {
      setFishGrid((prev) => [
        ...prev,
        { fishColor, fishRotate, fishShape, fishSize, fishType }
      ])
    }
  }
  return (
    <div className="h-auto min-h-full w-full select-none p-10">
      <div className="flex size-full flex-col overflow-hidden rounded-3xl bg-white/20 shadow-md">
        <div className="relative flex items-center justify-center p-20">
          <button
            className="absolute left-0 text-6xl"
            onClick={() => setFishType((prev) => (prev - 1 < 1 ? 3 : prev - 1))}
          >
            {'<'}
          </button>
          <button
            className="absolute right-0 text-6xl"
            onClick={() => setFishType((prev) => (prev + 1 > 3 ? 1 : prev + 1))}
          >
            {'>'}
          </button>
          <div className="relative flex aspect-square w-3/5 items-center justify-center">
            <FishSVG
              createFish={createFish}
              size={fishSize}
              rotate={fishRotate ? 45 : 0}
              shape={fishShape}
              color={fishColor}
              type={fishType}
              currCount={fishGrid.length}
            />
          </div>
        </div>

        <div className="relative w-full flex-1 bg-black/5 ">
          <h1 className="absolute w-full select-none text-center text-[30px] font-bold uppercase ">
            Properties
          </h1>

          <div className="relative p-10">
            <div className="h-15 mt-4 flex flex-col items-center justify-center rounded-3xl bg-white p-5 text-3xl  shadow-md">
              <div className="mix-blend-difference">Size</div>
              <input
                type="range"
                min={35}
                max={100}
                onChange={(e) => setFishSize(parseInt(e.target.value))}
                value={fishSize}
                className="[--range-shdw: black] range range-lg"
              />
            </div>

            <div className="relative mt-4 grid h-20 w-full grid-cols-3">
              <motion.div
                className="absolute h-full w-1/3 rounded-3xl bg-white shadow-xl"
                animate={{
                  translateX: getShape()
                }}
                transition={{ ease: easeIn, duration: 0.2 }}
              />
              <button
                className="flex size-full items-center justify-center text-3xl mix-blend-difference"
                onClick={() => setFishShape(1)}
              >
                Square
              </button>
              <button
                className="flex size-full items-center justify-center text-3xl mix-blend-difference"
                onClick={() => setFishShape(2)}
              >
                Round
              </button>
              <button
                className="flex size-full items-center justify-center text-3xl mix-blend-difference"
                onClick={() => setFishShape(3)}
              >
                Circle
              </button>
            </div>

            <div className="relative my-4 h-20 w-full">
              <motion.div
                className="absolute h-20 w-full rounded-3xl bg-white shadow-md"
                initial={{ width: '0%' }}
                animate={{
                  width: fishRotate ? '100%' : '0%'
                }}
                transition={{
                  duration: 0.2,
                  ease: easeInOut
                }}
              />

              <button
                className="flex size-full items-center justify-center text-3xl mix-blend-difference"
                onClick={() => setFishRotate((prev) => !prev)}
              >
                Rotate
              </button>
            </div>

            <div className="flex w-full flex-col items-center justify-center rounded-3xl bg-white">
              <div className="w-fit text-3xl mix-blend-difference">Color</div>
              <div className="flex size-full w-full flex-wrap justify-center gap-4 p-4">
                {colors.map((color, i) => (
                  <motion.button
                    animate={{
                      scale: fishColor === i ? 1.2 : 1
                    }}
                    transition={{
                      ease: easeInOut,
                      duration: 0.2
                    }}
                    key={i}
                    onClick={() => setFishColor(i)}
                    className="aspect-square h-20 rounded-3xl shadow-lg"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
