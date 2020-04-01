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
                facets: [],
                keyword: null,
                refinements: [],
                numberOfResults: 0,
                maxPerPage: 0,
                numberOfPages: 0,
                currentPage: 1,
                sorting: [],
                sortBy: 'titleasc',
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
        computed: {
            filteredItems () {
                let filteredItems = this.items
                // keyword search
                if (this.keyword) {
                    filteredItems = filteredItems.filter((item) => {
                        return item.ItemName.toLowerCase().includes(this.keyword.toLowerCase())
                    })
                }
                // sort items
                this.sortItems(filteredItems)
                return filteredItems
            }
        },
        methods: {
            sortItems (arr) {
                if (this.sortBy === 'score') {
                    arr.sort((a, b) => (a.score > b.score) ? 1 : -1)
                }
                if (this.sortBy === 'salepriceasc') {
                    arr.sort((a, b) => (a.Custom.price > b.Custom.price) ? 1 : -1)
                }
                if (this.sortBy === 'salepricedesc') {
                    arr.sort((a, b) => (a.Custom.price > b.Custom.price) ? 1 : -1).reverse()
                }
                if (this.sortBy === 'titleasc') {
                    arr.sort((a, b) => (a.ItemName > b.ItemName) ? 1 : -1)
                }
                if (this.sortBy === 'titledesc') {
                    arr.sort((a, b) => (a.ItemName > b.ItemName) ? 1 : -1).reverse()
                }
            }
        },
        // watch: {
        //     refinements () {
        //         console.log('refinements updated')
        //     }
        // }
    }
</script>
