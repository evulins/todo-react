import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class ToDoStore extends EventEmitter {
  constructor() {
    super()
    this.tasks =  []
  }

  createTask = (task) => {
    const id = Date.now()
    this.tasks.push({
      id: id,
      name: task,
      completed: false
    })
    this.emit('change')
  }

  getAll = () => {
    return this.tasks
  }

  deleteTask = (id) => {
    this.tasks = this.tasks.filter(task => task.id !== id)
    this.emit('change')
  }

  handelActions = (action) => {
    switch(action.type) {
      case 'CREATE_TASK': {
        this.createTask(action.task)
        break
      }
      case 'DELETE_TASK': {
        this.deleteTask(action.id)
        break
      }
      default:
    }
  }


}

const todoStore = new ToDoStore()
dispatcher.register(todoStore.handelActions.bind(todoStore))

export default todoStore