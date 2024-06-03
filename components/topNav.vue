<template lang="pug">
.navbar
  v-app-bar.mt-4(color='white' elevation='2')
        .py-6.pl-6.d-flex.justify-start
          .mr-6.mt-1(style='width: 100%; height: 100%; position: relative')
            div(style='width: 16px; height: 16px; left: 0px; top: 0px; position: absolute; background: #F9FAFB; border-radius: 2px; border: 0.50px #1F2937 solid')
            div(style='width: 2.13px; height: 2.13px; left: 12.80px; top: 1.07px; position: absolute; background: #374151; border-radius: 9999px; border: 0.50px #1F2937 solid')
            div(style='width: 2.13px; height: 2.13px; left: 10.13px; top: 1.07px; position: absolute; background: #374151; border-radius: 9999px; border: 0.50px #1F2937 solid')
            div(style='width: 5.87px; height: 2.13px; left: 1.07px; top: 1.07px; position: absolute; background: #4B5563; border-radius: 1px; border: 0.50px #1F2937 solid')
            div(style='width: 16px; height: 0px; left: 0px; top: 4.27px; position: absolute; border: 0.50px #1F2937 solid')
            div(style='width: 8.53px; height: 8.53px; left: 3.73px; top: 5.87px; position: absolute; background: #E5E7EB; border-radius: 9999px; border: 0.50px #1F2937 solid')
            div(style='width: 6.40px; height: 6.40px; left: 4.80px; top: 6.93px; position: absolute; background: #E5E7EB; border-radius: 9999px; border: 0.50px #1F2937 solid')
          p.mb-0 WASHCHINE
        v-spacer
        v-icon(v-if="$vuetify.breakpoint.smAndDown ? true : false"  @click.stop="drawer = !drawer") mdi-menu
  v-navigation-drawer.py-0(v-model="drawer" absolute temporary)
    v-list-item-group(model="group")
      v-list-item(v-for="(itemTab) in items" :key="itemTab.name" @click="filterTab(itemTab.value)")
        v-list-item-title {{ itemTab.name }}
</template>
<script>
export default ({
  data () {
    return {
      drawer: null,
      items: [
        { name: 'All', value: 5 },
        { name: 'Available', value: 1 },
        { name: 'Washing', value: 2 },
        { name: 'Complete', value: 3 },
        { name: 'Maintenance', value: 4 }
      ]
    }
  },
  methods: {
    filterTab (value) {
      // console.log('filterTabMenu', value)
      this.$emit('filterTabMenu', value)
    }
  }
})
</script>
