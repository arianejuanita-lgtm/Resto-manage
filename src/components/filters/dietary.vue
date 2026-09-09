<script setup>
import {ref} from 'vue';
import filters from '@/data/filters';
const diateries=ref(filters.dietary);
</script>
<template>
    <label for="diatery">Diatery</label>
    <ul>
        <li v-for="diat in diateries" :key="diat.id">
           
            <input type="checkbox" name="diat" id="diat"> {{ diat.label }}
        </li>
    </ul>
</template>
<style></style>