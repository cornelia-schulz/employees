
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

<style>
.modal-footer {
  display: none !important;
}
.modal-header {
  height: 0;
  border-bottom: 0px !important;
  padding: 0 !important;
}

.modal-header button {
  margin-top: -95px !important;
  font-size: 4em;
  font-weight: 400;
  padding-right: 5px !important;
  opacity: 1;
  text-shadow: none;
}

.modal-content {
  padding: 10px;
}
</style>