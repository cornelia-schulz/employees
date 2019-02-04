<template>
    <div class="employee">
        <div class="employee-left">
            <img :src="employee.avatar" :alt="employee.lastName">
            <p>{{ employee.jobTitle }}</p>
            <p>{{ employee.age }}</p>
            <p>{{ formatDate(employee.dateJoined) }}</p>
        </div>
        <div class="employee-right">
            <h2>{{ employee.firstName }} {{ employee.lastName }}</h2>
            <hr>
            <p>{{ employee.bio }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Employee',
  props: {
    employee: {}
  },
  methods: {
      formatDate: function(str) {
          let words = str.split('T')
          return words[0]
      }
  }
}
</script>

<style scoped>
.employee {
    display: flex;
    justify-content: space-around;
}

.employee-left {
    margin-right: 2%;
}
</style>