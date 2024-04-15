export const getTextImg = (fact) => {
  const factDivided = fact.split(' ')
  const firstWords = factDivided.slice(0, 4).join(' ')
  console.log(firstWords)
  return firstWords
}
