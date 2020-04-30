<template>
    <div class="product-catalog container">
        <h1 class="text-center mt-4 mb-4">Vue Search</h1>
        <p class="text-center">An open-source UI library for Vue that lets you quickly build an Algolia inspired search
            interface in your front-end application.</p>
        <p class="text-center mb-4"><em>To do list: add "show less" functionality to refinement items / add ability to specify AND or OR for refinements</em></p>
        <vue-search>
            <div class="row">
                <div class="col-4 p-4">
                    <div class="dashed-border p-4">
                        <p class="small">Keyword Search</p>
                        <search/>
                    </div>
                </div>
                <div class="col-4 p-4">
                    <div class="dashed-border p-4">
                        <p class="small">Sort</p>
                        <sort/>
                    </div>
                </div>
                <div class="col-4 p-4">
                    <div class="dashed-border p-4">
                        <p class="small">Layout Options</p>
                        <layout-options/>
                    </div>
                </div>
                <div class="col-3 p-4">
                    <div class="dashed-border p-4 mb-4">
                        <p class="small">Clear Refinements</p>
                        <clear-refinements/>
                    </div>
                    <div class="dashed-border p-4 mb-4">
                        <p class="small">Current Refinements</p>
                        <current-refinements/>
                    </div>
                    <div class="dashed-border p-4 mb-4">
                        <p class="small">Refinements</p>
                        <refinements/>
                    </div>
                    <div class="dashed-border p-4">
                        <p class="small">Toggle Refinements</p>
                        <toggle-refinements/>
                    </div>
                </div>
                <div class="col-9 p-4">
                    <div class="dashed-border p-4">
                        <p class="small">Hits</p>
                        <hits/>
                    </div>
                </div>
            </div>
        </vue-search>
    </div>
</template>

<script>
    import VueSearch from '@/components/VueSearch.vue'
    import Search from '@/components/Search.vue'
    import Sort from '@/components/Sort.vue'
    import LayoutOptions from '@/components/LayoutOptions.vue'
    import Hits from '@/components/Hits.vue'
    import ClearRefinements from '@/components/ClearRefinements.vue'
    import CurrentRefinements from '@/components/CurrentRefinements.vue'
    import Refinements from '@/components/Refinements.vue'
    import ToggleRefinements from '@/components/ToggleRefinements.vue'

    export default {
        name: 'ProductCatalog',
        components: {
            VueSearch,
            Search,
            Sort,
            LayoutOptions,
            Hits,
            ClearRefinements,
            CurrentRefinements,
            Refinements,
            ToggleRefinements
        }
    }
</script>

<style lang="scss" scoped>
    .product-catalog {
        .dashed-border {
            border-radius: .25rem;
            padding: 1rem;
            border: dashed 1px $medium-gray;
        }

        .small {
            font-size: .75rem;
            color: $dark-gray;
        }
    }
</style>
