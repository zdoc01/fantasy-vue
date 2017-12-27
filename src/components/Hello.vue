<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Survivor Stats</h2>
    <ul>
      <li><a href="/api/stats">Season Totals</a></li>
      <li><a href="/api/stats/week/1">Week 1</a></li>
      <li><a href="/api/stats/week/2">Week 2</a></li>
      <li><a href="/api/stats/week/3">Week 3</a></li>
      <li><a href="/api/stats/week/4">Week 4</a></li>
      <li><a href="/api/stats/week/5">Week 5</a></li>
      <li><a href="/api/stats/week/6">Week 6</a></li>
      <li><a href="/api/stats/week/7">Week 7</a></li>
      <li><a href="/api/stats/week/8">Week 8</a></li>
      <li><a href="/api/stats/week/9">Week 9</a></li>
      <li><a href="/api/stats/week/10">Week 10</a></li>
      <li><a href="/api/stats/week/11">Week 11</a></li>
      <li><a href="/api/stats/week/12">Week 12</a></li>
      <li><a href="/api/stats/week/13">Week 13</a></li>
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
