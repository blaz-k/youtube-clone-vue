<template>
  <div class="row g-4 row-cols-sm-1">
    >
    <div class="row">
      <div class="col">
        <div class="card mb-3">
          <iframe
            width="100%"
            height=""
            :src="this.embedUrl + this.detailsId"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div class="card-body">
            <h5 class="card-title">{{ videoData.items[0].snippet.title }}</h5>
            <p class="card-text">
              {{ videoData.items[0].snippet.description.substring(0, 200) }}
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["detailsId"],

  name: "ChosenVideo",
  created() {
    this.videoDetail();
  },
  data() {
    return {
      url: "https://www.googleapis.com/youtube/v3/videos?id=",
      apiKey: "AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14",
      endUrl: "&part=snippet,contentDetails,statistics,status",
      videoData: null,
      embedUrl: "https://www.youtube.com/embed/",
    };
  },

  methods: {
    async videoDetail() {
      let res = await axios.get(
        `${this.url}${this.detailsId}&key=${this.apiKey}${this.endUrl}`
      );
      this.videoData = res.data;
      console.log(this.videoData);
    },
  },
};
</script>

<style></style>
