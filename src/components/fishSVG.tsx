import { AnimatePresence, motion } from 'framer-motion'

export const FishSVG = ({
  name = 'fam',
  size = 100,
  color = 1,
  shape = 1,
  rotate = 0,
  type = 1
}) => {
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
    if (shape === 1) return '0'
    if (shape === 2) return '25%'
    if (shape === 3) return '100%'
  }
  const fishType = () => {
    if (type === 1) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-20 0 600 512"
          style={{
            width: '100%',
            stroke: 'black',
            strokeWidth: '10px',
            fill: 'white'
          }}
        >
          <path d="M180.5 141.5C219.7 108.5 272.6 80 336 80s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8c4.7 9.2 4.7 20.1 0 29.3c-14.1 27.4-41.9 66.8-81 99.8C452.3 403.5 399.4 432 336 432s-116.3-28.5-155.5-61.5c-16.2-13.7-30.5-28.5-42.7-43.1L48.1 379.6c-12.5 7.3-28.4 5.3-38.7-4.9S-3 348.7 4.2 336.1L50 256 4.2 175.9c-7.2-12.6-5-28.4 5.3-38.6s26.1-12.2 38.7-4.9l89.7 52.3c12.2-14.6 26.5-29.4 42.7-43.1zM448 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
      )
    }
    if (type === 2) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '100%',
            stroke: 'black',
            strokeWidth: '10px',
            fill: 'white'
          }}
          viewBox="-10 0 600 512"
        >
          <path d="M275.2 38.4c-10.6-8-25-8.5-36.3-1.5S222 57.3 224.6 70.3l9.7 48.6c-19.4 9-36.9 19.9-52.4 31.5c-15.3 11.5-29 23.9-40.7 36.3L48.1 132.4c-12.5-7.3-28.4-5.3-38.6 4.9S-3 163.3 4.2 175.9L50 256 4.2 336.1c-7.2 12.6-5 28.4 5.3 38.6s26.1 12.2 38.6 4.9l93.1-54.3c11.8 12.3 25.4 24.8 40.7 36.3c15.5 11.6 33 22.5 52.4 31.5l-9.7 48.6c-2.6 13 3.1 26.3 14.3 33.3s25.6 6.5 36.3-1.5l77.6-58.2c54.9-4 101.5-27 137.2-53.8c39.2-29.4 67.2-64.7 81.6-89.5c5.8-9.9 5.8-22.2 0-32.1c-14.4-24.8-42.5-60.1-81.6-89.5c-35.8-26.8-82.3-49.8-137.2-53.8L275.2 38.4zM384 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
        </svg>
      )
    }

    if (type === 3) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-20 0 550 512"
          style={{
            width: '100%',
            stroke: 'black',
            strokeWidth: '10px',
            fill: 'white'
          }}
        >
          <path d="M64 32C28.7 32 0 60.7 0 96s28.7 64 64 64l1 0c3.7 88.9 77 160 167 160l56 0 0-192-24 0L88.8 128 64 128c-17.7 0-32-14.3-32-32s14.3-32 32-32l400 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32zM224 456c0 13.3 10.7 24 24 24l72 0 0-72.2-64.1-22.4c-12.5-4.4-26.2 2.2-30.6 14.7s2.2 26.2 14.7 30.6l4.5 1.6C233 433.9 224 443.9 224 456zm128 23.3c36.4-3.3 69.5-17.6 96.1-39.6l-86.5-34.6c-3 1.8-6.2 3.2-9.6 4.3l0 69.9zM472.6 415c24.6-30.3 39.4-68.9 39.4-111c0-12.3-1.3-24.3-3.7-35.9L382.8 355.1c.8 3.4 1.2 7 1.2 10.6c0 4.6-.7 9-1.9 13.1L472.6 415zM336 128l-16 0 0 192 18.3 0c9.9 0 19.1 3.2 26.6 8.5l133.5-92.4C471.8 172.6 409.1 128 336 128zM168 192a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
        </svg>
      )
    }
  }
  return (
    <motion.div
      animate={{ width: `${size}%`, height: `${size}%` }}
      className="relative left-1/2 top-1/2 aspect-square w-11/12 -translate-x-1/2 -translate-y-1/2"
      style={{ width: `${size}%`, height: `${size}%` }}
    >
      <motion.div
        className="size-full shadow-lg"
        animate={{
          borderRadius: getShape(),
          rotate,
          backgroundColor: colors[color]
        }}
      ></motion.div>
      <motion.div className="absolute bottom-1/2 left-1/2 aspect-square w-11/12 -translate-x-1/2 translate-y-1/2">
        <AnimatePresence>{fishType()}</AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
