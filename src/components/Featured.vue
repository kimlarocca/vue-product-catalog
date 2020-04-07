<template>
    <div class="hawksearch-featured">
        <carousel
                :perPage="1"
                :navigationEnabled="true"
                :paginationEnabled="false"
                :perPageCustom="[[768, 2], [1024, 4]]"
                navigationNextLabel=""
                navigationPrevLabel=""
        >
            <slide
                    v-for="(item, index) in this.json"
                    :key="index"
                    :data-index="index"
                    :data-name="'slide'+index">
                <div class="hawksearch-item">
                    <card
                            :image="item.ImageURL"
                            :altText="item.ImageAlt"
                            :brand="item.Brand"
                            preTitle="Bard Medical Division"
                            :title="item.ItemName"
                            :link="item.CustomURL"
                            itemNumber="CT33120"
                            size="8 x 8"
                            unitOfMeasure="Box of 5"
                            cta="view product information"
                            layout="grid"
                    >
                    </card>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import Card from '@/components/Card.vue'
    import {Carousel, Slide} from 'vue-carousel'
    import json from "../assets/json/featured"

    export default {
        name: 'Featured',
        components: {
            'card': Card,
            'carousel': Carousel,
            'slide': Slide
        },
        data () {
            return {
                json: json
            }
        }
    }
</script>

<style lang="scss">
    .hawksearch-featured {
        background: $light-gray;
        border-radius: 1rem;
        padding: 1rem;

        .hawksearch-item {
            margin: 0 .25rem;
            height: 100%;
        }
    }
</style>
