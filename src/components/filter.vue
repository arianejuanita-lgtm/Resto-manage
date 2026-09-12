<script setup>
import Categorie from './filters/categorie.vue';
import Dietary from './filters/dietary.vue';
import Portion from './filters/portion.vue';
import Price from './filters/price.vue';
import UseItem from '@/hoooks/useItem.js';

const {clearFilter}=UseItem();
</script>

<template>
  <aside class="filters-container">
    <div class="filters-header">
      <h3 class="filters-title">Filters</h3>
      <button class="clear-btn" type="button" v-on:click="clearFilter" >Clear All</button>
    </div>

    <hr class="divider" />

    <div class="filters-list">
      <Categorie class="filter-item" />
      <!-- <Price class="filter-item" /> -->
      <Portion class="filter-item" />
      <Dietary class="filter-item" />
    </div>
  </aside>
</template>

<style scoped>
.filters-container {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 280px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filters-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.clear-btn {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.clear-btn:hover {
  color: #ef4444; 
  background-color: #fef2f2;
}

.divider {
  border: none;
  height: 1px;
  background-color: #f3f4f6;
  margin: 16px 0;
}

.filters-list {
  display: flex;
  flex-direction: column;
  gap: 16px; 
}

.filter-item {
  width: 100%;
}
</style>