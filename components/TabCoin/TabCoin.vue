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
        <span>3.999</span>
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
        <span>4.999</span>
      </p>
    </div>
  </div>
</template>

<script>
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

        span
</style>
