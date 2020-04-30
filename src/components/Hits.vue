<template>
    <div class="hits">
        <p v-if="this.$parent.filteredItems.length === 0">No items found.</p>
        <div class="row">
            <div v-for="(item, index) in this.$parent.filteredItems"
                 :key="index"
                 :class="layout"
                 class="mb-4 item">
                <card
                        :id="item.Id"
                        :image="item.ImageURL"
                        :imageAlt="item.ImageAlt"
                        :brand="item.Brand"
                        :title="item.ItemName"
                        :price="item.Price"
                        :salePrice="item.SalePrice"
                        :isOnSale="item.IsOnSale"
                        :url="item.URL"
                        :layout="layoutName"
                >
                </card>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from '@/components/Card.vue'

    export default {
        name: 'Hits',
        components: {
            'card': Card
        },
        computed: {
            layout () {
                if (this.$parent.layout === 'grid') {
                    return 'col-6 col-md-4'
                } else {
                    return 'col-12 col-md-12'
                }
            },
            layoutName () {
                return this.$parent.layout
            }
        }
    }
</script>
