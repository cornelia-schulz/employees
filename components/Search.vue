<template>
    <div id="search">
        <div class="title">
            <h2>Our Employees</h2>
        </div>
        <div class="filters">
            <label for="sort">Sort by:</label>
            <select>
                <option>First name</option>
                <option>Last name</option>
                <option>Job title</option>
            </select>
            <label for="search">Search</label>
            <input type="text">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      message: 'Hello World',
    }
  }
}
</script>

<style>
#search {
    font-family: 'Roboto', sans-serif;
    display: flex;
    width: 95%;
    margin: 0 auto;
    border-bottom: 2px solid lightgrey;
    justify-content: space-between;
}

h2 {
    font-weight: 400;
    margin-bottom: 0;
}

.filters, .title {
    padding-top: 2%;
    margin-top: auto;
    margin-bottom: 1%;
}
</style>