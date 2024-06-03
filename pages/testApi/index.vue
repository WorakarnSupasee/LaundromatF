<template lang="pug">
.container
  h1 Test Machine
    .photos
      v-card(v-for='machineItem in machineItems' :key='machineItem.id' :to="{ path: `/testApi/${machineItem.id}` }")
        p name: {{ machineItem.type_name }}
        p status: {{ machineItem.id }}
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const items = await $axios.$get('https://0vw7mtv0-9000.asse.devtunnels.ms/machine-type')
    const machineItems = items.data
    return { machineItems }
  }
}
</script>
<style scoped>
  .container {
    padding: 1em;
    width: 1220px;
    margin: 0 auto;
  }
  .photos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 1em;
    text-align: center;
  }

  .photo-item {
    width: 100%;
    height: 256px;
    object-fit: cover;
  }
</style>
