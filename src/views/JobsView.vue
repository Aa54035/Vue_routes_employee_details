<template>
  <div class="container">
    <h3 class="p-3 text-center">Vue.js - Display a list Employee</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Address</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items in Employee" :key="items.id" class="tableRow">
          <td>{{ items.id }}</td>
          <td>{{ items.title }}</td>
          <td>{{ items.Address }}</td>
          <td>{{ items.Salary }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Employee: [
        { id: 100, title: "Software developer", Address: "pune", Salary: 1000 },
        { id: 200, title: "Software architect", Address: "Goa", Salary: 2000 },
        { id: 300, title: "Business Analyst", Address: "Bombay", Salary: 3000 },
        { id: 400, title: "Scrum master", Address: "Delhi", Salary: 4000 },
      ],
    };
  },
};
</script>

<style>
.tableRow {
  text-align: center;
}
.tableRow > td {
  margin: 100px;
  background: rgb(16, 145, 112);
  font-weight: bold;
  color: black;
  border: 1px solid blue;
}
</style>