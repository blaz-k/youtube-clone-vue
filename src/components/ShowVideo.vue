<template>
  <div v-if="videoData">
    <router-link
      :to="{ name: 'ChosenVideo', params: { detailsId: this.showVideoId } }"
    >
      <div v-if="this.sidebar" id="sidebar">
        <div class="row g-0">
          <div class="col-lg-6">
            <img
              :src="videoData.items[0].snippet.thumbnails.maxres.url"
              class="img-fluid rounded-start"
              alt="..."
            />
            <p class="card-text">
              <span class="cardName">
                <p>{{ videoData.items[0].statistics.viewCount }} Views</p>
                <p>{{ correctData }}</p></span
              >
            </p>
          </div>
          <div class="col-lg-6 bottom">
            <div class="card-body">
              <div class="card-title">
                {{ videoData.items[0].snippet.title.substring(0, 45) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else id="showVideo">
        <div class="my-card">
          <div class="card" style="">
            <div class="card h-100">
              <img
                :src="videoData.items[0].snippet.thumbnails.maxres.url"
                class="card-img-top my-img"
                alt="..."
              />

              <div class="card-body">
                <h5 class="card-title">
                  {{ videoData.items[0].snippet.title }}
                </h5>
                <p class="card-text">
                  <span class="cardName">
                    <p>{{ videoData.items[0].statistics.viewCount }} Views</p>
                    <p>{{ correctData }}</p></span
                  >
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
import moment from "moment";

export default {
  name: "ShowVideos",
  props: ["showVideoId", "sidebar"],
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
.row {
  border: none;
}

.main-change {
  background-color: black;
}

.myMenu {
  background-color: #4e4e4e;
}

.nav-link {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
}
#showVideo {
  margin: 0.2rem;
}

#showVideo .card-body {
  background-color: black;
}
#showVideo .cardName {
  display: flex;
  justify-content: space-between;
  color: #aaaaaa;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
}

#showVideo .card-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
}

.my-card {
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(247, 3, 3, 0.13);
  transition: 0.2s;
  cursor: context-menu;
}

.my-card:hover {
  transform: translateY(-0.5%);
  box-shadow: 0 4rem 8rem rgba(8, 238, 27, 0.877);
}
</style>
