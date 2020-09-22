<template>
  <Button
    text="Voltar"
    color="normal"
    outlined
    v-if="$route.path !== '/'"
    @click="backToPreviousPage"
  />
</template>

<script>
const Button = () => import("@/components/Buttons/Button");
export default {
  name: "BackButton",
  components: { Button },
  props: {},
  data: () => ({}),
  computed: {},
  created() {},
  mounted() {},
  methods: {
    backToPreviousPage() {
      this.$router.go(-1);
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped></style>
