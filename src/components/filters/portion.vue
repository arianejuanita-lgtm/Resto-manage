<script setup>
import {ref} from 'vue';
import filters from '@/data/filters';
import portion from '../comom/portion.vue';
const Portions=ref(filters.portion_sizes);
</script>
<template>
    <label for="portion">Portion</label>
    <ul>
        <li v-for="port in Portions" :key="port.id">
            <portion :title="port.label"/>
        </li>
    </ul>
</template>
<style></style>