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
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;
    height: 100vh;
    padding: $spacing-xlarge;
    @include medium-display {
        padding: $spacing-large;
    }
    @include small-display {
        justify-content: flex-start;
        padding: $spacing-medium;
    }
    &__greeting {
        font-weight: 700;
        margin-bottom: $spacing-medium;
        @include very-very-large-display {
            font-size: ms(7);
        }
        @include very-large-display {
            font-size: ms(6);
        }
        @include large-display {
            font-size: ms(5);
        }
        @include medium-display {
            font-size: ms(4);
        }
    }
    &__introduction {
        color: $colour-coldOne;
        font-variation-settings: 'wght' 300;
        letter-spacing: -0.1rem;
        // color: $cold-alternate-1;
        margin-bottom: $spacing-medium;
        line-height: $spacing-display-line-height;
        margin-bottom: $spacing-medium;
        @include very-very-large-display {
            font-size: ms(6);
        }
        @include very-large-display {
            font-size: ms(5);
        }
        @include large-display {
            font-size: ms(4);
        }
        @include medium-display {
            font-size: ms(3);
        }
    }
    &__description {
        font-variation-settings: 'wght' 250;
        margin-bottom: $spacing-large;
        line-height: $spacing-display-line-height;
        @include very-very-large-display {
            font-size: ms(5);
        }
        @include very-large-display {
            font-size: ms(4);
        }
        @include large-display {
            font-size: ms(3);
        }
        @include medium-display {
            font-size: ms(3);
        }

    }
    &__CTA--scroll {
        margin-top: $spacing-large;
    }
}
</style>