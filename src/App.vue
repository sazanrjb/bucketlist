<template>
  <div class="container font-sans">
    <card>
      <bucket-list-form @saved="onSave"></bucket-list-form>
      <div class="mt-5 border-b-7 border-t-0 border-dotted border-gray-300"></div>
      <div class="bg-gray-200 px-2 pr-8 pt-1 pb-1 mb-4">
        <p class="text-center underline">AUGUST, 2018</p>
        <ul class="leading-relaxed list-outside">
          <li
            class="list-none flex justify between"
            :class="{ 'line-through text-green-700': item.is_succeeded }"
            v-for="item in bucketLists"
            :key="item._id"
          >
            <span class="flex-1">
              <input type="checkbox" value="travel">
              {{ item.title }}
            </span>
            <span>
              <button
                class="mb-3 bg-white hover:bg-gray-100 text-red-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                @click="deleteWish(item)"
              >Delete</button>
            </span>
          </li>
        </ul>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import BucketListForm from "./components/BucketListForm.vue";
import { getWishes, deleteWish } from "./api/calls";

export default {
  name: "App",
  components: {
    Card,
    BucketListForm
  },
  data() {
    return {
      bucketLists: []
    };
  },
  created() {
    this.fetchWishes();
  },
  methods: {
    fetchWishes() {
      getWishes()
        .then(({ data }) => {
          this.bucketLists = data;
        })
        .catch((error) => console.log(error));
    },
    onSave(wish) {
      this.bucketLists.unshift(wish);
    },
    deleteWish(wish) {
      deleteWish(wish._id)
      .then(({ data }) => {
        this.bucketLists = this.bucketLists.filter(item => item._id !== data._id);
      })
      .catch((error) => console.log(error));
    }
  }
};
</script>