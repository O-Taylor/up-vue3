<template>
  <footer class="Footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p>&copy; {{ currentYear }} Urban Playground. All rights reserved</p>
        </div>
        <div class="col-md-6">
          <p class="links">
            <a href="#privacyPolicy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  setup() {
    /* ----- DATA ------------------------- */
    const currentYear = new Date().getFullYear();

    return {
      currentYear,
    };
  },
};
</script>

<style lang="scss" scoped>
.Footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 33px 0;
  z-index: 8;

  .row {
    align-items: center;
    height: 35px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: var(--text);
    margin: 0;
  }
  p.links {
    text-align: right;

    a {
      font-size: 14px;
      font-weight: 400;
      color: var(--cta);
      text-decoration: none;
      margin-right: 15px;
    }
    a:last-child {
      margin-right: 0;
    }
  }
}

@media screen and (max-width: 912px) {
  .Footer {
    display: flex;
    padding: 20px 0;

    p {
      margin-bottom: 5px;
    }
    p.links {
      text-align: center;
      margin-bottom: 0;
    }
  }
}
</style>
