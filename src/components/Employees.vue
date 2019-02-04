<template>
  <main id="employees">
      <div class="cards" v-for="employee in employees" v-bind:key="employee.id">
        <div class="single-card" v-b-modal="'modalEmployee' + employee.id">
          <img :src="employee.avatar">
          <div class="card-text">
            <h5 class="bold">{{ employee.firstName }} {{ employee.lastName }}</h5>
            <p class="card-text">{{ employee.bio }}</p>
          </div>
        </div>
          <b-modal :id="'modalEmployee'+employee.id">
            <Employee :employee="employee" />
          </b-modal>
    </div>
  </main>
</template>

<script>
import employees from '../sample-data.json'
import bCardGroup from 'bootstrap-vue/es/components/card/card-group'
import bCard from 'bootstrap-vue/es/components/card/card'
import Employee from './Employee.vue'
export default {
  name: 'Employees',
  props: {
    employees: Array
  },
  components: {
    Employee
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
  border: 1px solid lightgray;
  height: 110px;
  margin: 3%;
  overflow: hidden;
  flex-grow: 1;
  width: 33%;
}

img {
  width: 110px;
  border: 1px solid lightgray;
}

.bold {
  font-weight: 500;
}

.card-text {
  margin: 1%;
  width: 200px;
}

.modal-footer {
  display: none !important;
}

</style>