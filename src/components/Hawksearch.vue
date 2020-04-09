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
                originalItems: [],
                items: [],
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
                    this.originalItems = response.data.Results,
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
                if (this.keyword) {
                    return this.items.filter(item => {
                        return item.ItemName.toLowerCase().includes(this.keyword.toLowerCase());
                    })
                } else {
                    return this.items;
                }
            }
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
            }
        },
        watch: {
            refinements () {
                if (this.refinements.length > 0) {
                    this.items = []
                    // loop through refinements array
                    for (let i = 0; i < this.refinements.length; i++) {
                        let key = this.refinements[i].paramName
                        let value = this.refinements[i].value
                        // loop through items array
                        for (let j = 0; j < this.originalItems.length; j++) {
                            let customObject = this.originalItems[j].Custom
                            if (customObject !== undefined) {
                                // eslint-disable-next-line no-prototype-builtins
                                if (customObject.hasOwnProperty(key) && customObject[key] === value) {
                                    this.items.push(this.originalItems[j])
                                }
                            }
                        }
                    }
                    // get rid of duplicates
                    this.items = [...new Set(this.items)]
                } else {
                    this.items = this.originalItems
                }
            }
        }
    }
</script>
