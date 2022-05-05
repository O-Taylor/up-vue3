<template>
  <div class="videoPopup" @click.self="closePopup()">
    <div class="innerPoup" @click.self="closePopup()">
      <div class="videoPlayer">
        <div class="download">
          <a :href="video.video" download>
            <i class="fas fa-download"></i>
          </a>
        </div>
        <vue-plyr :options="options">
          <video controls :data-poster="video.thumbnail">
            <source :src="video.video" type="video/mp4" />
          </video>
        </vue-plyr>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "videoPopup",
  components: {},
  setup() {
    const store = useStore();
    /* ----- DATA ------------------------- */
    const video = ref(computed(() => store.state.code.popup));
    const playerOptions = ref({
      src: video,
    });

    /* ----- METHODS ------------------------- */
    const closePopup = () => {
      store.commit("code/hideVideo");
    };

    return {
      video,
      playerOptions,
      closePopup,
    };
  },
};
</script>

<style lang="scss">
.videoPopup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;

  .innerPoup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 80%;
    height: 80%;
    overflow: hidden;

    .videoPlayer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 100%;
      height: 0;
      padding-top: 56.25%;
      overflow: hidden;

      .download {
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 5;

        a {
          text-decoration: none !important;
        }
        i {
          font-size: 22px;
          color: var(--text);
        }
      }
      .plyr {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media screen and (max-width: 912px) {
  .videoPopup {
    .innerPoup {
      max-height: calc(100vh - 200px);
    }
  }
}
</style>
