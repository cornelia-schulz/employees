
<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  data() {
    return {
      message: 'Hello World',
    }
  },
  components: {
      Header
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