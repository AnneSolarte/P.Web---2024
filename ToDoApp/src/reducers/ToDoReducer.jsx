export const gameReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    case 'delete':
      return state.filter(game => game.id !== action.payload)

    case 'edit':
      const index = state.findIndex(game => game.id === action.payload.id)
      state[index] = action.payload

      return [...state]

    default:
      return state
  }
}
