<template>
  <div class="splash-coin">
    <a>
      {{ `Money ` }}<span>{{ `Exchange` }}</span></a
    >
    <nuxt-link to="home"><button>Start</button></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SplashCoin',
}
</script>

<style lang="sass">
.splash-coin
    width: 100%
    height: 100vh
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    font-size: 3em
    font-weight: 800
    a
        color: white
    button
        width: 250px
        height: 50px
        background: white
        margin: 10px
        cursor: pointer
        font-size: 16px
        font-weight: 600
</style>
