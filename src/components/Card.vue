<template>
  <div class="py-8 w-full flex justify-center items-center">
      <div class="w-1/2 rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <slot/>  
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>