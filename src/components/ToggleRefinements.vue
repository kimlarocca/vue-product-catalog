<template>
    <div class="refinements" :key="this.$parent.resetIndex">
        <template v-for="(refinement, index) in this.$parent.toggleFacets">
            <toggle-refinement-item
                    ref="toggle"
                    :key="index"
                    class="toggle-refinement-item"
                    :name="refinement.Name"
                    :paramName="refinement.ParamName"
            >
            </toggle-refinement-item>
        </template>
    </div>
</template>

<script>
    import ToggleRefinementItem from '@/components/ToggleRefinementItem.vue'

    export default {
        components: {
            ToggleRefinementItem
        },
        methods: {
            addToggleRefinement (paramName) {
                // add refinement to toggle refinements array
                this.$parent.toggleRefinements.push({"paramName": paramName, "value": true})
            },
            removeToggleRefinement (paramName) {
                // remove refinement from toggle refinements array
                this.$parent.toggleRefinements = this.$parent.toggleRefinements.filter(item => item.paramName !== paramName)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
