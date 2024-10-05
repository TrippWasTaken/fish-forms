export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const random = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min) + min)
}
