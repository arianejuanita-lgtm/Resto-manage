<script setup>
import {ref} from 'vue';
import filters from '@/data/filters';
const categories=ref(filters.categories);
</script>
<template>
    <label for="category">Category</label>
    <ul>
        <li v-for="cat in categories" :key="cat.id">
            <input type="checkbox" name="cat" id="cat"> {{ cat.label }}
        </li>
    </ul>
</template>
<style></style>