<script setup>
import { Star, Clock, Plus } from 'lucide-vue-next';
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
  <article class="item-card" :class="{ unavailable: !is_available }">
    
    <div class="image-wrapper">
      <img 
        :src="image" 
        :alt="name"
        loading="lazy"
      />
      
      <span class="badge-category">{{ category }}</span>
      
      <span v-if="!is_available" class="badge-unavailable">Épuisé</span>
      
      <div v-if="dietary && dietary.length" class="badges-dietary">
        <span 
          v-for="diet in dietary" 
          :key="diet" 
          class="badge-diet"
          :class="diet.toLowerCase().replace(' ', '-')"
        >
          {{ diet }}
        </span>
      </div>
    </div>

    <div class="content">
      
      <h3 class="item-name">{{ name }}</h3>
      
      <p class="item-description">{{ description }}</p>
      
      <div class="item-meta">
        <div class="rating">
          <Star :size="16" fill="#F5BE18" color="#F5BE18" />
          <span class="rating-value">{{ rating }}</span>
          <span class="rating-reviews">({{ reviews }})</span>
        </div>
        
        <div class="delivery">
          <Clock :size="14" color="#6b7280" />
          <span>{{ delivery_time }}</span>
        </div>
      </div>
      
      <div v-if="portion_sizes && portion_sizes.length" class="portion-sizes">
        <span 
          v-for="size in portion_sizes" 
          :key="size" 
          class="portion-tag"
        >
          {{ size }}
        </span>
      </div>

      <div class="item-footer">
        <div class="price">
          <span class="price-currency">$</span>
          <span class="price-value">{{ price.toFixed(2) }}</span>
        </div>
        
        <Boutton 
          :title="is_available ? '+' : 'Indisponible'"
          :haut="36"/>
         
      </div>
    </div>
  </article>
</template>

<style scoped>
.item-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06),
              0 4px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 1px solid #f0f0f0;
}

.item-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08),
              0 12px 28px rgba(0, 0, 0, 0.1);
}

.item-card.unavailable {
  opacity: 0.65;
}

.item-card.unavailable:hover {
  transform: none;
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #f5f5f5;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.item-card:hover .image-wrapper img {
  transform: scale(1.05);
}

.badge-category {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  color: #374151;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-unavailable {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #ef4444;
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badges-dietary {
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.badge-diet {
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  color: #374151;
  backdrop-filter: blur(8px);
}

.badge-diet.vegetarian { background: #dcfce7; color: #166534; }
.badge-diet.vegan      { background: #d1fae5; color: #065f46; }
.badge-diet.spicy      { background: #fee2e2; color: #991b1b; }
.badge-diet.gluten-free { background: #fef3c7; color: #92400e; }

.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  flex: 1;
}

.item-name {
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item-description {
  font-size: 13px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 39px;
}

.item-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 13px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.rating-value {
  font-weight: 700;
  color: #111827;
}

.rating-reviews {
  color: #9ca3af;
  font-size: 12px;
}

.delivery {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #6b7280;
  font-size: 12px;
}

.portion-sizes {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.portion-tag {
  font-size: 10px;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 6px;
  background: #f3f4f6;
  color: #4b5563;
  border: 1px solid #e5e7eb;
}

.item-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.price-currency {
  font-size: 14px;
  font-weight: 600;
  color: #F5BE18;
}

.price-value {
  font-size: 22px;
  font-weight: 800;
  color: #F5BE18;
  letter-spacing: -0.5px;
}
</style>