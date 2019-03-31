<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          :href="localePath('index')"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-arrowless">
              <div class="icon">
                <span class="mdi mdi-earth mdi-24px mdi-light"></span>
              </div>
            </a>

            <div class="navbar-dropdown">
              <nuxt-link
                class="navbar-item"
                v-for="locale in $i18n.locales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                :class="{'is-active' : (locale.code == $i18n.locale)}"
              >{{ locale.code.toUpperCase() }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="main-content columns">

      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="localePath(item.to.name)"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ $t(item.title) }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>

    </section>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class DefaultLayout extends Vue {
  items = [
    {
      title: 'home_title',
      icon: 'home',
      to: { name: 'index' }
    },
    {
      title: 'inspire_title',
      icon: 'lightbulb',
      to: { name: 'inspire' }
    }
  ];
}
</script>
