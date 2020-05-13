<template>
  <ul class="weather-card-list">
    <li class="weather-card" v-for="card in allWeather" :key="card.lat">
      <h2 class="weather-card__city">{{ card.city_name }}</h2>
      <p class="weather-card__date">{{ getWeekDay(new Date()) }}, {{ getMonth(new Date()) + ' ' + new Date().getDate() }}</p>
      <p class="weather-card__temp">{{ card.temp }}°</p>
      <p class="weather-card__description">{{ card.weather.description }}</p>
      <img class="weather-card__icon" :src="setIcons(card.weather.icon)" />
    </li>
  </ul>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['getDataWeather', 'getGeolocation']),
    setIcons(code) {
      return `https://www.weatherbit.io/static/img/icons/${code}.png`
    },
    getWeekDay(date) {
      let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      return days[date.getDay()];
    },
    getMonth(date) {
      let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

      return month[date.getMonth()];
    }
  },
  computed: mapGetters(['allWeather']),
  mounted() {
    this.getGeolocation();
    this.getDataWeather();
  }
};
</script>

<style lang="scss" scoped>
  .weather-card-list,
  .weather-card {
    display: flex;
  }
  .weather-card {
    flex-direction: column;
    align-items: center;
    line-height: 1.2;
    min-width: 200px;
    border-radius: 10px;
    padding: 15px;
    background: rgb(0,168,255);
    background: linear-gradient(135deg, rgba(0,168,255,1) 0%, rgba(153,235,255,1) 100%);
    margin-right: 10px;
  }
  .weather-card:last-child {
    margin-right: 0;
  }
  .weather-card__city {
    color: #015367;
    font-size: 32px;
    // margin-bottom: 10px;
    text-transform: uppercase;
    text-align: center;
  }
  .weather-card__date {
    font-size: 22px;
    color: #174e5a;
    margin-bottom: 10px;
  }
  .weather-card__temp {
    color: #07499b;
    font-size: 50px;
    margin-bottom: 10px;
  }
  .weather-card__description {
    font-size: 18px;
    color: #23505a;
  }
</style>