export const ToDoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    case 'delete':
      return state.filter(task => task.id !== action.payload)

    case 'delete-all-completed':
      return state.filter(task => task.completed !== true)

    default:
      return state
  }
}
