<template>
  <div class="wrapper">
    <CityInput @search="requestLocations" />
    <CitiesList :cities="locations" @find="requestWeather" :weather="weather" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CityInput from "./components/CityInput.vue";
import CitiesList from "./components/CitiesList.vue";
import { CityT } from "./types/CityT";
import { WeatherT } from "./types/WeatherT";
const locations = ref<CityT[]>();
const weather = ref<WeatherT>();

async function requestLocations(cityName: string) {
  if (cityName === "") {
    alert("Fill out the input");
    return;
  }
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`
    );
    const data = await response.json();
    weather.value = undefined;
    locations.value = data.results;
  } catch (error) {
    console.error(error);
    alert("City name is incorrect");
  }
}
async function requestWeather(latitude: number, longitude: number) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&start_date=2024-04-02&end_date=2024-04-03`
    );
    const data = await response.json();
    weather.value = data;
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
