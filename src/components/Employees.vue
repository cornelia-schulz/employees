<template>
  <main id="employees">
      <div class="card" v-for="employee in selectedEmployees" v-bind:key="employee.id" v-b-modal="'modalEmployee' + employee.id">
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
import Employee from './Employee.vue'
import {
    serverBus
} from '../main.js'
export default {
    name: 'Employees',
    data() {
        return {
            selectedEmployees: Array
        }
    },
    props: {
        employees: Array
    },
    components: {
        Employee
    },
    beforeCreate() {

    },
    created() {
        this.selectedEmployees = this.employees.map(a => Object.assign({}, a))
        this.sort('firstName')
        var vm = this
        serverBus.$on('sortSelected', (selected) => {
            vm.sort(selected)
        })
        serverBus.$on('searchNames', (searched) => {
                vm.selectedEmployees = vm.employees
                vm.selectedEmployees =
                    vm.selectedEmployees.filter(employee => employee.firstName.toLowerCase().indexOf(searched) > -1 ||
                        employee.lastName.toLowerCase().indexOf(searched) > -1)
        })
    },
    methods: {
        sort: function(selected) {
            this.selectedEmployees.sort(function(a, b) {
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
            if (text.length > 70) {
                return text.substring(0, 56)
            } else {
                return text
            }
        }
    }
}
</script>
