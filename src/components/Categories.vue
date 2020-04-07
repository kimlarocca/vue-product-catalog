<template>
    <div class="categories">
        <ul>
            <li v-for="(category, index) in categories" :key="index">
                <a :href="category.URL">{{ category.Name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import categories from "../assets/json/categories"

    export default {
        name: 'Categories',
        data () {
            return {
                categories: categories
            }
        }
    }
</script>

<style lang="scss" scoped>
    .categories {
        margin: 3rem 0 2rem;

        ul {
            list-style: none;
            margin: auto;

            li {
                display: inline-block;
                text-transform: uppercase;
                font-size: .875rem;

                &:after {
                    content: '|';
                    margin: 0 1rem;
                }

                &:last-of-type {
                    &:after {
                        display: none;
                    }
                }

                a,
                a:visited,
                a:active {
                    color: $font-color;
                    padding-bottom: 1px;

                    &:hover {
                        color: $link-color;
                        font-family: 'FFDINStdBold', serif;
                        text-decoration: none;
                        border-bottom: solid 2px $green;
                    }
                }
            }
        }
    }
</style>
