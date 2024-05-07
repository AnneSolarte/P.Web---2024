export const fetchGif = async (query) => {
  try {
    const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=nfeMa93shRMGqC0CTpCxS7v1gUhkrXsy&q=' + query)
    if (!response.ok) {
      throw new Error('Unable to obtain the cat fact')
    }
    const data = await response.json()
    console.log(data.data)
    return data.data
  } catch (error) {
    console.error('Error getting data from the fact:', error)
    return 'Unknown'
  }
}
