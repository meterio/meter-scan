<template>
  <div class="search">
    <b-input-group class="search-group">
      <b-form-input
        :placeholder="placeholder"
        v-model="searchWord"
        @keydown="keydown"
      ></b-form-input>
      <b-input-group-append>
        <b-button
          class="query"
          variant="primary"
          v-if="btnType == 1"
          @click="btnClick"
        >
          <b-icon icon="search"></b-icon>
        </b-button>
        <b-button
          v-else
          variant="primary"
          size="sm"
          block
          style="
            margin-left: 0.2rem;
            width: 100px;
            border-top-left-radius: 0.2rem;
            border-bottom-left-radius: 0.2rem;
          "
          @click="btnClick"
        >
          <b-icon icon="search" class="mr-1"></b-icon>
          Search</b-button
        >
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  props: {
    btnType: {
      type: Number,
      // icon 1 button 2
      default: 1,
    },
    placeholder: {
      type: String,
      default: "Search by address/tx/block",
    },
  },
  name: "Search",
  data() {
    return {
      searchWord: "",
    };
  },
  beforeMount() {},
  methods: {
    btnClick() {
      const key = this.searchWord.replace(/\r?\n|\r/g, "");
      this.$emit("click", key);
    },
    keydown(evt) {
      if (evt) {
        if (evt.which === 13) {
          // enter key
          this.btnClick();
        }
      }
    },
  },
};
</script>

<style lang="scss">
.search {
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.125);

  .search-select {
    // width: 120px;
    .btn {
      margin: -6px;
    }
  }

  input[type="text"] {
    border: none;
    margin-left: 18px;
    padding: 0;

    &:hover,
    &:focus {
      box-shadow: none;
    }
  }

  .query {
    border-radius: 0.3rem !important;
  }
}
</style>
