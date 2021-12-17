<template>
  <div class="tab-coin-container">
    <div>
      <p
        :style="{
          borderBottom: showTab ? '2px solid #2F00FF' : '',
          color: showTab ? '#2F00FF' : '',
        }"
      >
        Dolar compra
        <span>{{ currents.purchase_price }}</span>
      </p>
    </div>
    <div>
      <p
        :style="{
          borderBottom: !showTab ? '2px solid #2F00FF' : '',
          color: !showTab ? '#2F00FF' : '',
        }"
      >
        Dolar venta
        <span>{{ currents.sale_price }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TabCoin',
  props: {
    tabShow: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      showTab: this.tabShow,
    }
  },
  computed: mapState({
    currents: (state) => {
      return state.store.currents
    },
  }),
}
</script>
<style lang="sass" scoped>
.tab-coin-container
    display: flex
    width: 100%
    justify-content: space-evenly
    border-bottom: 1px solid #E7E7ED
    padding-bottom:10px
    div
        text-align: center
        p
            position: relative
            top: 11px
            display: flex
            flex-direction: column
            margin: 0
            padding-bottom: 10px
            color: #717191
            span
                font-weight: 800
</style>
