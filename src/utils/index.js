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

// Simple function to get a cookie
export const getCookie = (cname) => {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
