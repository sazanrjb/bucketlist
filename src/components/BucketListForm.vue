<template>
  <div>
    <div class="font-bold text-xl">BUCKET LIST</div>
    <form class="px-2 pr-8 pt-6 mb-4" @submit.prevent="save">
      <div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >Month</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Select month"
          v-model="model.date"
        >
      </div>
      <div class="my-5">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >Title</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter title and press enter"
          v-model="model.title"
        >
      </div>
      <button
        type="submit"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >Submit</button>
    </form>
  </div>
</template>
<script>
import { postWish } from '../api/calls';

export default {
  name: "WishListForm",
  data() {
    return {
      model: {
        date: "",
        title: ""
      }
    };
  },
  methods: {
    validate() {
      if (!this.model.date || !this.model.title) {
        return false;
      }

      return true;
    },
    save() {
      if (this.validate()) {
        postWish(this.model)
          .then(({ data }) => {
            this.$emit('saved', data);
            this.reset();
          })
          .catch(({ response }) => console.log(response));
      }
    },
    reset() {
      this.model.date = '';
      this.model.title = '';
    },
  }
};
</script>
