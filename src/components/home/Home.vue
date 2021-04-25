<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      window.localStorage.removeItem("token");
      this.$router.push("/login");
      this.$message.success("成功退出");
    },
  },
};
</script>

<style lang="less" scoped>
</style>