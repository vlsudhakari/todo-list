import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => ({
    name: 'demo',
    password: 'demo@1234',
    isAuthenticated: false,
    message: ''
  }),
  getters: {
    status: (state) => state.isAuthenticated ? "Logged In" : "Logged Out",
    statusMessage: (state) => state.message
  },
  actions: {
    login(payload) {
      if (payload.username == this.name && payload.password == this.password) {
        this.isAuthenticated = true;
        this.message = 'Logged In Successfully!'
      } else {
        this.isAuthenticated = false;
        this.message = 'Invalid Credentials!'
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.message = 'Logged Out Successfully!'
    },
  },
});
