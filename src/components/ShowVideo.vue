<template>
  <div v-if="videoData" id="showVideo">
    <router-link
      :to="{ name: 'ChosenVideo', params: { detailsId: this.showVideoId } }"
    >
      <div class="card" style="">
        <div class="card h-100">
          <img
            :src="videoData.items[0].snippet.thumbnails.maxres.url"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ videoData.items[0].snippet.title }}</h5>
            <p class="card-text">
              <span class="cardName"> <div>imepriimek</div> </span>
              <span>{{ correctData }}</span>
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "ShowVideos",
  props: ["showVideoId"],
  computed: {
    correctData() {
      let date = new Date(this.videoData.items[0].snippet.publishedAt);
      return moment(date).format("DD-MM-YYYY");
    },
  },
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

<style>
#showVideo .cardName {
  color: red;
}

#showVideo .card-title {
  color: green;
}
</style>
