<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <section class="hero">
      <h1 class="hero__greeting">
        {{ hero.greetings }}
      </h1>

      <h2 class="hero__introduction"> 
        {{ hero.introduction }} 
      </h2>

      <p class="hero__description" v-html="hero.description">
        {{ hero.description }}
      </p>

      <social-links/>
    </section>
    
  </Layout>
</template>

<script>
import socialLinks from '../components/SocialLinks.vue'
export default {
  data() {
    return {
      hero: {
        greetings: 'Bonjour !',
        introduction: "Je m'appelle Olivia.",
        description: "Je suis une développeuse Web <br> et Photographe actuellement <br> à Nantes."
      }
    }
  },
  components: { socialLinks },
  metaInfo: {
    title: 'Greetings'
  },
}
</script>

<style lang="scss">
.hero {
    @apply
        flex
        flex-col
        justify-center
        content-start
        items-start
        p-xlarge;
    flex-flow: column nowrap;
    height: 100vh;
    @screen md {
        @apply p-large;
    }
    @screen sm {
        @apply p-medium;
    }
    &__greeting {
        @apply mb-medium;
        font-weight: 700;
    }
    &__introduction {
        @apply 
            text-coldOne
            mb-medium;
        font-variation-settings: 'wght' 300;
        letter-spacing: -0.1rem;
        // color: $cold-alternate-1;
        margin-bottom: $spacing-medium;
        line-height: $spacing-display-line-height;
    }
    &__description {
        font-variation-settings: 'wght' 250;
        margin-bottom: $spacing-large;
        line-height: $spacing-display-line-height;
        @screen xxl {
            font-size: ms(5);
        }
        @screen xl {
            font-size: ms(4);
        }
        @screen lg {
            font-size: ms(3);
        }
        @screen md {
            font-size: ms(3);
        }

    }
    &__CTA--scroll {
        margin-top: $spacing-large;
    }
}
</style>