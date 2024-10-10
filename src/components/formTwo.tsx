import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FishSVG } from './fishSVG'

export const FormTwo = () => {
  const [selectedFish, setSelectedFish] = useState<number | null>(null)
  const [fishInAquarium, setFishInAquarium] = useState<
    { type: number; x: number; y: number; id: number }[]
  >([])

  const [showEdit, setShowEdit] = useState(false)

  const [startDrag, setstartDrag] = useState(false)

  const fishTypes = [1, 2, 3]
  const handleFishClick = (type: number) => {
    setSelectedFish(type)
  }

  const ref = useRef<HTMLDivElement>(null)

  const rmRef = useRef<HTMLDivElement>(null)

  const handleEndDrag = (e: MouseEvent) => {
    if (ref.current) {
      const aquariumRect = ref.current.getBoundingClientRect()
      const mouseX = e.clientX
      const mouseY = e.clientY

      if (
        mouseX >= aquariumRect.left + 100 &&
        mouseX <= aquariumRect.right - 100 &&
        mouseY >= aquariumRect.top + 100 &&
        mouseY <= aquariumRect.bottom - 100
      ) {
        const relativeX = mouseX - aquariumRect.left
        const relativeY = mouseY - aquariumRect.top

        handleDrop(relativeX, relativeY)
      }
    }
  }

  const hanldleRemove = (e: MouseEvent, index: number) => {
    if (rmRef.current) {
      const deleteDiv = rmRef.current.getBoundingClientRect()
      const mouseX = e.clientX
      const mouseY = e.clientY

      if (
        mouseX >= deleteDiv.left &&
        mouseX <= deleteDiv.right &&
        mouseY >= deleteDiv.top &&
        mouseY <= deleteDiv.bottom
      ) {
        setFishInAquarium((prev) => {
          const newArr = prev.filter((_, i) => index !== i)
          return newArr
        })
      }
      setstartDrag(false)
    }
  }
  const handleDrop = (x: number, y: number) => {
    if (selectedFish && fishInAquarium.length < 10) {
      const newFish = {
        type: selectedFish,
        x,
        y,
        id: Date.now() + Math.random()
      }
      setFishInAquarium([...fishInAquarium, newFish])
      setSelectedFish(null)
    }
  }

  useEffect(() => {
    console.log(fishInAquarium)
  }, [fishInAquarium])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="relative flex size-full items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute bottom-0 left-0 z-50 flex h-screen w-1/5 bg-zinc-600"
        initial={{ translateX: '-90%' }}
        animate={{ translateX: !showEdit ? '-90%' : '-10%' }}
      >
        <div className="relative flex size-full flex-col items-center justify-evenly">
          <h1 className="justify-self-start text-4xl">Add fish</h1>
          <button
            className="absolute right-0 h-full text-4xl"
            onClick={() => setShowEdit(!showEdit)}
          >
            {!showEdit ? '>' : '<'}
          </button>
          {fishTypes.map((type) => (
            <motion.button
              className="block aspect-square w-64"
              key={type}
              drag
              dragSnapToOrigin
              dragMomentum={false}
              onDragEnd={(e: MouseEvent) => {
                handleEndDrag(e)
              }}
              onDragStart={() => handleFishClick(type)}
            >
              <FishSVG type={type} bgDisable />
            </motion.button>
          ))}
        </div>
      </motion.div>
      <motion.div className="glass relative size-[90%] overflow-hidden rounded-b-3xl shadow-2xl">
        <div className="absolute left-0 top-0 z-50 size-full" ref={ref}>
          <h1 className="pointer-events-none absolute left-1/2 top-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 text-6xl font-bold mix-blend-exclusion">
            fish count: {fishInAquarium.length}
            {fishInAquarium.length === 10 && ' max'}
          </h1>
          <AnimatePresence mode="wait">
            {startDrag && (
              <motion.div
                initial={{
                  translateY: -100
                }}
                ref={rmRef}
                animate={{ translateY: 0 }}
                exit={{ translateY: -100 }}
                className="absolute flex size-1/12 w-full items-center justify-center rounded-3xl bg-error/40 shadow-xl "
              >
                <div className="text-4xl">Remove fish</div>
              </motion.div>
            )}
          </AnimatePresence>
          {fishInAquarium.map((fish, index) => (
            <motion.div
              initial={false}
              drag
              dragConstraints={ref}
              onDragStart={() => {
                setstartDrag(true)
              }}
              onDragEnd={(e: MouseEvent) => hanldleRemove(e, index)}
              key={fish.id}
              className="absolute aspect-square w-64"
              style={{ top: fish.y, left: fish.x }}
            >
              <FishSVG type={fish.type} bgDisable />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{
            translateY: '100%'
          }}
          animate={{
            scale: 1.1,
            translateY: 0
          }}
          transition={{
            scale: {
              ease: 'linear',
              duration: 5,
              repeat: Infinity,
              repeatType: 'mirror'
            },
            translateY: {
              duration: 2,
              ease: 'easeInOut'
            }
          }}
          className="absolute bottom-0 left-0 h-[90%] w-full bg-blue-500"
        />
        <div className="glass absolute z-10 size-full overflow-hidden rounded-b-3xl bg-white/5" />
      </motion.div>
    </motion.div>
  )
}
