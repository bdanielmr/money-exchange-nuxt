<template>
  <form class="form-container-label" @submit.prevent="handleButtonChange">
    <TabCoin :key="tab" :tab-show="!tab" />
    <div
      :class="`${rotation && 'rotating'}` + ` rotation-icon`"
      @click="handleRotation"
    ></div>
    <InputCoin
      v-for="input in inputsForm"
      :key="input.current + input.label + input.wallet.exchange"
      class="form-input-coin"
      :label-input="input.disable ? input.wallet.exchange : input.wallet.target"
      :text-current="input.current"
      :text-label="input.label"
      :current-icon="input.icon"
      :disable="input.disable"
      :name="input.current"
    />
    <button type="submit" class="button-form-coin">Iniciar Operacion</button>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import InputCoin from '../InputCoin/InputCoin.vue'
import TabCoin from '../TabCoin/TabCoin.vue'
export default {
  name: 'FormCoin',
  components: { InputCoin, TabCoin },
  data() {
    return {
      inputsForm: [
        {
          current: 'Dolares',
          label: 'Enviar',
          icon: '$',
          disable: false,
          wallet: {
            target: '',
            exchange: '',
          },
        },
        {
          current: 'Soles',
          label: 'Recibir',
          icon: 'S/',
          disable: true,
          wallet: {
            target: '',
            exchange: '',
          },
        },
      ],
      rotation: false,
      tab: false,
    }
  },
  computed: {
    inputCurrent() {
      return this.$store.state.currentConverter?.wallet?.inputCurrent
    },
    ...mapState({
      currentConverter: (state) => {
        return state.store.currentConverter
      },
    }),
  },
  watch: {
    rotation() {
      setTimeout(() => {
        this.rotation = false
      }, 800)
    },
  },

  methods: {
    handleButtonChange(submitEvent) {
      this.inputsForm = this.inputsForm.map((inpu, index) => {
        return {
          ...inpu,
          wallet: this.$store.state.store.currentConverter.wallet,
        }
      })

      this.$store.commit('store/DONE')
    },
    handleRotation() {
      this.$store.commit('store/CHANGE')
      this.inputsForm = this.inputsForm.map((inpu, index) => {
        return {
          ...inpu,
          wallet: this.$store.state.store.currentConverter.wallet,
        }
      })
      const auxInp = []
      for (let i = this.inputsForm?.length - 1; i >= 0; i--) {
        if (this.inputsForm[i].label === 'Enviar') {
          this.inputsForm[i].label = 'Recibir'
        } else {
          this.inputsForm[i].label = 'Enviar'
        }
        if (this.inputsForm[i].disable) {
          this.inputsForm[i].disable = false
        } else {
          this.inputsForm[i].disable = true
        }
        auxInp.push({ ...this.inputsForm[i] })
      }
      this.inputsForm = auxInp
      this.rotation = true
      this.tab = !this.tab
    },
  },
}
</script>
<style lang="sass">
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")
.form-container-label
    position: relative
    background: #fff
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    height: 300px
    width: 500px
    border-radius: 6px
    @media (max-width: 800px)
      width: 100%
      border-radius: 0
.form-input-coin
    margin: 15px 0
.rotating
    width: 20px
    -webkit-animation: rotating 0.4s linear
    -moz-animation: rotating 0.4s linear
    -ms-animation: rotating 0.4s linear
    -o-animation: rotating 0.4s linear
    animation: rotating 0.4s linear

.rotation-icon
    position: absolute
    width: 30px
    height: 30px
    cursor: pointer
    color: white
    background: #6E46E6
    padding: 10px
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    top:44%
.rotation-icon::before
  font-family: fontAwesome
  font-size: 32px
  content: "\f021"

.button-form-coin
    width: 50%
    height: 35px
    border-radius: 6px
    border: none
    background: #6E46E6
    color: #fff
.button-form-coin:hover
     background: #5a3cb5
     cursor: pointer
@keyframes rotating

    from

        transform: rotate(0deg)
        -o-transform: rotate(0deg)
        -ms-transform: rotate(0deg)
        -moz-transform: rotate(0deg)
        -webkit-transform: rotate(0deg)

    to

        transform: rotate(360deg)
        -o-transform: rotate(360deg)
        -ms-transform: rotate(360deg)
        -moz-transform: rotate(360deg)
        -webkit-transform: rotate(360deg)


@-webkit-keyframes rotating

    from

        transform: rotate(0deg)
        -webkit-transform: rotate(0deg)

    to

        transform: rotate(360deg)
        -webkit-transform: rotate(360deg)
</style>
