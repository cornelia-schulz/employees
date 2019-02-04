
<template>
  <div class="container">
    <Header :companyName="data.companyInfo.companyName" 
    :companyMotto="data.companyInfo.companyMotto"
    :companyEst="data.companyInfo.companyEst"/>
    <Search :employees="data.employees" @clicked="onSearch" />
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
      data,
      search: String
    }
  },
  computed: {
    onSearch: function(value) {
      let vm = this
      vm.search = value
      return value
    }
  },
  components: {
      Header,
      Search,
      Employees
  }
}
</script>

<style scoped>
.container {
  width: 95%;
  border-right: 1px solid lightgray;
  padding: 0px;
}

.modal-footer {
  display: none !important;
}
</style>