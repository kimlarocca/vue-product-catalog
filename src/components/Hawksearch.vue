<template>
    <div class="hawksearch-wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Hawksearch',
        data () {
            return {
                items: [],
                filteredItems: [],
                facets: [],
                keyword: null,
                refinements: [],
                numberOfResults: 0,
                maxPerPage: 0,
                numberOfPages: 0,
                currentPage: 1,
                sorting: [],
                sortBy: this.defaultSortBy,
                layout: this.defaultLayout
            }
        },
        mounted () {
            axios
                .get(this.api)
                .then(response => (
                    this.items = response.data.Results,
                        this.filteredItems = response.data.Results,
                        this.facets = response.data.Facets,
                        this.sorting = response.data.Sorting.Items,
                        this.numberOfResults = response.data.Pagination.NofResults,
                        this.maxPerPage = response.data.Pagination.MaxPerPage,
                        this.numberOfPages = response.data.Pagination.NofPages
                ))
        },
        methods: {
            sortItems () {
                if (this.sortBy === 'score') {
                    this.filteredItems.sort((a, b) => (a.score > b.score) ? 1 : -1)
                }
                if (this.sortBy === 'salepriceasc') {
                    this.filteredItems.sort((a, b) => (a.Custom.price > b.Custom.price) ? 1 : -1)
                }
                if (this.sortBy === 'salepricedesc') {
                    this.filteredItems.sort((a, b) => (a.Custom.price > b.Custom.price) ? 1 : -1).reverse()
                }
                if (this.sortBy === 'titleasc') {
                    this.filteredItems.sort((a, b) => (a.ItemName > b.ItemName) ? 1 : -1)
                }
                if (this.sortBy === 'titledesc') {
                    this.filteredItems.sort((a, b) => (a.ItemName > b.ItemName) ? 1 : -1).reverse()
                }
            },
            filterByRefinements () {
                this.filteredItems = []
                if(this.refinements.length === 0) this.filteredItems = this.items
                // for (var i = 0; i <= this.refinements.length; i++) {
                //     if(this.refinements[i] !== undefined) {
                //         // need to add code that filters the array by the refinement
                //         console.log(this.refinements[i])
                //     }
                // }
                this.sortItems()
            }
        }
    }
</script>
