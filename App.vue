
<template>
  <div>
    <Header :companyName="data.companyInfo.companyName" 
    :companyMotto="data.companyInfo.companyMotto"
    :companyEst="data.companyInfo.companyEst"/>
    <Search />
    <Employees :employees="data.employees" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Employees from './components/Employees.vue'
import data from './sample-data.json'

export default {
  data() {
    return {
      data
    }
  },
  components: {
      Header,
      Search,
      Employees
  }
}
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: blue;
}
</style>