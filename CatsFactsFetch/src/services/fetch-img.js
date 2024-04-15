export const fetchImg = async (text) => {
  try {
    const url = `https://cataas.com/cat/says/${text}?font=Impact&fontSize=30&fontColor=black&fontBackground=none&position=center`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Unable to obtain an image of the cat')
    }
    console.log('response img', response)
    return response.url
  } catch (error) {
    console.error('Error getting data from the image cat:', error)
    return 'Unknown'
  }
}
