
<template>
  <div class="container">
    <Header :companyName="data.companyInfo.companyName" 
    :companyMotto="data.companyInfo.companyMotto"
    :companyEst="data.companyInfo.companyEst"/>
    <Search :employees="data.employees" />
    <Employees :employees="data.employees" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Employees from './components/Employees.vue'
import data from './sample-data.json'
// import { serverBus } from './main';

export default {
  data() {
    return {
      data,
      search: String
    }
  },
  // created() {
  //   serverBus.$on('sortSelected', (selected) => {
  //     this.search = selected
  //   })
  // },
  // methods: {
  //   getSorted: function() {
  //     data.employees.sort(function(a, b) {
  //       let keyA = a.firstName.toUpperCase()
  //       console.log(keyA)
  //       let keyB = b.firstName.toUpperCase()
  //           if (keyA < keyB) {
  //             console.log(-1)
  //             return -1
  //           } 
  //           if (keyA > keyB) {
  //             console.log(1)
  //             return 1
  //           }
  //           return 0
  //     })
  //     return data.employees
  //   }
  // },
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

</style>