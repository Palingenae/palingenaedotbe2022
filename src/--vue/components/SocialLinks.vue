<template>
    <div class="social-links">
        <a v-for="socialProfile in socialProfiles" :key="socialProfile.name" :href='socialProfile.link' target="_blank" rel="noopener">{{ socialProfile.name }}</a>
    </div>
</template>

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