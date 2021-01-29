<template>
  <div>
    <b-modal id="modal-detail" size="lg" title="Detail book" no-stacking hide-footer>
      <b-card
        :title="titleBook"
        :img-src="imageThumbnail"
        img-alt="Image"
        img-width="300px"
        img-height="300px"
        img-left
        tag="article"
        class="p-2 mb-2"
      >
        <b-card-text>
          <p>
            <b>
              {{ authorBook }}
            </b>
          </p>
          <p>
            {{ descriptionBook }}
          </p>
          <p>
            <b>{{ price }} </b>
          </p>
        </b-card-text>
        <b-button variant="primary" @click="addBookToCart(detailBooks)">Add to cart</b-button>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ModalDetail',
  props: {
    bookDetail: Object,
  },
  computed: {
    ...mapGetters(['api', 'detailBooks']),
    titleBook() {
      return this.detailBooks?.volumeInfo.title ?? '';
    },
    imageThumbnail() {
      /* eslint-disable global-require */
      const image = require('../assets/no-image-icon.png');
      return this.detailBooks?.volumeInfo.imageLinks?.thumbnail ?? image;
      // eslint-disable-line import/no-dynamic-require
      /* eslint-enable global-require */
    },
    descriptionBook() {
      return this.detailBooks?.volumeInfo.description ?? '';
    },
    authorBook() {
      return this.detailBooks?.volumeInfo.authors.join(',  ') ?? '';
    },
    price() {
      if (this.detailBooks?.saleInfo?.saleability === 'NOT_FOR_SALE') {
        return 'Not for sale';
      } if (this.detailBooks?.saleInfo?.saleability === 'FREE') {
        return 'FREE';
      }
      return `${this.detailBooks?.saleInfo?.listPrice?.amount.toLocaleString('vi-VN')} VNĐ` ?? 'Đang cập nhật';
    },
  },
  methods: {
    addBookToCart(book) {
      if (book.saleInfo.saleability === 'NOT_FOR_SALE') {
        alert('Can not add this book to your cart. Please choose other book.');
      } else {
        alert('Success');
        this.$store.dispatch('addBookToCart', book);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
