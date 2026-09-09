<script setup>
import SVG from '../assets/SVG.png';
import boutton from './comom/boutton.vue';
import { Search } from 'lucide-vue-next';
import { User } from 'lucide-vue-next';
import { ShoppingBag } from 'lucide-vue-next';
const titre='Order now';
</script>

<template>
    <div class="header">
    <div class="logo">
        <div class="img">
          <img :src="SVG" alt="SVG" >
        </div>
        <div>
            <p>Foodly</p>
            <p>KITCHEN</p>
        </div>
    </div>

    <div class="navbar">
        <div>Home</div>
         <div>Menu</div>
          <div>Categorie</div>
           <div>About</div>
            <div>Blog</div>
             <div>Contact</div>
    </div>

    <div class="action">
        <div> <Search /></div>
        <div><User/></div>
        <div><ShoppingBag /></div>
        <boutton :title=titre />
    </div>
    </div>
</template>

<style scoped>
.header {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding:10px;
    background-color: white;
}

img {
height: 50px;
width: 50px;
}
</style>