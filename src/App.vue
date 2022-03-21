<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> | &nbsp;
    <router-link :to="{ name: 'jobs' }">Jobs Details</router-link>
  </nav>

  <button @click="back" class="redirectTo">Go Back</button>
  <button @click="redirect" class="redirectTo">redirect to Home</button>
  <button @click="Next" class="redirectTo">Go next</button>

  <router-view />
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    },
    redirect() {
      this.$router.push({ name: "home" })
    },
    Next() {
      this.$router.go(+1)
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.redirectTo {
  border-radius: 20px;
  margin: 20px;
  font-weight: bold;
  text-decoration: underline;
  font-style: italic;
  background: #b9b028;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  border-radius: 5px;
  padding: 5px;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: white;
  background: #1ec78f;
  text-decoration: none;
}
</style>
