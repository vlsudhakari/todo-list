<!-- src/views/Home.vue -->
<script setup>
import TodoListTable from '@/components/TodoListTable.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const gotoAddTodoItem = () => {
  router.push({ name: 'add-todo-item' })
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="title">Todo List</v-card-title>
          <v-card-text class="description">
            <div>
              This is a Todo List for today, You Can Add and Edit your items todo for the day.
            </div>
            <v-btn variant="outlined" @click="gotoAddTodoItem"> Add Item </v-btn>
          </v-card-text>
          <TodoListTable />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';

.title {
  color: $primary;
  font-size: 2rem;
  margin-bottom: 10px;
}

.description {
  color: $secondary;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
