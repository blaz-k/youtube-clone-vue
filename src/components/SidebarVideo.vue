<template>
  <div>
    <h3>sidebar video</h3>
    <div :key="sidebarVideo" v-for="sidebarVideo in allVideosIds">
      <ShowVideo :showVideoId="sidebarVideo" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShowVideo from "./ShowVideo.vue";
export default {
  name: "SidebarVideo",
  components: { ShowVideo },
  computed: {
    ...mapState(["allVideosIds"]),
  },
};
</script>

<style></style>
