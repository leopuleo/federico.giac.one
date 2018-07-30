// Flatten an array
export const flatten = arr => {
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
}

// Return unique values from an array
export const unique = arr => {
  return arr.filter((value, index, self) => self.indexOf(value) === index)
}

// Trim a string without trimming words
export const createExcerpt = (string, maxLenght) => {
  // Trim the string to the maximum length
  const trimmedString = string.substr(0, maxLenght)

  // re-trim if we are in the middle of a word
  return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
}
