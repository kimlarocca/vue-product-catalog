<template>
    <div class="vue-search-container">
        <slot></slot>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'VueSearch',
        data () {
            return {
                originalItems: [],
                items: [],
                toggledItems: [],
                facets: [],
                keyword: null,
                refinements: [],
                toggleRefinements: [],
                numberOfResults: 0,
                sorting: [],
                sortBy: this.defaultSortBy,
                layout: this.defaultLayout,
                resetIndex: 1
            }
        },
        mounted () {
            axios
                .get('/demo.json')
                .then(response => (
                    this.originalItems = response.data.Results,
                        this.items = response.data.Results,
                        this.filteredItems = response.data.Results,
                        this.facets = response.data.Facets,
                        this.sorting = response.data.Sorting.Items,
                        this.numberOfResults = this.originalItems.length
                ))
        },
        computed: {
            filteredItems () {
                // filter by keyword on the title and brand values
                if (this.keyword) {
                    return this.items.filter(item => item.ItemName.toLowerCase().includes(this.keyword.toLowerCase()) || item.Brand.toLowerCase().includes(this.keyword.toLowerCase()));
                } else {
                    return this.items;
                }
            },
            stringFacets () {
                return this.facets.filter(facet => {
                    if (facet.Type === 'string') return facet;
                })
            },
            toggleFacets () {
                return this.facets.filter(facet => {
                    if (facet.Type === 'toggle') return facet;
                })
            }
        },
        methods: {
            sortItems () {
                if (this.sortBy === 'salepriceasc') {
                    this.filteredItems.sort((a, b) => (parseFloat(a.Price) > parseFloat(b.Price) ? 1 : -1))
                }
                if (this.sortBy === 'salepricedesc') {
                    this.filteredItems.sort((a, b) => (parseFloat(a.Price) > parseFloat(b.Price) ? 1 : -1)).reverse()
                }
                if (this.sortBy === 'titleasc') {
                    this.filteredItems.sort((a, b) => (a.ItemName > b.ItemName) ? 1 : -1)
                }
                if (this.sortBy === 'titledesc') {
                    this.filteredItems.sort((a, b) => (a.ItemName > b.ItemName) ? 1 : -1).reverse()
                }
            },
            applyRefinements () {
                if (this.refinements.length > 0) {
                    this.items = []
                    // loop through refinements array
                    for (let i = 0; i < this.refinements.length; i++) {
                        let key = this.refinements[i].paramName
                        let value = this.refinements[i].value
                        for (let j = 0; j < this.originalItems.length; j++) {
                            let customObject = this.originalItems[j]
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
            },
            applyToggleRefinements () {
                this.toggledItems = []
                if (this.toggleRefinements.length > 0) {
                    // loop through toggle refinements array
                    for (let i = 0; i < this.toggleRefinements.length; i++) {
                        let key = this.toggleRefinements[i].paramName
                        // remove any items that don't match the toggles
                        for (let j = 0; j < this.items.length; j++) {
                            let customObject = this.items[j]
                            if (customObject !== undefined) {
                                // eslint-disable-next-line no-prototype-builtins
                                if (customObject[key]) {
                                    this.toggledItems.push(this.items[j])
                                }
                            }
                        }
                    }
                    this.items = this.toggledItems
                } else {
                    this.items = this.originalItems
                    this.applyRefinements()
                }
            },
            clearRefinements () {
                // reset refinement arrays
                this.refinements = []
                this.toggleRefinements = []
                // uncheck all the refinement checkboxes
                let inputs = document.querySelectorAll('.refinement-item-checkbox')
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].checked = false
                }
                // un-toggle all the toggles
                this.resetIndex++
            }
        },
        watch: {
            refinements () {
                this.applyRefinements()
                this.applyToggleRefinements()
            },
            toggleRefinements () {
                this.applyToggleRefinements()
            }
        }
    }
</script>
