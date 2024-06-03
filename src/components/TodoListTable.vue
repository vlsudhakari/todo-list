<script setup>
import { onMounted } from 'vue'
import { todoListStore } from '@/stores/todo_list'
const todoStore = todoListStore()
onMounted(() => {
  console.log('Component is mounted')
  // Set the message after the component is mounted
  if (!todoStore.todoListLength) {
    todoStore.addItemToTodoList()
  }
})
const deleteTodoItem = (item) => {
  todoStore.deleteTodoItem(item.id)
}
</script>
<template>
  <div>
    <!-- {{ todoStore.getTodoList }} -->
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Priority</th>
          <th class="text-left">Status</th>
          <th class="text-left">Description</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in todoStore.getTodoList" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.priority }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.description }}</td>
          <td>
            <v-btn
              v-if="todoStore.todoListLength > 1"
              class="danger-button"
              variant="outlined"
              @click.prevent="deleteTodoItem(item)"
              >Delete</v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
