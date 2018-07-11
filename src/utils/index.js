// Flatten an array
export const flatten = arr => {
  return arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b),
    []
  )
}

// Return unique values from an array
export const unique = arr => {
  return arr.filter((value, index, self) => self.indexOf(value) === index)
}
