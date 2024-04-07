<template>
  <div>
    <div v-if="props.weather">
      <div>
        <ul>
          <li
            v-for="(_, index) in props.weather.hourly.time"
            :key="props.weather.hourly.time[index]"
          >
            <button class="weatherButton">
              {{ props.weather.hourly.time[index] }} -
              {{
                props.weather.hourly.temperature_2m[index] +
                props.weather.hourly_units.temperature_2m
              }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div v-else-if="props.cities">
      <h3>Select your city</h3>
      <div class="buttonsWrap">
        <div v-for="city in props.cities" :key="city.id">
          <button
            class="cityButton"
            @click="findWeather(city.latitude, city.longitude)"
          >
            {{ city.name + "," + city.country }}
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>Type city's name</h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CityT } from "../types/CityT";
import { WeatherT } from "../types/WeatherT";

const emits = defineEmits<{
  (event: "find", latitude: number, longitude: number): void;
}>();
const props = defineProps({
  cities: { type: Array as () => CityT[] },
  weather: { type: Object as () => WeatherT },
});
function findWeather(latitude: number, longitude: number) {
  emits("find", latitude, longitude);
}
</script>
<style scoped>
.cityButton {
  padding: 5px;
  width: 150px;
  background-color: yellow;
  border: 0;
  border-radius: 10px;
}
.buttonsWrap {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.weatherButton {
  background-color: yellow;
  width: 100%;
  border: 0;
  border-radius: 10px;
}
</style>
