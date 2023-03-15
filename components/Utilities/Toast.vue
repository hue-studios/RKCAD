<template>
  <button @click="(e) => showToast()" class="p-1 uppercase">Show</button>
</template>

<script setup>
const { $toast } = useNuxtApp()
function showToast() {
  $toast.show({
    type: 'danger',
    message: 'single action toast',
    timeout: 10,
    // primary: {
    //   label: 'UNDO',
    //   action: () => $toast.show('you clicked UNDO'),
    // },
  })
}
</script>
