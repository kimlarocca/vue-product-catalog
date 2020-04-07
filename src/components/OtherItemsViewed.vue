<template>
    <div class="other-items-viewed">
        <h3 class="mb-3">Other Items You've Viewed:</h3>
        <div class="row">
            <div v-for="(item, index) in json"
                 :key="index"
                 class="col-6 col-md-3 mb-2 hawksearch-item">
                <card
                        :image="item.ImageURL"
                        :altText="item.ImageAlt"
                        :brand="item.Brand"
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
        </div>
    </div>
</template>

<script>
    import Card from '@/components/Card.vue'
    import json from '../assets/json/other-items-viewed'

    export default {
        name: 'OtherItemsViewed',
        components: {
            Card
        },
        data () {
            return {
                json: json
            }
        }
    }
</script>

<style lang="scss" scoped>
    .other-items-viewed {
        h3 {
            font-family: 'FFDINStdBold', serif;
            font-size: 1.375rem;
        }
    }
</style>
