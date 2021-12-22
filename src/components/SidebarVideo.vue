<template>
  <div>
    <div :key="sidebarVideo" v-for="sidebarVideo in allVideosIds">
      <ShowVideo :showVideoId="sidebarVideo" :sidebar="true" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShowVideo from "./ShowVideo.vue";
//import NewShowVideo from "./NewShowVideo.vue";

export default {
  name: "SidebarVideo",
  components: { ShowVideo },
  computed: {
    ...mapState(["allVideosIds"]),
  },
};
</script>

<style></style>
