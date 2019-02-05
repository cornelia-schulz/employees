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
    font-size: 1.6rem;
}

input {
    height: 1.9em;
    border: 3px solid gray;
    width: 140px;
    font-size: 11px;
}

select {
    height: 1.9em;
    border: 3px solid gray;
    margin-right: 2%;
    width: 160px;
    font-size: 11px;
    background-image:
    linear-gradient(45deg, transparent 50%, #EBEBEB 50%),
    linear-gradient(135deg, #EBEBEB 50%, transparent 50%),
    linear-gradient(to right, #eee, #fff);
  background-position:
    calc(100%) calc(1em + 2px),
    calc(100%) calc(1em + 2px),
    100% 0;
  background-size: 19px;
  background-repeat: no-repeat;
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