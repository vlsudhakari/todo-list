<script setup>
import { ref } from 'vue'
import { todoListStore } from '@/stores/todo_list'
import moment from 'moment'

const todoStore = todoListStore()

const name = ref('')
const priority = ref('')
const time_required = ref('')
const description = ref('')
const errorMessage = ref('')
const valid = ref(false)
const formRef = ref(null)
const priorityList = ref(['High', 'Medium', 'Low'])

const timeDurationRules = [
  (v) => !!v || 'Time duration is required',
  (v) => validateTimeDuration(v) || 'Invalid time duration format'
]

const validateTimeDuration = (time) => {
  const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
  return regex.test(time)
}

const handleAddItem = async () => {
  errorMessage.value = ''
  const form = formRef.value
  if (form.validate()) {
    try {
      let payload = {
        name: name.value,
        priority: priority.value,
        description: description.value,
        time_required: time_required.value,
        date: moment().format('YYYY-MM-DD'),
        completion_time: ''
      }
      todoStore.addItemToTodoList(payload)
    } catch (error) {
      errorMessage.value = error.response ? error.response.data.message : 'An error occurred'
    }
  }
}
</script>
<template>
  <div class="add-item">
    <div class="add-item-container">
      <h1 class="text-center mb-2">Add Todo Item</h1>
      <v-form ref="formRef" v-model="valid">
        <v-text-field
          v-model="name"
          hide-details="auto"
          label="name"
          variant="outlined"
        ></v-text-field>
        <v-select
          v-model="priority"
          :items="priorityList"
          density="comfortable"
          label="Priority"
          variant="outlined"
        ></v-select>
        <v-text-field
          v-model="time_required"
          :rules="timeDurationRules"
          label="Time Required (HH:MM)"
          required
          variant="outlined"
          placeholder="00:00"
        ></v-text-field>
        <v-textarea
          v-model="description"
          clear-icon="mdi-close-circle"
          label="Description"
          variant="outlined"
          clearable
        ></v-textarea>
        <button class="mt-2" type="submit" @click.prevent="handleAddItem">Save</button>
      </v-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';

.add-item {
  min-height: 100vh;
  margin: 0 auto;
  width: 30%;
  .add-item-container {
    text-align: left;
    margin-top: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    div {
      margin-bottom: 10px;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid #000;
      border-radius: 4px;
    }

    button {
      width: 50%;
      padding: 10px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #45a049;
      }
    }

    p {
      color: #000000;
      &.success {
        color: green;
        font-weight: bold;
      }
      &.danger {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
