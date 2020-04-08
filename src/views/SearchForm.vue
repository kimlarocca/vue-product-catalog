<template>
    <div>
        <div class="section-padding-60"></div>
        <p class="text-center">Example of a search form you can embed on any page on the site:</p>
        <div class="section-padding-60"></div>
        <search-form/>
        <div class="section-padding-60"></div>
    </div>
</template>

<script>
    import SearchForm from "../components/SearchForm"

    export default {
        name: 'SearchForm',
        components: {
            'search-form': SearchForm
        },
    }
</script>
