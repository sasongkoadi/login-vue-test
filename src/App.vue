<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/home" class="nav-link" >
        <a href class="navbar-brand" >bezKoder</a>
      </router-link>
      <div class="navbar-nav mr-auto">

        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.user.name }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="handleLogout">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import {auth} from './store/auth.module'
export default {
  data() {
    return {
      state: auth.state 
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user 
    },
  },
  methods: {
    async handleLogout() {
      await this.$store.dispatch('auth/logout');
      auth.mutations.logout(this.state) 
      this.$router.push('/home');
    }
  }
};
</script>
