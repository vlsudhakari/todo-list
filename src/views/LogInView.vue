<script setup>
import { ref } from 'vue'
import { userStore } from '@/stores/user'
const storeUser = userStore()

const username = ref('')
const password = ref('')
const errorMessage = ref('')

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
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:(demo)</label>
          <v-text-field
            :disabled="storeUser.loggedIn"
            type="text"
            id="username"
            v-model="username"
            variant="outlined"
            required
          ></v-text-field>
        </div>
        <div>
          <label for="password">Password:(demo@1234)</label>
          <v-text-field
            :disabled="storeUser.loggedIn"
            type="password"
            id="password"
            v-model="password"
            variant="outlined"
            required
          ></v-text-field>
        </div>
        <button type="submit">
          {{ storeUser.loggedIn ? 'Log Out' : 'Log In' }}
        </button>
      </form>
      <p :class="storeUser.loggedIn ? 'success' : 'danger'" v-if="storeUser.statusMessage != ''">
        {{ storeUser.statusMessage }}
      </p>
    </div>
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
