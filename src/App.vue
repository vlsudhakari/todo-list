<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <v-app>
    <HelloWorld msg="Hello!" />
    <NavBar />
    <v-main>
      <v-card>
        <router-view class="px-3"></router-view>
        <!-- <v-card-actions>
          <v-btn color="primary" @click="handleClick">Click Me</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-main>
  </v-app>
  <!-- <header> -->
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

  <!-- <div class="wrapper">
    <HelloWorld msg="You did it!" />

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/todo-list">Todo List</RouterLink>
    </nav>
  </div> -->
  <!-- </header> -->

  <!-- <RouterView /> -->
</template>

<style scoped>
.px-3 {
  margin: 0 4rem;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  /* margin: 0 auto 2rem; */
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 0 2rem;
}

nav a {
  margin: 0 2rem;
}

nav a.router-link-exact-active {
  margin: 0 1rem;
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 0.5rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: 1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
