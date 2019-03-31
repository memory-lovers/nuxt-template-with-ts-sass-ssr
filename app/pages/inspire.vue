<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">"{{ $t('inspire_heading') }}  <b-icon
      icon="rocket"
      size="is-large"
    />"</h2>
    <h3 class="subtitle is-6 has-text-grey" v-html="$t('inspire_subheading')"></h3>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class InspirePage extends Vue {
}
</script>