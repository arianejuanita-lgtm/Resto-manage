<script setup>
import {ref, watch} from 'vue';
import filters from '@/data/filters';
const diateries=ref(filters.dietary);
import UseItem from '@/hoooks/useItem';
const dia=ref('');
const {diate}=UseItem();

watch(dia,(newdiate)=>{
    diate.value=newdiate;
});
</script>
<template>
    <label for="diatery">Diatery</label>
    <ul>
        <li v-for="diat in diateries" :key="diat.id">
           
            <input 
            type="checkbox"
             name="diat" 
              v-model="dia"
                  :id="'dia-' + dia.id" 
                :true-value="diat.label"
                false-value="" > {{ diat.label }}
        </li>
    </ul>
</template>
<style></style>