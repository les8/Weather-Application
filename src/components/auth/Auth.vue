<template>
  <div class="auth">
    <h2 class="auth__title">Authorisation</h2>
    <div class="auth__input">
      <input
        type="text"
        name="auth-input"
        placeholder="enter your api key..."
        v-model="inputAPI"
        @keydown.enter="chechKey"
      />
    </div>
    <div class="auth__actions">
      <button class="auth__button" type="submit" @click="chechKey">
        Log In
      </button>
      <a
        class="auth__button auth__link"
        target="_blank"
        href="https://home.openweathermap.org/users/sign_up/"
      >
        Register
      </a>
    </div>
    <p class="auth__about">
      Hello, wanderer! <br />
      We use third - party API to collect weather data. <br />
      Please register on
      <a href="https://home.openweathermap.org/users/sign_up/" target="_blank">
        openweathermap
      </a>
      and get your free API key for log in to the application. <br /><br />
      Good weather!
    </p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "auth-page",
  data() {
    return {
      inputAPI: "",
    };
  },
  methods: {
    submitCurrentAPI() {
      this.setCurrentApi(this.inputAPI);
    },
    async chechKey() {
      if (this.inputAPI === "") {
        return;
      }

      try {
        const isKeyOk = await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${this.inputAPI}`
          )
          .then((responce) => responce.status);

        if (isKeyOk === 200) {
          document.cookie = `key=${this.inputAPI}`;
          this.submitCurrentAPI();
        }
      } catch (error) {
        console.log(error);
      }
    },
    ...mapMutations(["setCurrentApi"]),
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/variables.scss";
@import "/src/styles/common.scss";
.auth {
  width: 579px;

  &__title {
    font-size: $title-size;
    margin-bottom: 32px;
  }

  &__input {
    display: flex;
    width: 100%;
    height: 60px;
    margin-bottom: 16px;
    padding: 10px 0 10px 30px;
    border-radius: 8px;
    background-color: $primary-color;
    font-size: $text-search-size;
    color: $secondary-color;

    input[name="auth-input"] {
      flex-grow: 1;
      border: none;
      outline: none;
      -webkit-appearance: none;
      vertical-align: middle;
    }

    input[type="submit"] {
      border: none;
      background: none;
      cursor: pointer;
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
  }

  &__button {
    width: 200px;
    height: 60px;
    font-size: $text-search-size;
    color: $secondary-color;
    background-color: $primary-color;
    border-radius: 8px;

    &:hover {
      background-color: #d1ec57;
    }
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #d1ec57;
    }
  }

  &__about {
    margin-top: 32px;
    font-size: $text-size;
    font-style: italic;
    line-height: 32px;

    a {
      color: #d1ec57;
      font-weight: 700;
    }
  }
}
</style>
