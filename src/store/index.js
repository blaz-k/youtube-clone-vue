import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    allVideosIds: [
      "uXjLfSFkqTs",
      "6oo323AQ0JI",
      "kft2AkvKhWU",
      "TNzgUCU5TVs",
      "HHs1ftjayUw",
      "pbImvaiXGFU",
      "LrNkecdU6mI",
      "VXKBaVGWSk0",
      "MHpHPj-DosY",
      "NM71cqoNt3w",
      "DPBXxrhJIv4",
      "9wKivv-vvhU",
    ],

    url: "https://www.googleapis.com/youtube/v3/videos?id=",
    apiKey: "AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14",
    endUrl: "&part=snippet,contentDetails,statistics,status",
    videoData: null,
  },

  mutations: {
    setVideoData(state, videoData) {
      state.videoData = videoData;
    },
  },
  actions: {
    async fetchVideoData({ commit, state }, vId) {
      // context = {state, commit}
      console.log(state.url);
      console.log(vId);

      let res = await axios.get(
        `${state.url}${vId}&key=${state.apiKey}${state.endUrl}`
      );
      console.log(res);
      commit("setVideoData", res);
    },
  },
  getters: {
    getVideoData(state) {
      return state.videoData;
    },
  },
  modules: {},
});
