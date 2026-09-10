<script setup>
import { Star } from 'lucide-vue-next';
import Boutton from '../comom/boutton.vue';
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const { 
  id,
  name,
  description,
  price,
  rating,
  reviews,
  delivery_time,
  category,
  image,
  is_available,
  dietary,
  portion_sizes
} = props.item
</script>

<template>
    <div>
        <div>
            <img :src="image" alt="" srcset="">
        </div>

        <div>
            <p>{{ name }}</p>
        </div>

        <div>
            <p>{{ description }}</p>
        </div>

        <div>
            <div><Star /></div>
            <div>
                <div><p>{{ rating }}({{ reviews }})</p></div>
            </div>    
        </div>

        <div>
            <div>
                <p>${{ price }}</p>
            </div>

            <div>
<Boutton :title="add" :haut="10"/>
            </div>
        </div>
    </div>
</template>

<style scoped></style>