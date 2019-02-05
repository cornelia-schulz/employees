<template>
    <div class="employee">
        <div class="employee-left">
            <img :src="employee.avatar" :alt="employee.lastName">
            <p>{{ employee.jobTitle }}<br>
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

p {
    padding-top: 5px;
}

.employee-left {
    margin-right: 25px;
}

.employee-right {
    padding-right: 30px;
}

.employee-right h2 {
    height: 128px;
    padding-top: 80px;
    margin-bottom: 0;
    border-bottom: 2px solid lightgray;
    display: inline-block;
}

</style>