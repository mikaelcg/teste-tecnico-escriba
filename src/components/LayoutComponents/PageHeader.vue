<template>
  <div class="PageHeader">
    <h1>{{ title }}</h1>
    <BackButton />
  </div>
</template>

<script>
const BackButton = () => import("@/components/Buttons/BackButton");
export default {
  name: "PageHeader",

  components: { BackButton },

  props: {},

  data: () => ({}),

  computed: {
    routeName() {
      return this.$route.name;
    },

    title() {
      return this.routeName;
    }
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.PageHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0 20px 0;

  h1 {
    margin: 0;
  }
}
</style>
