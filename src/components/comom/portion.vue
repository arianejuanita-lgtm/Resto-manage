```vue
<script setup>
const props = defineProps(['title'])
</script>

<template>
  <button >
    {{ title }}
  </button>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;

  padding: 0 20px;
  border-radius: 20px;
height: 25px;
  cursor: pointer;

  font-weight: bold;
}
</style>
```
