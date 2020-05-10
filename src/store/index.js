import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: []
  },
  mutations: {
    setWeather(state, weather) {
      state.weather.push(weather)
    }
  },
  actions: {
    async getDataWeather(context, city = 'Omsk') {
      let resp = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=9df07c4f795a4d1ba40b061b7f9d5133`);
      let data = await resp.json();
      context.commit('setWeather', data.data[0]);
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
