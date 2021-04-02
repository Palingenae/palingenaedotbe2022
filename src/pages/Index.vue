<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <section class="hero">
      <h1 class="hero__greeting">Bonjour !</h1>

      <h2 class="hero__introduction">Je m'appelle Olivia.</h2>

      <p class="hero__description">
        Je suis une développeuse Web <br />
        et Photographe actuellement <br />
        à Nantes.
      </p>
    </section>
    
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Greetings'
  }
}
</script>

<style lang="scss">
.hero {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;
    height: 100vh;
    padding: $spacing-xlarge;
    &__greeting {
        font-weight: 700;
        margin-bottom: $spacing-small;
    }
    &__introduction {
        @apply text-coldOne;
        @extend h2;
        font-variation-settings: 'wght' 300;
        letter-spacing: -0.1rem;
        // color: $cold-alternate-1;
        margin-bottom: $spacing-medium;
        line-height: $spacing-display-line-height;
    }
    &__description {
        font-variation-settings: 'wght' 250;
        font-size: ms(4);
        margin-bottom: $spacing-large;
        line-height: $spacing-display-line-height;
    }
    &__CTA--scroll {
        margin-top: $spacing-large;
    }
}
</style>