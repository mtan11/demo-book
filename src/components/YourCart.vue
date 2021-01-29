<template>
  <div>
    <b-modal
      id="modal-your-cart"
      size="lg"
      title="Your cart"
      centered
      no-stacking
      hide-footer
    >
      <div v-if="items.length > 0">
        <b-table striped hover :items="items" :fields="fields">
          <template #cell(edit)="row">
            <b-button
              size="sm"
              @click="removeBookById(row.item.id)"
              variant="danger"
              class="mr-2"
            >
              Remove
            </b-button>
          </template>
        </b-table>
      </div>
      <div v-else>
        <h3>You didn't any book to your cart.</h3>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'YourCart',
  computed: {
    ...mapGetters(['api', 'yourCart']),
  },
  watch: {
    yourCart(newVal) {
      this.items = [];
      newVal.forEach((book) => {
        const bookPrice = book.saleInfo.saleability === 'FREE'
          ? 0
          : book.saleInfo.listPrice.amount.toLocaleString('vi-VN');
        const item = {
          name: book.volumeInfo.title,
          author: book.volumeInfo.authors.join(',  '),
          price: bookPrice,
          id: book.id,
        };
        this.items.push(item);
      });
    },
  },
  data() {
    return {
      fields: [
        {
          key: 'name',
          sortable: true,
        },
        {
          key: 'author',
          sortable: true,
        },
        {
          key: 'price',
          sortable: true,
        },
        {
          key: 'edit',
          sortable: false,
        },
      ],
      items: [],
    };
  },
  methods: {
    removeBookById(bookId) {
      this.$store.dispatch('removeBookCartById', bookId);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
