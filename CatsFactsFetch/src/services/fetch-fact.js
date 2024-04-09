export const getFact = async () => {
  try {
    const response = await fetch('https://catfact.ninja/fact?max_length=200').then((res) => res.json())
    console.log(response)
    return response.fact
  } catch (error) {
    console.error('Error al obtener datos del fact:', error)
    return 'Unknown'
  }
}
export default getFact
