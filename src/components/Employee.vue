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
.employee {
    display: flex;
    justify-content: space-around;
}

.bold {
    font-weight: 600;
}

p {
    padding-top: 5px;
}

.employee-left {
    margin-right: 25px;
}

.employee-left img {
    border: 2px solid rgba(96,96,96,1);
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

.employee-right p {
    line-height: 1.2em;
}

</style>