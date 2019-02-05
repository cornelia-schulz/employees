<template>
    <header>
        <div class="left">
            <h1>{{ companyName }}</h1>
            <p>{{ companyMotto }}</p>
        </div>
        <div class="right">
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
header {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: space-between;
    background-color: rgba(235,235,235,1);
    padding-left: 3%;
    padding-right: 3%;
    border-bottom: 2px solid rgba(96,96,96,1);
    border-right: 1px solid black;
}

h1 {
    font-weight: 500;
    margin-bottom: 1%;
}

.left p {
    margin-top: 0
}

.right {
    margin-top: auto;
}
</style>