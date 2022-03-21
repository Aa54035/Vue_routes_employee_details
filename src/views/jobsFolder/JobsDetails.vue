<template>
  <h1>Jobs details</h1>
  <h2>id is {{ $route.params.id }}</h2>
  <h3>Title is {{ $route.params.title }}</h3>
  <h3>Address is {{ $route.params.address }}</h3>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>