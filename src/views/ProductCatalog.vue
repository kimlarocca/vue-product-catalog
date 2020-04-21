<template>
    <div class="product-catalog container">
        <h1 class="text-center">Hawksearch / Vue Product Catalog</h1>
        <div class="section-padding-40"></div>
        <hawksearch>
            <div class="container-small">
                <search/>
            </div>
            <div class="section-padding-40"></div>
            <hr>
            <div class="row">
                <div class="col-3 p-4">
                    <refinements/>
                </div>
                <div class="col-9 border-left p-4">
                    <div class="row align-middle mb-2">
                        <div class="col-4">
                            <h3>Products:</h3>
                        </div>
                        <div class="col-8 text-right">
                            <div class="d-flex justify-content-end">
                                <sort/>
                                <layout-options/>
                            </div>
                        </div>
                    </div>
                    <hits/>
                </div>
            </div>
            <div class="section-padding-60"></div>
        </hawksearch>
    </div>
</template>

<script>
    import Hawksearch from '@/components/Hawksearch.vue'
    import Search from '@/components/Search.vue'
    import Sort from '@/components/Sort.vue'
    import LayoutOptions from '@/components/LayoutOptions.vue'
    import Hits from '@/components/Hits.vue'
    import Refinements from '@/components/Refinements.vue'

    export default {
        name: 'ProductCatalog',
        components: {
            Hawksearch,
            Search,
            Sort,
            LayoutOptions,
            Hits,
            Refinements
        }
    }
</script>

<style lang="scss" scoped>
    .product-catalog {
        .container-small {
            max-width: 540px;
            margin: auto;
        }

        h3 {
            font-family: 'FFDINStdBold', serif;
            font-size: 1.375rem;
        }
    }
</style>
