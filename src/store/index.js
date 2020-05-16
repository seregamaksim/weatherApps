import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: [],
    geoposition: ''
  },
  mutations: {
    setWeather(state, weather) {
      state.weather.push(weather)
    },
    setLatLon(state, obj) {
      state.geoposition = obj;
      console.log('state.geoposition', state.geoposition);
      
    }
  },
  actions: {
    async getDataWeather(context) {
      let position = await this.dispatch('getGeolocation');
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let resp = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=9df07c4f795a4d1ba40b061b7f9d5133`);
      let data = await resp.json();
      context.commit('setWeather', data.data[0]);
    },
    async getDataWeatherSearch(context, city) {
      let resp = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=9df07c4f795a4d1ba40b061b7f9d5133`);
      let data = await resp.json();
      context.commit('setWeather', data.data[0]);
    },
    getGeolocation() {
      return new Promise((res, rej) => {
        let options = {
          enableHighAccuracy: true
        }
        navigator.geolocation.getCurrentPosition(res, rej, options);
      })
    }
  },
  getters: {
    allWeather(state) {
      return state.weather;
    }
  },
  modules: {

  }
});
