export const setValue = (varName, value) => {
  let upperVarnName = varName.toUpperCase()
  let type = `SET_${upperVarnName}`
  return {
    type,
    payload: { varName, value }
  }
}

export const setAddTask = (title, color) => {
  const model = ({'title': title, 'checked': false, 'color': color})
  return {
    type: 'ADD',
    payload: model
  }
}

export const setEditTask = (index, title, checked, color) => {
  const model = ({'title': title, 'checked': checked, 'color': color})
  return {
    type: 'EDIT',
    id: index,
    content: model
  }
}