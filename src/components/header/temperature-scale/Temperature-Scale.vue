<template>
  <div class="temperature-scale">
    <p class="temperature-scale__degree">º</p>
    <div class="temperature-scale_toggle">
      <div class="temperature-scale__items temperature-scale__item-1">
        <input id="celsus" type="radio" name="radio" value="on" checked />
        <label for="celsus">C</label>
      </div>
      <div class="temperature-scale__items temperature-scale__item-2">
        <input id="fahrenheit" type="radio" name="radio" value="off" />
        <label for="fahrenheit">F</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "temperature-scale",
};
</script>

<style lang="scss">
.temperature-scale {
  &__toggle {
    display: inline-block;
    overflow: hidden;
  }

  &__items {
    display: inline-block;

    input[type="radio"] {
      display: none;
    }

    label {
      display: inline-block;
      padding: 0px 15px;
      line-height: 34px;
      border: 1px solid #999;
      border-right: none;
      cursor: pointer;
      user-select: none;
    }
  }

  &__item-1 {
    label {
      border-radius: 6px 0 0 6px;
    }

    input[type="radio"]:checked + label {
      background: #ffc5c5;
    }
  }

  &__item-2 {
    label {
      border-radius: 0 6px 6px 0;
      border-right: 1px solid #999;
    }

    input[type="radio"]:checked + label {
      background: #bbffbb;
    }
  }
}
</style>
