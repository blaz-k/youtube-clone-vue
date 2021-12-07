<template>
  <div v-if="videoData">
    <h2>title: {{ videoData.items[0].snippet.title }}</h2>
    <div></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowVideos",
  props: ["showVideoId"],
  created() {
    this.getVideos();
  },
  data() {
    return {
      url: "https://www.googleapis.com/youtube/v3/videos?id=",
      apiKey: "AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14",
      endUrl: "&part=snippet,contentDetails,statistics,status",
      videoData: null,
    };
  },

  methods: {
    async getVideos() {
      let response = await axios.get(
        `${this.url}${this.showVideoId}&key=${this.apiKey}${this.endUrl}`
      );
      this.videoData = response.data;
      console.log(this.videoData);
    },
  },
};
</script>

<style></style>
