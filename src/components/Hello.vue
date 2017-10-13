<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Survivor Stats</h2>
    <ul>
      <li><a href="/api/stats">Season Totals</a></li>
      <li><a href="/api/stats/week/1">Week 1</a></li>
      <li><a href="/api/stats/week/2">Week 2</a></li>
      <li><a href="/api/stats/week/3">Week 3</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to FantasyVue',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
