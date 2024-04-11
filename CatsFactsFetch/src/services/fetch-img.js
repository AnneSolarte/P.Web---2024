export const getImgCat = async (text) => {
  try {
    const url = `https://cataas.com/cat/says/${text}?font=Impact&fontSize=30&fontColor=black&fontBackground=none&position=center`
    const response = await fetch(url).then((res) => res)
    console.log(response.url)
    return response.url
  } catch (error) {
    console.error('Error al obtener datos del image cat:', error)
    return 'Unknown'
  }
}
export default getImgCat
