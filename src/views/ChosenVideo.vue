<template>
  <div>
    <h1>ChosenVideo</h1>
    <p>video is {{ detailsId }}</p>
  </div>
</template>

<script>
export default {
  props: ["detailsId"],

  name: "ChosenVideo",
};
</script>

<style></style>
