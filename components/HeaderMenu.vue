<template>
  <nav>
    <div class="header">
      <NuxtLink :to="localePath('/')">
        Top😺
      </NuxtLink>
      <button>
        <nuxt-link :to="switchLocalePath($t('changeToLocale'))">
          {{ $t('changeLang') }}
        </nuxt-link>
      </button>
      <div class="header-container">
        <NuxtLink
          v-for="content in headerContents"
          :key="content.text"
          :to="localePath(content.to)"
          class="header-menu"
        >
          {{ content.text }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      headerContents: [
        {
          text: 'About',
          to: '/subpage'
        },
        {
          text: 'Services',
          to: '/subpage'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/const.scss';

.header {
  background: lightblue;
  padding: 10px;
  height: 30px;
  display: flex;
}

.header-container {
  padding-right: 50px;
  position: absolute;
  right: 0;
}

.header-menu {
  font-size: $headline2Size;
  font-family: $headerFont;
  text-decoration: unset;
  color: black;
}
</style>
