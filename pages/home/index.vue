<template>
  <div class="form-container">
    <div class="form-right-panel">
      <div class="wrapper">
        <h1 class="padded-title">
          <span>El mejor </span><span>tipo de cambio </span>
        </h1>
        <h1 class="padded-sub-title">
          <span>para cambiar dolares y soles online en Peru </span>
        </h1>
      </div>
    </div>
    <div class="form-left-panel">
      <FormCoin />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormCoin from '~/components/FormCoin/FormCoin.vue'
export default {
  name: 'HomePage',
  components: { FormCoin },
  fetchOnServer: false,
  async fetch({ store, error }) {
    try {
      await store.dispatch('store/fetchCurrents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch rates',
      })
    }
  },
  computed: mapState({
    currents: (state) => {
      return state.store.currents
    },
  }),
  created() {
    setInterval(this.reloadFetch, 60000)
  },
  methods: {
    async reloadFetch() {
      try {
        await this.$store.dispatch('store/fetchCurrents')
      } catch (e) {
        this.$store.error({
          statusCode: 503,
          message: 'Unable to fetch rates',
        })
      }
    },
  },
}
</script>
<style lang="sass">
html, body
  margin: 0
  padding: 0
  background:  linear-gradient(180deg, #4A28AF 0%, #6E46E6 100%)

.form-container
  width: 100%
  position: relative
  height: 100vh
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: center
  justify-content: center
  @media (max-width: 800px)
    width: 100%
    height: 50vh
    grid-template-columns: 1fr

.form-right-panel
  display: flex
  align-items: center
  flex-direction: column
    justify-content: center
  @media (max-width: 800px)
.form-left-panel
  display: flex

  align-items: center
  justify-content: center
  flex-direction: column

  @media (max-width: 800px)
.wrapper
  width: 320px
  margin: 50px auto


.padded-title
  font-size: 3rem
  line-height: 1.1
  margin: 0

.padded-title span
  display: inline-block
  margin:0
  color: #fff

  padding: 8px 5px 0
  word-spacing: 0px
  line-height: 0.4
.padded-sub-title
  width: 90%
  font-size: 1.2rem
  line-height: 1
  margin: 0
.padded-sub-title span
  display: inline-block
  color: #fff

  padding: 8px 5px 0
  word-spacing: 0px
  line-height: 1
</style>
