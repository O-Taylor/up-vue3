import store from "../";

const state = () => ({
  stage: 1,
  data: null,
  code: "",
  error: {
    active: false,
    message: "",
  },
  popup: {
    show: false,
    video: "",
    thumbnail: "",
  },
});

const mutations = {
  checkCode(state, data) {
    state.code = data;

    if (state.code === "cws") {
      state.data = [
        {
          id: 1,
          thumbnail: "https://deadline.com/wp-content/uploads/2020/06/maxresdefault.jpg",
          video: "https://cdn.clockwork-studios.com/mellors/up/pexels-anna-tarazevich-6533025.mp4",
        },
        {
          id: 2,
          thumbnail:
            "https://hubimages.itv.com/episode/1_7743_0083?w=1366&h=769&q=80&blur=0&bg=false&image_format=jpg",
          video: "https://cdn.clockwork-studios.com/mellors/up/pexels-anna-tarazevich-6533027.mp4",
        },
        {
          id: 3,
          thumbnail:
            "https://theblogisright.files.wordpress.com/2011/05/a4238-fullscreencapture5282011125047pm-bmp.jpg",
          video: "https://cdn.clockwork-studios.com/mellors/up/pexels-mikhail-nilov-6835374.mp4",
        },
      ];
      state.stage = 2;
    } else {
      store.commit("code/errorMessage", "You have entered an invalid code");
    }
  },
  errorMessage(state, data) {
    if (state.error.active === true) {
      state.error.active = false;

      setTimeout(function () {
        state.error.message = "";
        state.error.message = data;
        state.error.active = true;

        setTimeout(function () {
          state.error.active = false;

          setTimeout(function () {
            state.error.message = "";
          }, 700);
        }, 5000);
      }, 700);
    } else {
      state.error.message = data;
      state.error.active = true;

      setTimeout(function () {
        state.error.active = false;

        setTimeout(function () {
          state.error.message = "";
        }, 700);
      }, 5000);
    }
  },
  showVideo(state, data) {
    state.popup.show = true;
    state.popup.video = state.data[data].video;
    state.popup.thumbnail = state.data[data].thumbnail;
  },
  hideVideo(state) {
    state.popup.show = false;
    state.popup.video = "";
    state.popup.thumbnail = "";
  },
};

// actions
const actions = {
  checkCode(context, data) {
    context.commit("checkCode", data);
  },
  errorMessage(context, data) {
    context.commit("errorMessage", data);
  },
  showVideo(context, data) {
    context.commit("showVideo", data);
  },
  hideVideo(context) {
    context.commit("hideVideo");
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
