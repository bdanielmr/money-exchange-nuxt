<template>
  <div>
    <SplashCoin />
  </div>
</template>

<script>
import SplashCoin from '~/components/SplashCoin/SplashCoin.vue'
export default {
  name: 'IndexPage',
  components: { SplashCoin },
}
</script>
<style lang="sass">
html, body
  margin: 0
  padding: 0
  background:  linear-gradient(180deg, #4A28AF 0%, #6E46E6 100%)
</style>
