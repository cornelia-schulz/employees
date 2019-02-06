
<template>
  <div class="container">
    <Header :companyName="data.companyInfo.companyName" 
    :companyMotto="data.companyInfo.companyMotto"
    :companyEst="data.companyInfo.companyEst"/>
    <Search :employees="data.employees"/>
    <Employees :employees="data.employees"/>
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
      data,
      search: String
    }
  },
  components: {
      Header,
      Search,
      Employees
  }
}
</script>

