<script setup>
import { ref } from 'vue'
import { todoListStore } from '@/stores/todo_list'
import moment from 'moment'
import { useRouter } from 'vue-router'

const router = useRouter()

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
  console.log(form)
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
      if (todoStore.addTodoItemStatus) {
        name.value = ''
        description.value = ''
        time_required.value = ''
        priority.value = ''
        router.go(-1)
      }
    } catch (error) {
      errorMessage.value = error.response ? error.response.data.message : 'An error occurred'
    }
  }
}

const cancelAddTodoItem = () => {
  router.go(-1)
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
          label="Name"
          variant="outlined"
          required
        ></v-text-field>
        <v-select
          v-model="priority"
          :items="priorityList"
          density="comfortable"
          label="Priority"
          variant="outlined"
          required
        ></v-select>
        <v-text-field
          v-model="time_required"
          :rules="timeDurationRules"
          label="Time Required (HH:MM)"
          required
          variant="outlined"
          placeholder="Duration(HH:MM)"
        ></v-text-field>
        <v-textarea
          v-model="description"
          clear-icon="mdi-close-circle"
          label="Description"
          variant="outlined"
          clearable
        ></v-textarea>
        <div class="button-section">
          <v-btn class="success-button" variant="outlined" @click.prevent="handleAddItem"
            >Save</v-btn
          >
          <v-btn class="danger-button" variant="outlined" @click.prevent="cancelAddTodoItem"
            >Cancel</v-btn
          >
        </div>
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
      color: white;
      font-weight: bold;
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

    .button-section {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .success-button {
        border: none;
        border-radius: 5px;
        width: 30%;
        background-color: #297b41;
        color: #fff;
        font-weight: bold;
      }
      .danger-button {
        border: solid 2px #ee2828;
        border-radius: 5px;
        width: 30%;
        color: #ee2828;
        font-weight: bold;
        &:hover {
          background-color: #ee2828;
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
