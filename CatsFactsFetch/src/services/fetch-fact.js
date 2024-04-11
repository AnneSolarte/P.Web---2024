export const getFact = async () => {
  try {
    const response = await fetch('https://catfact.ninja/fact?max_length=200')
    const data = await response.json()
    console.log(data)
    return data.fact
  } catch (error) {
    console.error('Error al obtener datos del fact:', error)
    return 'Unknown'
  }
}

export const fetchFact = async () => {
  try {
    const response = await getFact()
    return response
  } catch (error) {
    throw new Error('Error al obtener datos del fact:', error)
  }
}
