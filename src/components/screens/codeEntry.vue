<template>
  <div class="container">
    <div class="CodeEntry">
      <div class="inner">
        <img src="/images/UP_Text_Logo.png" alt="" />
        <p>
          Enter the unique memories code from your email to get access to all the videos from your amazing day
          at <img src="/images/UP_Text_Logo.png" alt="" />
        </p>
        <form @submit.prevent="submitCode()">
          <p :class="{ error: error.active }">{{ error.message }}</p>
          <input type="text" name="code" id="code" placeholder="Enter Code..." v-model="code" />
          <button>See my memories</button>
        </form>
        <div class="additionalButtons">
          <a class="bookingButton" href="https://www.urbanplayground.co.uk/book-tickets"
            ><button>Book Again?</button></a
          >
          <a class="existingButton" :href="$router.resolve({ name: 'existingBooking' }).path"
            ><button>Have A Booking?</button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CodeEntry",
  setup() {
    const store = useStore();

    /* ----- DATA ------------------------- */
    const code = ref("");
    const error = ref(computed(() => store.state.code.error));

    const submitCode = () => {
      if (code.value === "") {
        store.commit("code/errorMessage", "Please enter your code");
      } else {
        store.commit("code/checkCode", code.value);
      }
    };

    return {
      code,
      error,
      submitCode,
    };
  },
};
</script>

<style lang="scss" scoped>
.CodeEntry {
  .inner {
    position: relative;
    height: calc(100vh - 200px);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    overflow: hidden;

    img {
      width: 60vw;
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

      img {
        height: 20px;
        width: auto;
        margin: 0;
        margin-top: -2px;
        margin-left: 2px;
      }
    }
    .additionalButtons {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      .existingButton {
        margin-left: 20px;
      }
    }
    form {
      position: relative;

      input {
        font-family: var(--Montserrat);
        display: block;
        width: 60vw;
        max-width: 800px;
        background: transparent;
        border: 1px solid var(--cta);
        font-size: 18px;
        font-weight: 400;
        color: var(--text);
        border-radius: 8px;
        padding: 8px 15px;
        margin: auto;
        margin-bottom: 30px;
        outline: none !important;
      }
      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: var(--text);
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: var(--text);
      }
      :-ms-input-placeholder {
        /* IE 10+ */
        color: var(--text);
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: var(--text);
      }

      button {
        font-family: var(--Montserrat);
        background-color: var(--cta);
        border: 1px solid var(--cta);
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--text);
        border-radius: 8px;
        padding: 8px 60px;
        transition: 0.6s ease all;
      }
      button:hover {
        background-color: transparent;
        color: var(--cta-alt);
        border: 1px solid var(--cta-alt);
      }
      p {
        position: absolute;
        left: 0;
        right: 0;
        bottom: calc(100% - 10px);
        margin: auto;
        font-family: var(--Montserrat);
        font-size: 18px;
        font-weight: 400;
        color: var(--text);
        margin: 0;
        opacity: 0;
        transition: 0.6s ease all;
      }
      p.error {
        bottom: calc(100% + 10px);
        opacity: 1;
      }
    }
    a {
      button {
        margin-top: 30px;
        font-family: var(--Montserrat);
        background-color: var(--cta);
        border: 1px solid var(--cta);
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--text);
        border-radius: 8px;
        padding: 8px 60px;
        transition: 0.6s ease all;
      }
    }
    a:hover {
      button {
        background-color: transparent;
        color: var(--cta-alt);
        border: 1px solid var(--cta-alt);
      }
    }
  }
}

@media screen and (max-width: 912px) {
  .CodeEntry {
    height: calc(100vh - 190px);
    width: 100%;

    img {
      width: 100%;
      margin-bottom: 45px;
    }
    p {
      font-size: 22px;
      padding: 0px;
      margin-bottom: 45px;

      img {
        height: 14px;
      }
    }
    form {
      width: 100%;

      input {
        width: 100%;
        font-size: 16px;
        padding: 6px 15px;
        border-radius: 10px;
        margin-bottom: 8px;
      }
      button {
        width: 100%;
        font-size: 16px;
        padding: 6px 15px;
        border-radius: 8px;
      }
    }
    a {
      button {
        width: 100%;
        font-size: 16px;
        padding: 6px 15px;
        border-radius: 8px;
      }
    }
  }
}
</style>
