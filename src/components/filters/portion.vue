<script setup>
import {ref} from 'vue';
import filters from '@/data/filters';
import portion from '../comom/portion.vue';
const Portions=ref(filters.portion_sizes);
</script>
<template>
    <label for="portion">Portion</label>
    
        <div v-for="port in Portions" :key="port.id" class="bot">
            <portion :title="port.label"/>
        </div>
    
</template>
<style>
.bot {
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
}
</style>