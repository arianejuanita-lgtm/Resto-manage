<script setup>
import { Star } from "lucide-vue-next";
import Boutton from "../comom/boutton.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const {
  name,
  description,
  price,
  rating,
  reviews,
  image,
} = props.item;
</script>

<template>
  <div class="food-card">
    <div class="food-image-wrapper">
      <img :src="image" :alt="name" />
    </div>

    <div class="food-info">
      <h3 class="food-name">{{ name }}</h3>
      <p class="food-description">{{ description }}</p>

      <div class="food-meta">
        <div class="rating">
          <Star class="star-icon" size="16" fill="#f59e0b" color="#f59e0b" />
          <span>{{ rating }} <small>({{ reviews }})</small></span>
        </div>
      </div>

      <div class="food-footer">
        <span class="price">${{ price }}</span>
        <Boutton title="Add" :haut="20" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.food-card {
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  padding: 12px;
}

.food-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.food-image-wrapper {
  width: 100%;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.food-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.food-info {
  padding: 12px 4px 4px 4px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.food-name {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 6px 0;
}

.food-description {
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.food-meta {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #374151;
}

.rating small {
  color: #9ca3af;
  font-weight: normal;
}

.food-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #f3f4f6;
}

.price {
  font-size: 1.15rem;
  font-weight: 700;
  color: #059669;
}
</style>