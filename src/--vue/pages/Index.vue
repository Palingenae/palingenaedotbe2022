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