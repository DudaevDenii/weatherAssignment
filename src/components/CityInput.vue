<template>
  <div class="cityInputWrap">
    <input
      type="text"
      class="cityInput"
      placeholder="The name of your city"
      v-model="cityName"
    />
    <button class="cityFind" @click="submitCity">Find</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const cityName = ref("");
const emit = defineEmits<{
  (event: "search", cityName: string): void;
}>();
function submitCity() {
  emit("search", cityName.value);
  cityName.value = "";
}
</script>

<style scoped>
.cityInput {
  padding: 10px;
  border-radius: 20px;
  border: 0;
}
.cityInputWrap {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
}
.cityFind {
  background-color: yellow;
  border: 1px solid #1a1a1a;
  border-radius: 50%;
  color: #1a1a1a;
  transition: 0.3s;
}
.cityFind:hover {
  background-color: #1a1a1a;
  border: 1px solid yellow;
  color: yellow;
}
</style>
