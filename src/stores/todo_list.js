import { defineStore } from 'pinia';

export const todoListStore = defineStore('todo_list', {
  state: () => ({
    todo_list: []
  }),
  getters: {
    getTodoList: (state) => state.todo_list,
    todoListLength: (state) => state.todo_list.length
  },
  actions: {
    // name, priority, status, required time, completion time and description
    addItemToTodoList(payload = {}) {
      console.log('Add Item Function Called')

      let tempObject = {
        name: this.todoListLength ? payload.name : 'Sudhakar',
        priority: this.todoListLength ? payload.priority : 'High',
        status: 'Pending',
        required_time: this.todoListLength ? payload.time_required : '2',
        description: this.todoListLength ? payload.description : 'Testing',
        completion_time: '',
        date: this.todoListLength ? payload.date : '05/31/2024',
        id: 0
      };
      let length = this.todo_list.length;
      if (length) {
        tempObject.id = parseInt(this.todo_list[length - 1].id) + 1;
      } else {
        tempObject.id = 1;
      }
      this.todo_list.push(tempObject);
    },
    updateStatus(payload) {
      let index = this.todo_list.findIndex(payload.id)
      if (index > -1) {
        this.todo_list[index].status = payload.status
      }
    },
    updateTodoItem(payload) {
      let index = this.todo_list.findIndex(payload.id);
      if (index > -1) {
        this.todo_list[index] = payload
      }
    },
    deleteTodoItem(id) {
      let index = this.todo_list.findIndex(id)
      if (index > -1) {
        this.todo_list.splice(index, 1);
      }
    }
  }
})