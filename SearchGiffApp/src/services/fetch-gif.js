export const fetchGif = async (query) => {
  try {
    const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=J2hFlscntamcmgSVF47S40rNUL4LqnoF&q=' + query + '&limit=20')
    if (!response.ok) {
      throw new Error('Unable to obtain gif')
    }
    const data = await response.json()
    console.log(data.data)
    return data.data
  } catch (error) {
    console.error('Error getting data from Gif API:', error)
    throw new Error(error)
  }
}
