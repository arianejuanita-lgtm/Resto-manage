<script setup>
import Categorie from './filters/categorie.vue';
import Dietary from './filters/dietary.vue';
import Portion from './filters/portion.vue';
import Price from './filters/price.vue';
</script>

<template>
  <div class="filters-container">
    <div class="filters-header">
      <h3 class="filters-title">Filters</h3>
      <button class="clear-btn">Clear All</button>
    </div>
    <hr class="divider" />
    <div class="filters-list">
      <Categorie class="filter-item" />
       <Price class="filter-item" />
       <Portion class="filter-item" />
      <Dietary class="filter-item" />
      
     
    </div>
  </div>
</template>

<style scoped>
.filters-container {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 300px; 
}

.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filters-title {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin: 0;
}

.clear-btn {
  background: none;
  border: none;
  color: gray;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
}

.clear-btn:hover {
  text-decoration: underline;
}

.divider {
  border: none;
  height: 1px;
  background-color: #eaeaea;
  margin: 12px 0;
}

.filters-list {
  display: flex;
  flex-direction: column;
  gap: 12px; 
}
</style>