<script setup>
import UseItem from "@/hoooks/useItem.js";
import Item from "./items/item.vue";
import Select from "./comom/select.vue";
const {menu}=UseItem();
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
    <Item :item=item :key="item.id" />
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
