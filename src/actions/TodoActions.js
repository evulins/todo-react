import dispatcher from '../dispatcher'

export function createTask(task) {
  dispatcher.dispatch({
    type: "CREATE_TASK",
    task
  })
}


export function deleteTask(id) {
  dispatcher.dispatch({
    type: "DELETE_TASK",
    id
  })
}