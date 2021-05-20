<template>
    <div class="social-links">
        <a v-for="socialProfile in socialProfiles" :key="socialProfile.name" :href='socialProfile.link' target="_blank" rel="noopener">{{ socialProfile.name }}</a>
    </div>
</template>

<style lang="scss">
.social-links {
    display: flex;
    justify-content: space-between;
    width: 30%;
    @include large-display {
        width: 50%;
    }
    @include medium-display {
        width: 70%;
    }    
    @include small-display {
        flex-flow: column;
        align-items: center;
        width: 100%;
    }
    a {
        font-family: $font-sans;
        font-size: ms(1);
        @include very-very-large-display {
            font-size: ms(2);
        }
        @include very-large-display {
            font-size: ms(1);
        }
        @include small-display {
            margin-bottom: $spacing-medium
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