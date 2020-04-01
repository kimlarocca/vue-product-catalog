<template>
    <div class="home container">
        <hawksearch>
            <div class="mb-4 text-center">
                <search/>
            </div>
            <hr class="mb-0">
            <div class="row">
                <div class="col-3 p-4">
                    <div class="refine-by">Refine By:</div>
                    <refinements/>
                </div>
                <div class="col-9 border-left p-4">
                    <h2>Featured Products:</h2>
                    <hr>
                    <div class="row align-middle">
                        <div class="col-4">
                            <h2>Products:</h2>
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
        name: 'Home',
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

<style lang="scss">
    .refine-by {
        font-weight: bold;
        font-size: .75rem;
        margin-bottom: .25rem;
    }
</style>
