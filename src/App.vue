<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link> | &nbsp;
    <router-link :to="{name:'jobs'}">Jobs Details</router-link> 
 
   </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
