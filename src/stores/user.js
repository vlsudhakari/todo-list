import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => ({
    name: 'demo',
    password: 'demo@1234',
    loggedIn: false,
    message: ''
  }),
  getters: {
    status: (state) => state.loggedIn ? "Logged In" : "Logged Out",
    statusMessage: (state) => state.message
  },
  actions: {
    login(payload) {
      if (payload.username == this.name && payload.password == this.password) {
        this.loggedIn = true;
        this.message = 'Logged In Successfully!'
      } else {
        this.loggedIn = false;
        this.message = 'Invalid Credentials!'
      }
    },
    logout() {
      this.loggedIn = false;
      this.message = 'Logged Out Successfully!'
    },
  },
});
