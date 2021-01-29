<template>
  <div class="home">
    <div class="my-4">
      <b-button variant="info" class="mr-2" @click="filterBooks('FREE')">Free</b-button>
      <b-button variant="danger" class="mr-2" @click="filterBooks('NOT_FOR_SALE')"
        >Not for sale</b-button
      >
      <b-button variant="warning" class="mr-2" @click="filterBooks('FOR_SALE')"
        >For sale</b-button
      >
      <b-button variant="success" class="mr-2" @click="filterBooks('ALL')">All</b-button>
    </div>
    <div v-if="books.length > 0">
      <transition-group
        name="list"
        tag="p"
        class="gallary d-flex flex-wrap justify-content-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          v-for="item in books"
          :key="item.id"
          class="container__card m-2"
          style="position: relative"
        >
          <div
            class="card"
            :style="{
              background:
                'url(' +
                getThumbnailImage(item.volumeInfo.imageLinks) +
                ') center center/cover',
            }"
          ></div>
          <div class="text">
            <div class="bold">{{ item.volumeInfo.title }}</div>

            <span class="highlight">
              <div v-for="author in item.volumeInfo.authors" :key="author">
                {{ author }}
              </div>
            </span>
          </div>
          <div class="gallary__button" @click="showDetailBook(item)">LEARN MORE</div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  created() {
    this.$store.dispatch('getBooks', 'programming');
  },
  computed: {
    ...mapGetters(['books']),
  },
  methods: {
    showDetailBook(book) {
      this.$bvModal.show('modal-detail');
      this.$store.dispatch('setDetailBook', book);
    },
    filterBooks(arg) {
      this.$store.dispatch('filterBookMenu', arg);
    },
    getThumbnailImage(imageLinks) {
      /* eslint-disable global-require */
      const image = require('../assets/no-image-icon.png');
      // eslint-disable-line import/no-dynamic-require
      return imageLinks?.thumbnail ?? image;
      /* eslint-enable global-require */
    },
  },
};
</script>
<style lang="scss" scoped>
.gallary {
  .container__card {
    .card {
      height: 300px;
      width: 360px;
      transition: 1s ease-in-out;
      border: none;
    }
    .text {
      position: absolute;
      left: 0;
      top: 0;
      text-align: center;
      width: 100%;
      opacity: 0;
      transition: 1s ease-in-out;
      line-height: 18pt;
    }

    .gallary__button {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;
      opacity: 0;
      line-height: 18pt;
      margin: 0 auto;
      padding: 7px 0;
      width: 170px;
      border: 2px solid #e31b6d;
      transition: 1s ease-in-out;
      transition: "hover" 0.3s ease-in-out;
      &:hover {
        background-color: #e31b6d;
        color: #ffffff;
      }
    }

    .bold {
      font-size: 16pt;
      font-family: "Raleway-bold";
      font-weight: bold;
    }

    .highlight {
      color: #e31b6d;
    }

    &:hover {
      background-color: #fff;
      border-radius: 0.25rem;
      .text {
        top: 20%;
        opacity: 1;
        transition: 0.5s ease-out;
      }
      .card {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
      }
      .gallary__button {
        bottom: 20%;
        opacity: 1;
        transition: 0.5s ease-out;
        cursor: pointer;
      }
    }
  }
}
// Animation list projects
.list-enter-active,
.list-leave-active {
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: scale(0.1);
}

.list-move {
  -webkit-transition: -webkit-transform 1s;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
}
</style>
