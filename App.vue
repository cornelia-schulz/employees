
<template>
  <div>
    <Header />
    <Search />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
export default {
  data() {
    return {
    }
  },
  components: {
      Header,
      Search
  }
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: blue;
}
</style>