<template>
  <v-text-field
    :id="id"
    :name="name"
    :autofocus="autofocus"
    :class="customClass"
    :color="color"
    :readonly="readonly"
    :disabled="disabled"
    :clearable="clearable"
    :placeholder="placeholder"
    :label="label"
    :prepend-inner-icon="preppendInnerIcon"
    :append-icon="appendIcon"
    :type="type"
    :rules="rules"
    v-model="inputValue"
    v-bind="attrs"
    v-mask="mask"
    outlined
    background-color="#fff"
    @click:append="onClickAppend"
    @click:clear="onClickClear"
    @keydown.enter="onKeyDownEnter"
  />
</template>

<script>
export default {
  name: "TextField",

  props: {
    id: {
      required: false
    },
    autofocus: {
      required: false
    },
    appendIcon: {
      required: false
    },
    clearable: {
      required: false
    },
    mask: {
      required: false
    },
    rules: {
      required: false
    },
    value: {
      required: false
    },
    customClass: {
      required: false,
      default: null
    },
    hideDetails: {
      required: false,
      default: true
    },
    color: {
      required: false,
      default: "accent"
    },
    attrs: {
      required: false,
      default: null
    },
    disabled: {
      required: false
    },
    readonly: {
      required: false,
      default: false
    },
    label: {
      required: false,
      default: ""
    },
    placeholder: {
      required: false,
      default: ""
    },
    name: {
      required: false,
      default: ""
    },
    preppendInnerIcon: {
      required: false,
      default: ""
    },
    type: {
      required: false,
      default: "text"
    }
  },

  data: () => ({
    inputValue: null
  }),

  created() {
    if (!this.inputValue && this.value) {
      this.inputValue = this.value;
    }
  },

  methods: {
    onKeyDownEnter() {
      this.$emit("keydown-enter");
    },

    onClickAppend() {
      this.$emit("click-append");
    },

    onClickClear() {
      this.$emit("click-clear");
    }
  },

  watch: {
    inputValue() {
      this.$emit("input", this.inputValue);
    },

    value() {
      if (this.value) {
        this.inputValue = this.value;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.TextField {
}
</style>
