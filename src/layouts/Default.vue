<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
::selection {
  @apply bg-main-700 text-grey-100 dark:bg-main-200 dark:text-grey-900;
}

html {
    @apply bg-warmOne-100;
    font-family: $font-sans, sans-serif;
    font-size: 1em;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>