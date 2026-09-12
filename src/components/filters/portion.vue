<script setup>
import { ref, watch } from 'vue';
import filters from '@/data/filters';
import portion from '../comom/portion.vue';
import UseItem from '@/hoooks/useItem.js';

const Portions = ref(filters.portion_sizes);
const porte = ref('');
const { port } = UseItem();

watch(porte, (newport) => {
    port.value = newport;
});

const selectPortion = (label) => {
    if (porte.value === label) {
        porte.value = '';
    } else {
        porte.value = label;
    }
};
</script>

<template>
    <label for="portion">Portion</label>
    <ul class="bot">
        <li v-for="p in Portions" :key="p.id">
            <portion 
                :title="p.label" 
                :id="'part' + p.id" 
                :ontap="() => selectPortion(p.label)"
            />
        </li>
    </ul>
</template>

<style>
.bot {
   
    width: 100%;
    height: auto;
}
</style>
