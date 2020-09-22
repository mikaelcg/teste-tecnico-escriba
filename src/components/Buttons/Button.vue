<template>
  <v-btn
    :class="customClass"
    :color="color"
    :block="block"
    :height="height"
    :loading="loading"
    :large="large"
    :outlined="outlined"
    :width="width"
    :max-width="maxWidth"
    :disabled="disabled"
    @click="onClick"
    depressed
  >
    <v-icon left :color="iconColor" v-if="icon">{{ icon }}</v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
// import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: "Button",
  components: {},
  props: {
    color: {
      required: false,
      default: "accent"
    },
    customClass: {
      required: false
    },
    disabled: {
      required: false
    },
    maxWidth: {
      required: false
    },
    height: {
      required: false,
      default: 36
    },
    outlined: {
      required: false
    },
    large: {
      required: false
    },
    text: {
      required: false,
      default: null
    },
    loading: {
      required: false,
      default: false
    },
    block: {
      required: false,
      default: false
    },
    width: {
      required: false
    },
    icon: {
      required: false
    },
    iconColor: {
      required: false
    }
  },
  data: () => ({}),
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onClick() {
      this.$emit("click");
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped></style>
