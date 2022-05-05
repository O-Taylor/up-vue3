<template>
  <div class="VideoList">
    <div class="container">
      <div class="row introText">
        <div class="col-12">
          <img src="/images/UP_Text_Logo.png" alt="" />
        </div>
        <div class="col-12">
          <p>
            Welcome to your video memories. Here you are able to view all of the video clips from your amazing
            time, as well as download any of the videos that you want to.
          </p>
        </div>
      </div>
      <div class="row videos">
        <div class="col-md-6 col-lg-4" v-for="(item, index) in data" :key="item.id">
          <div class="singleVideo" @click="openVideo(index)">
            <i class="fas fa-play"></i>
            <img :src="item.thumbnail" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <videoPopup v-if="popup" />
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import videoPopup from "../popup/videoPopup.vue";

export default {
  name: "VideoList",
  components: {
    videoPopup,
  },
  setup() {
    const store = useStore();

    /* ----- DATA ------------------------- */
    const data = ref(computed(() => store.state.code.data));
    const popup = ref(computed(() => store.state.code.popup.show));

    /* ----- METHODS ------------------------- */
    const openVideo = (index) => {
      store.commit("code/showVideo", index);
    };

    return {
      data,
      popup,
      openVideo,
    };
  },
};
</script>

<style lang="scss" scoped>
.VideoList {
  margin-top: 60px;
  text-align: center;
  max-height: calc(100vh - 200px - 60px);
  overflow: hidden;
  overflow-y: auto;

  .introText {
    img {
      width: 100%;
      max-width: 800px;
      margin-bottom: 75px;
    }
    p {
      font-family: var(--Barlow);
      font-size: 28px;
      font-weight: 400;
      color: var(--text);
      padding: 0 6vw;
      margin: 0;
      margin-bottom: 75px;
    }
  }
  .videos {
    .singleVideo {
      position: relative;
      width: 100%;
      height: 0px;
      padding-top: 56.25%;
      background-color: var(--background);
      margin-bottom: 30px;
      overflow: hidden;
      cursor: pointer;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
      }
      i {
        position: absolute;
        top: 0;
        left: 0;
        right: 5px;
        bottom: 0;
        margin: auto;
        width: 32px;
        height: 32px;
        font-size: 32px;
        color: var(--cta);
        transition: 0.6s ease all;
        z-index: 2;
      }
    }
    .singleVideo:hover {
      i {
        text-shadow: 0 0 60px rgba(0, 0, 0, 0.7);
      }
    }
  }
}

@media screen and (max-width: 912px) {
  .VideoList {
    margin-top: 0;
    padding-top: 30px;

    .introText {
      img {
        width: 100%;
        margin-bottom: 30px;
      }
      p {
        font-size: 22px;
        padding: 0px;
        margin-bottom: 45px;
      }
    }
  }
}
</style>
