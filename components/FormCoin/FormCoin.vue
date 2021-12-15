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
      <InputCoin
        v-for="(input, index) in inputsForm"
        :key="index"
        :text-current="input.current"
        :text-label="input.label"
      />
    </div>
  </div>
</template>

<script>
import InputCoin from '../InputCoin/InputCoin.vue'
export default {
  name: 'FormCoin',
  components: { InputCoin },
  data() {
    return {
      inputsForm: [
        {
          current: 'Dolares',
          label: 'Enviar',
        },
        {
          current: 'Soles',
          label: 'Recibir',
        },
      ],
    }
  },
}
</script>
<style lang="sass">
.form-container
  width: 100%
  position: relative
  height: 100vh
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: center
  justify-content: center
  @media (max-width: 800px)
    height: 100%
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
  width: 250px
  margin: 50px auto


.padded-title
  font-size: 2rem
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
