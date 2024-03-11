export const saveStorage = (key, element) => {
  let elements = JSON.parse(localStorage.getItem(key))

  if (Array.isArray(elements)) {
    elements.push(element)
  } else {
    elements = [element]
  }
  const Elements = JSON.stringify(elements)
  localStorage.setItem(key, Elements)
  return element
}
