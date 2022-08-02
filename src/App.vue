<template>
  <div class="wrapper">
    <Auth v-if="!apiKey" />
    <Loader v-else-if="!currentCity" />
    <StartPage v-else />
  </div>
</template>

<script>
import Auth from "./components/auth/Auth.vue";
import Loader from "./components/loader/Loader.vue";
import StartPage from "./components/start/StartPage.vue";
import { mapState, mapMutations } from "vuex";
import { getCookie } from "./js/cookie";

export default {
  name: "App",
  components: {
    Auth,
    Loader,
    StartPage,
  },
  created() {
    if (getCookie("key")) {
      // for switch off registration while have no log out features
      // document.cookie = `${getCookie("key")}; max-age=-1`;
      this.setCurrentApi(getCookie("key"));
    }
  },
  computed: mapState(["apiKey", "currentCity"]),
  methods: mapMutations(["setCurrentApi"]),
};
</script>

<style lang="scss">
@import "./styles/common.scss";
@import "./styles/settings.scss";

.wrapper {
  padding: 100px 200px;
}
</style>
