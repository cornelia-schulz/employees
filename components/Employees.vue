<template>
  <main id="employees">
    <div class="cards" v-for="employee in employees" v-bind:key="employee.id">
      <div class="card" v-b-modal.modalEmployee>
        <img :src="employee.avatar">
        <div class="card-text">
          <h3>{{ employee.firstName }} {{ employee.lastName }}</h3>
          <p class="card-text">{{ employee.bio }}</p>
        </div>
      </div>
      <b-modal id="modalEmployee">
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
    employees: []
  },
  components: {
    Employee
  }
}
</script>

<style scoped>
main {
  width: 95%;
}

.cards {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.card {
  display: flex;
  width: 300px;
  justify-content: flex-start;
  flex-direction: row;
}

img {

}

.card-text {

}
</style>