<template>
    <div class="intro">
        <div class="container">
            <div class="row justify-content-center">
                <intro-card
                        v-for="(item, index) in json"
                        :key="index"
                        class="col-md-6 col-lg-3 mb-4"
                        :title="item.Title"
                        :image="item.Image"
                        :altText="item.AltText"
                        :description="item.Description"
                        :cta="item.CTA"
                        :link="item.URL"
                >
                </intro-card>
            </div>
        </div>
    </div>
</template>

<script>
    import IntroCard from '@/components/IntroCard.vue'
    import json from '../assets/json/intro'

    export default {
        name: 'MyProductList',
        components: {
            IntroCard
        },
        data () {
            return {
                json: json
            }
        }
    }
</script>
