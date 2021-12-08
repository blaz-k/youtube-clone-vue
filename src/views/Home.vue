<template>
  <div class="row g-4 row-cols-1 row-cols-sm-4">
    <div v-for="videoId in allVideosIds" :key="videoId">
      <ShowVideo :showVideoId="videoId" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShowVideo from "../components/ShowVideo.vue";
export default {
  name: "Home",
  components: { ShowVideo },
  computed: {
    ...mapState(["allVideosIds"]),
  },
};
</script>

<style scoped>
.a {
  color: red;
}
</style>
