<template>
    <div class="social-links">
        <a v-for="socialProfile in socialProfiles" :key="socialProfile.name" href="socialProfile.link" target="_blank" rel="noopener">{{ socialProfile.name }}</a>
    </div>
</template>

<style lang="scss">
.social-links {
    @apply
        flex
        justify-between;

    width: 30%;
    @screen lg {
        width: 50%;
    }
    @screen md {
        width: 70%;
    }    
    @screen sm {
        @apply 
            flex-col
            items-center;
        width: 100%;
    }
    a {
        font-family: $font-sans;
        font-size: ms(1);
        @screen xxl {
            font-size: ms(2);
        }
        @screen xl {
            font-size: ms(1);
        }
        @screen sm {
            @apply mb-medium;
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            socialProfiles: [
                {
                    name: 'Twitter',
                    link: 'https://twitter.com/Palingenae'
                },
                {
                    name: 'Instagram',
                    link: 'https://www.instagram.com/palingenae/'
                },
                {
                    name: 'Github',
                    link: 'https://github.com/Palingenae'
                },
            ]
        }
    }
}
</script>