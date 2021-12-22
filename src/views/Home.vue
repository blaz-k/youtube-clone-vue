<template>
  <div class="row g-4 row-cols-1 row-cols-sm-4">
    <div v-for="videoId in allVideosIds" :key="videoId">
      <ShowVideo
        :showVideoId="videoId"
        class="animate__animated animate__fadeInTopLeft"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import ShowVideo from "../components/ShowVideo.vue";

export default {
  name: "Home",
  components: { ShowVideo },
  computed: {
    ...mapState(["allVideosIds", "videoData"]),
  },
};
</script>

<style>
.a {
  color: rgb(60, 255, 0);
}
</style>
