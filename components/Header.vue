<template>
<header>
<div class="left">
    <h1>Company Name</h1>
    <p>Company Motto</p>
</div>
<div class="right">
    <p>Since {Company Establishment Date}</p>
</div>

</header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    }
  }
}
</script>

<style>
header {
    font-family: 'Open Sans', sans-serif;
    display: flex;
    justify-content: space-between;
    background-color: rgba(235,235,235,1);
    padding-left: 3%;
    padding-right: 3%;
    border-bottom: 2px solid black;
    border-right: 1px solid black;
}

h1 {
    font-weight: 600;
    margin-bottom: 1%;
}

.left p {
    margin-top: 0
}

.right {
    margin-top: auto;
}
</style>