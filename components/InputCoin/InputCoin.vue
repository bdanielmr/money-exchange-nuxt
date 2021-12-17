<template>
  <label class="input-form-panel">
    <div class="container-form">
      <span>{{ currentTextInput }}</span>
    </div>
    <div class="input-container-form">
      <p>{{ labelTextInput }}</p>
      <div>
        <span>{{ iconCurrentInput }}</span>
        <input
          v-model="inputLabel"
          :disabled="disable"
          type="text"
          :name="name"
          @keyup="addConverter"
        />
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'InputCoin',
  props: {
    textCurrent: {
      type: String,
      default: '',
    },
    textLabel: {
      type: String,
      default: '',
    },
    currentIcon: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    disable: {
      type: Boolean,
      default: false,
    },
    labelInput: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentText: this.textCurrent,
      labelText: this.textLabel,
      iconCurrent: this.currentIcon,
      inputLabel: this.labelInput?.toString(),
    }
  },
  computed: {
    currentTextInput() {
      return this.currentText
    },
    labelTextInput() {
      return this.labelText
    },
    iconCurrentInput() {
      return this.iconCurrent
    },
    currentConverter() {
      return this.$store.state.currentConverter
    },
  },
  methods: {
    addConverter(e) {
      this.$store.commit('store/CONVERTER', {
        target: e.target.value,
        inputCurrent: this.name,
      })
    },
  },
}
</script>

<style lang="sass" scoped>

.input-form-panel
    width: 300px
    height: 35px
    border-radius: 6px
    border: 1px solid #6E46E6
    display: flex
    justify-content: space-between
    align-items: center
    padding: 10px 0px 10px 0px
    background: #F3F3F6

    input
        width: 30%
        height: 35px
        padding: 0px 0
        border: none
.container-form
    display: flex
    align-items: center
    justify-content: center
    width: 40%
    span
      height: 100%
      color: #6E46E6

.input-container-form
    width: 100%
    text-align: right
    background: #fff
    border-top-right-radius: 6px
    p
      padding: 0px 5px
      margin: 4px 10% 0px 0px
      font-size: 14px
      color:#717191
</style>
