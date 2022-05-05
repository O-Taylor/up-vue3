<template>
  <nav class="Navigation">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <a href="https://www.urbanplayground.co.uk/book-tickets"><img src="/images/uplogo.png" alt="" /></a>
        </div>
        <div class="col-6 text-right" style="text-align: end">
          <div class="socialMedia">
            <a v-for="item in socialMedia" :key="item.id" :href="item.link">
              <i :class="item.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  setup() {
    /* ----- DATA ------------------------- */
    const socialMedia = [
      {
        id: 1,
        name: "Facebook",
        icon: "fab fa-facebook-f",
        link: "https://www.facebook.com/UrbanPlaygroundUK",
      },
      {
        id: 2,
        name: "Instagram",
        icon: "fab fa-instagram",
        link: "https://www.instagram.com/urbanplaygrounduk/",
      },
      {
        id: 3,
        name: "Twitter",
        icon: "fab fa-twitter",
        link: "#Twitter",
      },
    ];

    return {
      socialMedia,
    };
  },
};
</script>

<style lang="scss" scoped>
nav.Navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  padding: 33px 0;
  z-index: 9;

  .row {
    align-items: center;
  }

  img {
    height: 35px;
    width: 100%;
    object-fit: contain;
    object-position: left;
  }
  .socialMedia {
    a {
      margin-right: 15px;
      text-decoration: none;

      i {
        font-size: 18px;
        color: var(--text);
      }
    }
    a:last-child {
      margin-right: 0;
    }
  }
}
@media screen and (max-width: 912px) {
  nav.Navigation {
    height: 90px;
    padding: 30px 0;

    img {
      height: 30px;
    }
    .socialMedia {
      a {
        i {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
