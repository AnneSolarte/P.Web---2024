export const fetchFact = async () => {
  try {
    const response = await fetch('https://catfact.ninja/fact?max_length=200')
    if (!response.ok) {
      throw new Error('Unable to obtain the cat fact')
    }
    const data = await response.json()
    return data.fact
  } catch (error) {
    console.error('Error getting data from the fact:', error)
    return 'Unknown'
  }
}
