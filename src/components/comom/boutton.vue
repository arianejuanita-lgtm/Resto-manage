<script setup>
const props=defineProps(['title'])
</script>

<template>
    <button>{{ title }}</button>
</template>

<style scoped>
button{
    display: flex;
    background-color: #F5BE18;
    border: 1px solid #F5BE18; 
    padding: auto;
    border-radius: 10px;
}
</style>