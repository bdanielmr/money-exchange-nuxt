<template>
  <FormCoin />
</template>

<script>
import FormCoin from '~/components/FormCoin/FormCoin.vue'
export default {
  components: { FormCoin },
  name: 'HomePage',
}
</script>
<style lang="sass">
html, body
  margin: 0
  padding: 0
  background:  linear-gradient(180deg, #4A28AF 0%, #6E46E6 100%)
</style>
