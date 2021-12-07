<template>
  <div>
    <h1>Home page</h1>
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

<style></style>
