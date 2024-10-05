import React, { useEffect, useState } from 'react'
import { random } from 'utils'
import { fishProps } from 'utils/fishTanks'
import { FishTwoSVG } from './fishTwoSVG'
import { AnimatePresence } from 'framer-motion'

function FormTwoSpawnFish({ fishCount, tankSize }) {
  const [fish, setFish] = useState<{ x: number; y: number }[]>([])

  const maxSize = fishProps.sizeRange[1]
  const cols = Math.floor(tankSize.clientWidth / maxSize)

  console.log((tankSize.clientWidth + 100) / maxSize)

  console.log('width', tankSize.clientWidth, tankSize.clientHeight)
  const rows = Math.floor((tankSize.clientHeight - 100) / maxSize)

  const totalSpace = cols * rows
  console.log(totalSpace, cols, rows)

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
    <>
      <div style={{ position: 'absolute', height: 1, width: 1 }}></div>
      <AnimatePresence>
        {fish.map((item, i) => (
          <FishTwoSVG
            key={i}
            type={1}
            position={{ x: item.x, y: item.y }}
            size={maxSize}
          />
        ))}
      </AnimatePresence>
    </>
  )
}

export default FormTwoSpawnFish
