<template>
  <main id="employees">
      <div class="cards" v-for="employee in employees" v-bind:key="employee.id">
        <div class="single-card" v-b-modal="'modalEmployee' + employee.id">
          <img :src="employee.avatar">
          <div class="card-text">
            <h5 class="bold">{{ employee.firstName }} {{ employee.lastName }}</h5>
            <p class="card-text-p">{{ shortenBio(employee.bio) }}</p>
          </div>
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
    },
    methods: {
      sort: function(selected) {
        this.employees.sort(function(a, b) {
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

.cards {
  display: flex;
  flex: 1;
}

.single-card {
  display: flex;
  flex-direction: row;
  border: 2px solid rgba(96,96,96,1);
  height: 130px;
  margin: 3%;
  overflow: hidden;
  flex-grow: 1;
  width: 33%;
}

img {
  width: 130px;
  border: 2px solid rgba(96,96,96,1);
}

.bold {
  font-weight: 500;
}

.card-text {
  margin: 1%;
  width: 200px;
  padding-bottom: 5px;
}

.modal-footer {
  display: none !important;
}

</style>