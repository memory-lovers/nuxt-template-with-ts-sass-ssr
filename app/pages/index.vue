<template>
  <section class="section">
    <div class="columns is-mobile">

      <card
        :title="$t('home_card_1_title')"
        icon="github-circle"
      >
        <span v-html="$t('home_card_1_body')"></span>
      </card>

      <card
        :title="$t('home_card_2_title')"
        icon="cellphone-link"
      >
        <span v-html="$t('home_card_2_body')"></span>
      </card>

      <card
        :title="$t('home_card_3_title')"
        icon="alert-decagram"
      >
        <span v-html="$t('home_card_3_body')"></span>
      </card>

      <card
        :title="$t('home_card_4_title')"
        icon="arrange-bring-to-front"
      >
        <span v-html="$t('home_card_4_body')"></span>
      </card>

    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, mixins } from "nuxt-property-decorator";
import HeadMixin from "~/mixins/HeadMixin";
import { HeadInfo } from "~/types";
import Card from "~/components/Card.vue"

@Component({ components: { Card } })
export default class IndexPage extends mixins(HeadMixin) {
  name:string = 'HomePage';

  public headInfo(): HeadInfo {
    return {
      title: "home_title",
      description: "home_details"
    };
  }
}
</script>
