<template>
  <div id="app">
    <div class="weather-card" v-for="card in allWeather" :key="card.lat">
      <h1>{{ card.city_name }}</h1>
      <h2>{{ card.app_temp }} °</h2>
      <img :src="setIcons(card.weather.icon)" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "App",
  // data() {
  //   return {
  //     weather: [],
  //     title: '',
  //     temp: '',
  //     iconsCode: '',
  //   }
  // },
  methods: {
    ...mapActions(["getDataWeather"]),
    setIcons(code) {
      return `https://www.weatherbit.io/static/img/icons/${code}.png`
    }
  },
  computed: mapGetters(['allWeather', 'allIcons']),
  async mounted() {
    this.getDataWeather('Omsk');
  }
  
};
</script>

<style lang="scss">

</style>
