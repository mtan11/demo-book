<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="/">
        <b>{{ title }}</b>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit="onSubmit">
            <b-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="titleBook"
            ></b-input>
            <b-button
              size="sm"
              variant="success"
              class="my-2 my-sm-0 mr-2"
              @click="searchBooks"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item active @click="openCart">
            <b-button variant="primary">
              Your books
              <b-badge variant="light">{{ yourCart.length }} </b-badge>
            </b-button>
            <!-- <div class="d-flex algin-items-center">
              <b-icon icon="cart" class="mr-2"></b-icon>
              {{ yourCart.length }}
            </div> -->
          </b-nav-item>
          <b-nav-item :active="this.$route.name === 'Home'" :to="{name:'Home'}"> Home </b-nav-item>
          <b-nav-item :active="this.$route.name === 'About'" :to="{name:'About'}">
            About
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderVue',
  props: {
    title: String,
  },
  data() {
    return {
      titleBook: '',
    };
  },
  computed: {
    ...mapGetters(['api', 'yourCart']),
  },
  methods: {
    searchBooks() {
      this.$store.dispatch('getBooks', this.titleBook);
    },
    openCart() {
      this.$bvModal.show('modal-your-cart');
    },
    onSubmit(event) {
      event.preventDefault();
      this.searchBooks();
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  align-items: center;
}
</style>
