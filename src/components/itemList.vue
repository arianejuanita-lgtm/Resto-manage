<script setup>
import menuItems from "@/data/menuItem";
import { ref } from "vue";
const menu = ref(menuItems);
import Item from "./items/item.vue";
import Select from "./comom/select.vue";
</script>

<template>
    <div class="div">
        <div>
            <label for="title">{{ menu.length }} Menu Items</label>
        </div>

        <div>
        <Select/>
        </div>
    </div>
    <div class="menu">
  <div v-for="item in menu" >
    <Item :item=item />
  </div>
  </div>
</template>

<style scoped>
.menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:10px
}

label{
    font-weight: bold;
}

.div{
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    width: 100%;
}
</style>
