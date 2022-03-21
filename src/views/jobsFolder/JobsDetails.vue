


<template>
  <div v-if="returnData">
    <h1>Jobs details</h1>

    <h2>id is {{ returnData.id }}</h2>
    <h3>Title is {{ returnData.title }}</h3>
    <h3>Address is {{ returnData.address }}</h3>
  </div>
  <div v-else>
    <h1>still loading jobs details , please Wait !!!</h1>
  </div>

  <!-- <h2>id is {{ $route.params.id }}</h2>
  <h3>Title is {{ $route.params.title }}</h3>
  <h3>Address is {{ $route.params.address }}</h3> -->
</template>

<script>
export default {
  props: ["id", "title", "address"],

  data() {
    return {
      returnData: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/employee/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.returnData = data))
      .catch((error) => console.log("Error received " + error));
  },
};
</script>

<style>
</style>