<script setup>
import Header from './components/header.vue';
import search from './components/comom/search.vue';
import menuItems from './data/menuItem.js';
import item from './components/item.vue';
import Filter from './components/filter.vue';
</script>

<template>
  
    <Header class="header" />
    <div class="content">
    <search class="search" />
  <Filter class="filter"/>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
}

.search {
  position: fixed;
  top: 90px; 
  right: 50px;
  z-index: 1001; 
}

.filter {
  position: fixed;
  top: 100px; 
  left: 50px;
  width: 300px;
  background-color: whitesmoke;
  border-radius: 20px;
  border: 1px solid gray;
}

.content {
  display: flex;
  gap: 10px;
  overflow-x: auto;  
  white-space: nowrap; 
}


</style>