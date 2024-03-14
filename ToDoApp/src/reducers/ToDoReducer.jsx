export const ToDoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    case 'delete':
      return state.filter(task => task.id !== action.payload)

    case 'delete-all-completed':
      return state.filter(task => task.completed !== true)

    case 'change-toggle':
      return state.map(task => task.id === action.payload.id
        ? { ...task, completed: action.payload.checked }
        : task
      )

    default:
      return state
  }
}
