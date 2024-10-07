import React, { useEffect, useState } from 'react'
import { random } from 'utils'
import { fishProps } from 'utils/fishTanks'
import { FishTwoSVG } from './fishTwoSVG'
import { AnimatePresence, motion } from 'framer-motion'

function FormTwoSpawnFish({
  fishCount,
  tankSize,
  setFish,
  fish,
  setDragging,
  rmRef
}) {
  const maxSize = fishProps.sizeRange[1]
  const cols = Math.floor(tankSize.clientWidth / maxSize)
  const rows = Math.floor((tankSize.clientHeight - 100) / maxSize)

  const allCells: { x: number; y: number }[] = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      allCells.push({ x: col * maxSize, y: row * maxSize + 100 })
    }
  }

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = random(0, i + 1)
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  useEffect(() => {
    const randomPositions: { x: number; y: number }[] = shuffleArray(allCells)

    setFish(randomPositions.slice(0, fishCount))
  }, [])
  return (
    <AnimatePresence>
      {fish.map((item, i) => (
        <FishTwoSVG
          rmRef={rmRef}
          setDragging={setDragging}
          tankSize={tankSize}
          index={i}
          key={i}
          position={{ x: item.x, y: item.y }}
          size={maxSize}
        />
      ))}
    </AnimatePresence>
  )
}

export default FormTwoSpawnFish
