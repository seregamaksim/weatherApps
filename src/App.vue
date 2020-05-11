<template>
  <div id="app" class="page">
    <h1 class="page__title">Weather</h1>
    <SearchForm class="page__search-form"></SearchForm>
    <WeatherCard></WeatherCard>
  </div>
</template>

<script>

import WeatherCard from './components/WeatherCard';
import SearchForm from './components/SearchForm';
export default {
  name: "App",
  components: {
    WeatherCard, SearchForm
  }
};
</script>

<style lang="scss">
  @font-face {
    font-family: 'PlayfairDisplay';
    src: url('~@/assets/fonts/playfair/PlayfairDisplay-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'PlayfairDisplay';
    src: url('~@/assets/fonts/playfair/PlayfairDisplay-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  body {
    font-family: 'PlayfairDisplay';
  }
  h1,h2,h3,body,p,ul,li {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  .page {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }
  .page__title {
    color: #FF7F00;
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 25px;
  }
  .page__search-form {
    margin-bottom: 15px;
  }
</style>
