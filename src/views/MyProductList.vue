<template>
    <div class="my-product-list">
        <div class="container">
            <div v-for="(item, index) in json"
                 :key="index"
                 class="mb-2 hawksearch-item">
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
                        layout="list"
                >
                </card>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from '@/components/Card.vue'
    import json from '../assets/json/my-product-list'

    export default {
        name: 'MyProductList',
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
