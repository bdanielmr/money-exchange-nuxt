<template>
  <label class="input-form-panel">
    <span>{{ currentTextInput }}</span>
    <div class="input-container-form">
      <p>{{ labelTextInput }}</p>
      <input />
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
  },
  data() {
    return {
      currentText: this.textCurrent,
      labelText: this.textLabel,
    }
  },

  computed: {
    currentTextInput() {
      return this.currentText
    },
    labelTextInput() {
      return this.labelText
    },
  },
}
</script>

<style lang="sass" scoped>

.input-form-panel
    width: 250px
    height: 50px
    border-radius: 6px
    border: 1px solid purple
    display: flex
    justify-content: space-between
    align-items: center
    padding: 5px
.input-container-form
    text-align: right
    p
      margin: 0
</style>
