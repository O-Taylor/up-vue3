<template>
  <NavigationMenu />
  <div class="page">
    <div class="pageInner">
      <codeEntry v-if="stage === 1" />
      <videoList v-if="stage === 2" />
    </div>
  </div>

  <footerMenu />
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import NavigationMenu from "../components/_layout/navigation.vue";
import footerMenu from "../components/_layout/footer.vue";

import codeEntry from "../components/screens/codeEntry.vue";
import videoList from "../components/screens/videoList.vue";

export default {
  name: "App",
  components: {
    NavigationMenu,
    footerMenu,

    codeEntry,
    videoList,
  },
  setup() {
    const store = useStore();

    /* ----- DATA ------------------------- */
    const stage = ref(computed(() => store.state.code.stage));

    return {
      stage,
    };
  },
};
</script>

<style></style>
