export function serialize (obj) {
  let queryString = ''
  for (const key in obj) {
    queryString += `&${key}=${obj[key]}`
  }
  return queryString
}
