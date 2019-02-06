<template>
    <header>
        <div class="header-left">
            <h1>{{ companyName }}</h1>
            <p>{{ companyMotto }}</p>
        </div>
        <div class="header-right">
            <p>Since {{ formatDate(companyEst) }}</p>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        companyName: String,
        companyMotto: String,
        companyEst: String
    },
    methods: {
        formatDate: function(str) {
            let established = new Date(str)
            let day = established.getDate()
            let month = established.getMonth() + 1
            let year = established.getFullYear()
            let date = day + '-' + month + '-' + year
            return date
        }
    }
}
</script>

<style scoped>
</style>