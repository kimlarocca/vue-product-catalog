<template>
    <div class="hawksearch-hits">
        <div class="row">
            <div v-for="(item, index) in this.$parent.filteredItems"
                 :key="index"
                 :class="layout"
                 class="mb-4 hawksearch-item">
                <card
                        :image="item.ImageURL"
                        :altText="item.ImageAlt"
                        :brand="item.Brand"
                        :title="item.ItemName"
                        :link="item.CustomURL"
                        :subtitle="item.ItemName"
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
