<template>
  <section class="Users">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
// import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: "Users",
  components: {},
  props: {},
  data: () => ({}),
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
