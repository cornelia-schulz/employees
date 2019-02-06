<template>
    <div class="employee">
        <div class="employee-left">
            <img :src="employee.avatar" :alt="employee.lastName">
            <p><span class="bold">{{ employee.jobTitle }}</span><br>
            {{ employee.age }}<br>
            {{ formatDate(employee.dateJoined) }}</p>
        </div>
        <div class="employee-right">
            <h2>{{ employee.firstName }} {{ employee.lastName }}</h2>
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
            let dateJoined = new Date(str)
            let day = dateJoined.getDate()
            let month = dateJoined.getMonth() + 1
            let year = dateJoined.getFullYear()
            let date = day + '/' + month + '/' + year
            return date
        }
    }
}
</script>

<style scoped>

</style>