<template>
    <div class="hawksearch-refinements">
        <template v-for="(refinement, index) in this.$parent.facets">
            <refinement-item
                    v-if="refinement.Values.length > 0"
                    :key="index"
                    class="refinement-item"
                    :name="refinement.Name"
                    :paramName="refinement.ParamName"
                    :values="refinement.Values"
                    :isCollapsed="refinement.IsCollapsedDefault"
                    :numberVisible="refinement.NofVisible"
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
            toggleRefinement(paramName, value){
                // let newRefinement = {"paramName": paramName, "value": value}
                let newRefinement = value
                this.$parent.refinements.push(newRefinement)
            }

        }
    }
</script>
