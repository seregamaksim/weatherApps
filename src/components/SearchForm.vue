<template>
  <form class="search-form" @submit.prevent="getDataWeatherSearch(inpValue)">
    <input class="search-form__input" placeholder="Name the city" type="text" v-model="inpValue">
    <button class="search-form__btn">Search</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      inpValue: ''
    }
  },
  methods: {
    ...mapActions(["getDataWeatherSearch"])
  },
}
</script>

<style lang="scss" scoped>
  .search-form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  .search-form__input {
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 15px;
    display: inline-block;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  .search-form__btn {
    width: 150px;
    border: 0;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 5px;
    cursor: pointer;
    align-self: center;
  }
</style>