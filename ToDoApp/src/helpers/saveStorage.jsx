export const saveStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
