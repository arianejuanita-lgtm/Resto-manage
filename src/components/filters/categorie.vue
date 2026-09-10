<script setup>
import { ref, watch } from 'vue';
import filters from '@/data/filters';
import UseItem from '@/hoooks/useItem';

const categories = ref(filters.categories);
const cate = ref(''); 

const { catego } = UseItem();

watch(cate, (newValue) => {
    catego.value = newValue;
});
</script>

<template>
    <label for="category">Category</label>
    <ul>
        <li v-for="cat in categories" :key="cat.id">
            <input 
                type="checkbox" 
                name="cat" 
                :id="'cat-' + cat.id" 
                v-model="cate"
                :true-value="cat.label"
                false-value=""
            /> 
            {{ cat.label }}
        </li>
    </ul>
</template>
