<template>
  <v-app-bar app>
    <v-toolbar-title>Todo List</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/" v-if="!storeUser.isAuthenticated">Login</v-btn>
    <v-btn text to="/about">About</v-btn>
    <v-btn text to="/todo-list">Todo List</v-btn>
    <v-btn text @click="handleLogout" v-if="storeUser.isAuthenticated">Logout</v-btn>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/user'
const storeUser = userStore()
const router = useRouter()

const handleLogout = () => {
  storeUser.logout()
  router.push({
    path: '/'
  })
}
</script>

<style scoped></style>
