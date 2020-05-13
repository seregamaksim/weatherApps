import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: [],
    geoposition: {
      lat: '',
      lon: ''
    }
  },
  mutations: {
    setWeather(state, weather) {
      state.weather.push(weather)
    },
    setLatLon(state, obj) {
      console.log(obj);
      console.log(obj.position);
      
      state.geoposition.lat = obj.position.lat;
      state.geoposition.lon = obj.position.lon;
      console.log('geoposition', state.geoposition);
    }
  },
  actions: {
    async getDataWeather(context, lat = 61.52401, lon = 105.318756) {
      let resp = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=9df07c4f795a4d1ba40b061b7f9d5133`);
      let data = await resp.json();
      context.commit('setWeather', data.data[0]);
    },
    async getDataWeatherSearch(context, city) {
      let resp = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=9df07c4f795a4d1ba40b061b7f9d5133`);
      let data = await resp.json();
      context.commit('setWeather', data.data[0]);
    },
    async getGeolocation(context) {
      let coordinates;
      let position = {};
      let options = {
        enableHighAccuracy: true
      }
      function error(err) {
        console.log(err);
      }
      function success(pos) {
        coordinates = pos.coords;
        position.lat = coordinates.latitude;
        position.lon = coordinates.longitude;
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
      console.log('position', position);
      context.commit({
        type: 'setLatLon',
        position
      });
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
