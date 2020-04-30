<template>
    <div class="clear-refinements">
        <button @click="clearRefinements">Clear Refinements</button>
    </div>
</template>

<script>
    export default {
        name: 'ClearRefinements',
        methods: {
            clearRefinements () {
                this.$parent.clearRefinements()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .clear-refinements {
        button {
            background: $link-color;
            border: none;
            box-shadow: none;
            color: white;
            text-transform: uppercase;
            font-size: .875rem;
            padding: .5rem 1rem;
            cursor: pointer;
            opacity: 1;
            transition: $transition;

            &:hover {
                opacity: $opacity-on-hover;
            }
        }
    }
</style>
