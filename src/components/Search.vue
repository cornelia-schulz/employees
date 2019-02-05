<template>
    <div id="search">
        <div class="title">
            <h2>Our Employees</h2>
        </div>
        <div class="filters">
            <label for="sort">Sort by:</label>
            <select v-model="selected" @change="getSelected($event)">
                <option value="firstName">first name</option>
                <option value="lastName">last name</option>
                <option value="jobTitle">job title</option>
            </select>
            <label for="search">Search</label>
            <input type="text">
        </div>
    </div>
</template>

<script>
import {
    serverBus
} from '../main.js'
export default {
    name: 'Search',
    data() {
        return {
            selected: 'firstName'
        }
    },
    props: {
        employees: Array
    },
    methods: {
        getSelected: function(event) {
            serverBus.$emit('sortSelected', event.target.value)
        }
    }
}
</script>

<style scoped>
#search {
    font-family: 'Roboto', sans-serif;
    display: flex;
    width: 95%;
    margin: 0 auto;
    border-bottom: 2px solid lightgrey;
    justify-content: space-between;
    padding-top: 2%;
}

h2 {
    font-weight: 400;
    margin-bottom: 0;
    font-size: 1.8rem;
}

input {
    height: 1.6em;
    border: 2px solid gray;
}

select {
    height: 1.5em;
    border: 2px solid gray;
    margin-right: 2%;
}

.filters, .title {
    padding-top: 2%;
    margin-top: auto;
    font-size: 0.9em;
}

.filters {
    width: 50%;
    text-align: right;
}

.title {
    margin-bottom: 1%;
}
</style>