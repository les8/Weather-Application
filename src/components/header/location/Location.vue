<template>
  <div class="location">
    <h3 class="location__name">Омск</h3>
    <div class="location__managment">
      <h6 class="location__change">Сменить город</h6>
      <div class="location__mycoordinates">
        <SvgIcon name="sun" />
        <p>Мое местоположение</p>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "./../../constructor/SvgIcon.vue";
export default {
  name: "location-block",
  components: {
    SvgIcon,
  },
};
</script>
