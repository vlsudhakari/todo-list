<script setup>
import { ref } from 'vue'
// import { counterStore } from '@/stores/counter'
import { userStore } from '@/stores/user'

// const counter = counterStore()
const storeUser = userStore()

const username = ref('')
const password = ref('')
const errorMessage = ref('')

// const user = ref({
//   name: 'John Doe',
//   age: 30
// })

// const incrementCounter = () => {
//   counter.increment()
// }

const handleLogin = async () => {
  errorMessage.value = ''
  try {
    if (storeUser.loggedIn) {
      storeUser.logout()
      username.value = ''
      password.value = ''
    } else {
      let payload = { username: username.value, password: password.value.toString() }
      storeUser.login(payload)
    }
  } catch (error) {
    errorMessage.value = error.response ? error.response.data.message : 'An error occurred'
  }
}
</script>

<template>
  <div class="login">
    <!-- <h1>Counter Example</h1>
    <p>Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>
    <p>Triple Count: {{ counter.tripleCount }}</p>
    <button @click="incrementCounter">Increment</button> -->

    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">{{ storeUser.loggedIn ? 'Log Out' : 'Log In' }}</button>
      </form>
      <p :class="storeUser.loggedIn ? 'success' : 'danger'" v-if="storeUser.statusMessage != ''">
        {{ storeUser.statusMessage }}
      </p>
    </div>

    <!-- <p>User Name: {{ username }}</p>
    <p>Age: {{ user.age }}</p>
    <p>Logged In Status: {{ storeUser.status }}</p> -->
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';

.login {
  min-height: 100vh;
  margin: 0 auto;
  width: 30%;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-end;
  // align-items: center;
  // button {
  //   width: 150px;
  //   padding: 10px;
  //   margin: 10px 0 20px;
  //   background-color: $secondary;
  //   color: white;
  //   border: none;
  //   border-radius: 5px;
  //   cursor: pointer;
  //   &:hover {
  //     background-color: $secondary;
  //   }
  // }
  .login-container {
    text-align: left;
    // max-width: 50%;
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
