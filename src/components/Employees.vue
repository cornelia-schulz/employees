<template>
  <main id="employees">
      <div class="card" v-for="employee in selectedEmployees.employees" v-bind:key="employee.id" v-b-modal="'modalEmployee' + employee.id">
          <img :src="employee.avatar">
          <div class="card-text">
            <h5 class="bold">{{ employee.firstName }} {{ employee.lastName }}</h5>
            <p class="card-text-p">{{ shortenBio(employee.bio) }}</p>
          </div>
          <b-modal centered :id="'modalEmployee'+employee.id">
            <Employee :employee="employee" />
          </b-modal>
    </div>
  </main>
</template>

<script>
import employees from '../sample-data.json'
import Employee from './Employee.vue'
import {
    serverBus
} from '../main.js'
export default {
    name: 'Employees',
    data() {
        return {
            selectedEmployees: JSON.parse(JSON.stringify( employees ))
        }
    },
    props: {
        employees: Array
    },
    components: {
        Employee
    },
    created() {
        this.sort('firstName')
        var vm = this
        serverBus.$on('sortSelected', (selected) => {
            vm.sort(selected)
        })
        serverBus.$on('searchNames', (searched) => {
          if(searched === ''){
            vm.selectedEmployees.employees = JSON.parse(JSON.stringify( vm.employees ))
          } else {
            let result = vm.employees.find(s => s.firstName.toUpperCase() === searched.toUpperCase())
            let results = []
            results.push(result)
            vm.selectedEmployees.employees = results
            return result
            }
          })
        },
    methods: {
      sort: function(selected) {
        this.selectedEmployees.employees.sort(function(a, b) {
          let keyA = a[selected].toUpperCase()
          let keyB = b[selected].toUpperCase()
          if (keyA < keyB) {
              return -1
          }
          if (keyA > keyB) {
              return 1
          }
          return 0
      })
      },
      shortenBio: function(text) {
        if(text.length > 70) {
          return text.substring(0,60)
        } else {
          return text
        }
      }
    }
}
</script>

<style scoped>
main {
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 2%;
}

.card {
  display: flex;
  flex-direction: row;
  border: 2px solid rgba(96,96,96,1);
  height: 120px;
  margin: 1%;
  overflow: hidden;
  width: 31%;
}

img {
  width: 120px;
  border: 2px solid rgba(96,96,96,1);
}

.bold {
  font-weight: 500;
}

.card-text {
  margin: 1%;
  width: 225px;
  padding-bottom: 5px;
}

.modal-footer {
  display: none !important;
}

</style>