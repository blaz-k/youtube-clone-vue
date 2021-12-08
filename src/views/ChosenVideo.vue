<template>
  <div id="chosenVideo">
    <div class="row g-4 row-cols-sm-1 mt-4" v-if="videoData">
      <div class="row">
        <div class="col-md-8">
          <div class="card-img mb-3">
            <iframe
              width="100%"
              height="450vh"
              :src="this.embedUrl + this.detailsId"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <div class="card-body">
              <h5 class="card-title">{{ videoData.items[0].snippet.title }}</h5>
              <p class="card-text">
                {{ videoData.items[0].snippet.description.substring(0, 150) }}
              </p>
              <div class="card-text details">
                <p>{{ videoData.items[0].statistics.viewCount }} Views</p>

                <small class="text-muted"
                  ><i class="far fa-thumbs-up"
                    >{{ videoData.items[0].statistics.likeCount }}
                  </i>

                  <i class="fas fa-thumbs-down">
                    {{ videoData.items[0].statistics.dislikeCount }}
                  </i>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <SidebarVideo class="animate__animated animate__lightSpeedInLeft" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import SidebarVideo from "../components/SidebarVideo.vue";

export default {
  props: ["detailsId"],
  name: "ChosenVideo",
  components: { SidebarVideo },
  computed: {
    ...mapState(["allVideosIds"]),
  },

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

<style>
.details {
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
}
.fas {
  margin-left: 1.5vh;
}

#chosenVideo .card-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 0.01em;
  color: #ffffff;
}

#chosenVideo .card-text {
  font-family: Roboto;
  font-size: 15px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 0.02em;
  color: #ffffff;
}
</style>
