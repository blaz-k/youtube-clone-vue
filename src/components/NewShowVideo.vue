<template>
  <div v-if="newVideoData" class="kmetic">
    <router-link
      :to="{ name: 'ChosenVideo', params: { detailsId: this.showVideoId } }"
    >
      <!---
      <div class="my-card">
        <div class="card ble" style="">
          <div class="card h-100">
            <img
              :src="newVideoData.items[0].snippet.thumbnails.maxres.url"
              class="card-img-top my-img"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                {{ newVideoData.items[0].snippet.title }}
              </h5>
              <p class="card-text">
                <span class="cardName">
                  <p>{{ newVideoData.items[0].statistics.viewCount }} Views</p>
                  <p></p
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>--->
      <div id="poiskus">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="newVideoData.items[0].snippet.thumbnails.maxres.url"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  {{ newVideoData.items[0].snippet.title }}
                </h5>
                <p class="card-text"></p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewShowVideo",
  props: ["showVideoId"],

  created() {
    this.newGetVideos();
  },
  data() {
    return {
      newUrl: "https://www.googleapis.com/youtube/v3/videos?id=",
      newApiKey: "AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14",
      newEndUrl: "&part=snippet,contentDetails,statistics,status",
      newVideoData: null,
    };
  },

  methods: {
    async newGetVideos() {
      let response = await axios.get(
        `${this.newUrl}${this.showVideoId}&key=${this.newApiKey}${this.newEndUrl}`
      );
      this.newVideoData = response.data;
      console.log("newvideos");
      console.log(this.newVideoData);
    },
  },
};
</script>

<style>
#poiskus .card-title {
  font-size: 25px;
  color: red;
}

#poiskus {
  font-size: 35px;
  line-height: 15px;
  color: blueviolet;
}
</style>
