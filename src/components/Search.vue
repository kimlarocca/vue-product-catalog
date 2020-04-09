<template>
    <div class="hawksearch-search">
        <label for="search" class="hide-a11y-element">Search Input</label>
        <input id="search" v-model="keyword" ref="search" type="text" placeholder="keyword search"/>
        <i class="fas fa-search"></i>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data: function () {
            return {
                keyword: null
            }
        },
        mounted () {
            //check for query parameter
            let uri = window.location.search.substring(1)
            let params = new URLSearchParams(uri)
            let query = params.get("query")
            if (query !== null) {
                this.keyword = query
            }
        },
        watch: {
            keyword () {
                this.$parent.keyword = this.keyword
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hawksearch-search {
        position: relative;

        input {
            width: 100%;
            height: 2rem;
            line-height: 2rem;
            border: solid 1px $light-gray;
            border-radius: 2rem;
            padding: .5rem;
            position: relative;

            &::placeholder {
                font-size: .875rem;
                color: $font-color;
            }
        }

        i {
            position: absolute;
            top: .375rem;
            right: .5rem;
        }
    }
</style>
