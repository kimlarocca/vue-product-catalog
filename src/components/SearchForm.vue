<template>
    <div class="hawksearch-search-form">
        <form method="get" action="/product-catalog">
            <div class="hawksearch-search-input">
                <label for="search" class="hide-a11y-element">Search Input</label>
                <input id="search"
                       name="query"
                       type="text"
                       placeholder="Search for a type of product, item #, item name, brand, etc."/>
                <i class="fas fa-search"></i>
            </div>
            <input type="submit" value="search" class="btn primary-default-btn">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'SearchForm'
    }
</script>

<style lang="scss" scoped>
    .hawksearch-search-form {
        margin: auto;
        width: fit-content;

        .hawksearch-search-input {
            position: relative;
            float: left;
            width: 450px;
            max-width: 100%;
            margin-right: 1rem;

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

        input[type=submit] {
            padding: 0;
            height: 2rem;
            min-height: 2rem;
            border-radius: 1.5rem;
            &:hover {
                padding: 0!important;
                height: 2rem;
                min-height: 2rem;
            }
        }
    }
</style>
