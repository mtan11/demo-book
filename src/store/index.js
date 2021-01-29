import Vue from 'vue';
import Vuex from 'vuex';

const axios = require('axios');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: {
      getBooks: 'https://www.googleapis.com/books/v1/volumes?q=',
    },
    books: [],
    allBooks: [],
    detailBooks: null,
    yourCart: [],
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books;
    },
    SET_ALL_BOOKS(state, books) {
      state.allBooks = books;
    },
    SET_DETAIL_BOOK(state, detail) {
      state.detailBooks = detail;
    },
    SET_YOUR_CART(state, books) {
      state.yourCart = books;
    },

  },
  actions: {
    async getBooks({ commit }, title) {
      const data = await axios.get(`${this.state.api.getBooks}${title}+intitile`)
        .then((response) => response.data)
        .catch((error) => {
          alert(`${error.statusCode} ${error.message}`);
          return 'error';
        });
      if (data !== 'error') {
        commit('SET_BOOKS', data.items);
        commit('SET_ALL_BOOKS', data.items);
      }
    },
    setDetailBook({ commit }, detailBooks) {
      commit('SET_DETAIL_BOOK', detailBooks);
    },

    addBookToCart({ commit }, book) {
      const yourBooks = [...this.state.yourCart, book];
      commit('SET_YOUR_CART', yourBooks);
    },

    filterBookMenu({ commit }, category) {
      if (category === 'ALL') {
        commit('SET_BOOKS', this.state.allBooks);
      } else {
        const yourBooks = this.state.allBooks.filter(
          (book) => book.saleInfo.saleability === category,
        );
        commit('SET_BOOKS', yourBooks);
      }
    },

    removeBookCartById({ commit }, bookId) {
      const yourBooks = this.state.yourCart.filter((book) => book.id !== bookId);
      commit('SET_YOUR_CART', yourBooks);
    },
  },
  getters: {
    books(state) {
      return state.books;
    },
    detailBooks(state) {
      return state.detailBooks;
    },
    yourCart(state) {
      return state.yourCart;
    },
  },
  modules: {
  },
});
