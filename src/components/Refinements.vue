<template>
    <div class="refinements">
        <template v-for="(refinement, index) in this.$parent.stringFacets">
            <refinement-item
                    v-if="refinement.Values.length > 0"
                    :key="index"
                    class="refinement-item"
                    :name="refinement.Name"
                    :paramName="refinement.ParamName"
                    :refinementObject="refinement"
                    :values="refinement.Values"
                    :isCollapsed="refinement.IsCollapsedByDefault"
                    :numberVisible="refinement.NumberVisible"
            >
            </refinement-item>
        </template>
    </div>
</template>

<script>
    import RefinementItem from '@/components/RefinementItem.vue'

    export default {
        components: {
            RefinementItem
        },
        methods: {
            addRefinement (paramName, value) {
                // add refinement to refinements array
                this.$parent.refinements.push({"paramName": paramName, "value": value})
            },
            removeRefinement (value) {
                // remove refinement from refinements array
                this.$parent.refinements = this.$parent.refinements.filter(item => item.value !== value)
            }
        }
    }
</script>
