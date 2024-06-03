<template lang="pug">

.d-flex.align-center
  v-row
    v-col(cols="7" v-if="$vuetify.breakpoint.smAndDown ? false : true" )
      v-tabs(v-model='tab')
        v-tab.text-capitalize(v-for="(itemTab) in tabs" :key="itemTab.name" @click="filterTab(itemTab)") {{ itemTab.name }}
    v-col.d-flex.align-center
      v-text-field.mr-2.mr-md-8(v-model="search" label="search" solo background-color="#E5E7EB" hide-details @input="searchData")
        template(#prepend-inner)
          v-icon.mr-2 mdi-magnify
      v-menu(v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y)
        template(#activator="{ on, attrs }" )
          v-btn.text-capitalize(v-bind="attrs" v-on="on" outlined)
            v-icon.mr-md-2 mdi-filter-variant
            | Filter
        v-card
          v-list
            v-list-item
              v-list-item-avatar
                v-icon mdi-basket-outline
              v-list-item-content
                v-list-item-title Clothing Weight

        v-card
          v-list
          v-list-item-group(v-model="kilogramModel" multiple active-class="" @change="searchData(search)")
            v-list-item(v-for="listItem in list" :key="listItem" :value="listItem")
              template(v-slot:default="{ active }")
                v-list-item-action
                  v-checkbox(:input-value="active" color="grey" on-icon="mdi-check" off-icon="")
                v-list-item-content
                  v-list-item-title {{ listItem }} Kilogram

</template>

<script>
export default {
  props: {
    list: {
      default: null,
      type: Array
    },
    tabs: {
      default: null,
      type: Array
    }
  },
  data () {
    return {
      menu: false,
      search: '',
      tab: '',
      kilogramModel: []
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    filterTab (value) {
      this.search = ''
      this.kilogramModel = []
      this.$emit('filterTab', value)
    },
    searchData (data) {
      this.$emit('searchBar', data, this.kilogramModel)
    }

  }
}
</script>
