<template>
    <div class="search">
        <label for="search" class="hide-a11y-element">keyword search</label>
        <input id="search" v-model="keyword" ref="search" type="text" placeholder="search here..."/>
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
    .search {
        position: relative;

        input {
            width: 100%;
            height: 2rem;
            line-height: 2rem;
            padding: .5rem;
            position: relative;
            background: $light-gray;
            border: none;
            border-radius: .25rem;
            color: $dark-gray;
            font-size: .75rem;

            &::placeholder {
                font-size: .75rem;
                color: $dark-gray;
            }

            &:focus {
                outline: none;
                box-shadow: 0px 0px 2px $link-color;
                border-radius: .25rem;
            }
        }

        i {
            position: absolute;
            top: .5rem;
            right: .5rem;
            color: $dark-gray;
        }
    }
</style>
