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
            <input type="text" v-model="searched" @keyup="getSearch($event)">
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
            selected: 'firstName',
            searched: ''
        }
    },
    props: {
        employees: Array
    },
    methods: {
        getSelected: function(event) {
            serverBus.$emit('sortSelected', event.target.value)
        },
        getSearch: function(event) {
            serverBus.$emit('searchNames', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>