<template lang="pug">
.photo-info
  h1 Machine Detail
  p {{ item.machine }}
  nuxt-link.link(to='/testApi') Back to Photos

</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const item = await $axios.$get(`https://0vw7mtv0-9000.asse.devtunnels.ms/washing-machine/${params.id}`)
    // const photo = await $axios.$get(`https://picsum.photos/id/${params.id}/info`)
    return { item }
  }
}
</script>

<style scoped>
  .photo-info {
    width: 860px;
    margin: 0 auto;
    text-align: center;
  }
  .img {
    width: 100%;
  }

  .link {
    display: inline-block;
    margin-top: 2em;
  }
</style>
