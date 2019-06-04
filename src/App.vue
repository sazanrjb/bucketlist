<template>
  <div class="container font-sans">
    <card>
      <bucket-list-form @saved="onSave"></bucket-list-form>
      <div class="mt-5 border-b-7 border-t-0 border-dotted border-gray-300"></div>
      <div class="bg-gray-200 px-2 pr-8 pt-1 pb-1 mb-4">
        <p class="text-center underline">AUGUST, 2018</p>
        <ul class="leading-relaxed list-outside">
          <li
            class="list-none"
            :class="{ 'line-through text-green-700': item.is_succeeded }"
            v-for="item in bucketLists"
            :key="item._id"
          >
            <input type="checkbox" value="travel">
            {{ item.title }}
          </li>
        </ul>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import BucketListForm from "./components/BucketListForm.vue";
import { getWishes } from "./api/calls";

export default {
  name: "App",
  components: {
    Card,
    BucketListForm,
  },
  data() {
    return {
      bucketLists: []
    };
  },
  created() {
    this.fetchWishes();
  },
  methods:{
    fetchWishes() {
      getWishes()
      .then(({ data }) => {
        this.bucketLists = data;
      })
      .catch(({ response }) => {
        
      });
    },
    onSave(wish) {
      this.bucketLists.unshift(wish);
    },
  },
};
</script>